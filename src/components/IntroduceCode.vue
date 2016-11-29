<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'
import {createHighlighter} from 'shiki'

interface Props {
  examples?: string[]
  maxHeight?: string
}

const props = withDefaults(defineProps<Props>(), {
  examples: () => [],
  maxHeight: '300px'
})

const currentExampleIndex = ref(0)
const autoPlayInterval = ref<number | null>(null)
const highlightedCode = ref('')
const highlighter = ref<any>(null)
const isSliding = ref(false)
const slideDirection = ref('')

// 切换示例
const nextExample = () => {
  if (isSliding.value) return
  isSliding.value = true
  slideDirection.value = 'left'
  setTimeout(() => {
    currentExampleIndex.value = (currentExampleIndex.value + 1) % props.examples.length
    highlightCode()
    slideDirection.value = ''
    isSliding.value = false
  }, 300)
}

const prevExample = () => {
  if (isSliding.value) return
  isSliding.value = true
  slideDirection.value = 'right'
  setTimeout(() => {
    currentExampleIndex.value = currentExampleIndex.value === 0
      ? props.examples.length - 1
      : currentExampleIndex.value - 1
    highlightCode()
    slideDirection.value = ''
    isSliding.value = false
  }, 300)
}

// 代码高亮
const highlightCode = async () => {
  if (!highlighter.value) return
  highlightedCode.value = highlighter.value.codeToHtml(
    props.examples[currentExampleIndex.value],
    {
      theme: 'github-light',
      lang: 'typescript'
    }
  )
}

// 自动播放
const startAutoPlay = () => {
  if (!autoPlayInterval.value) {
    autoPlayInterval.value = window.setInterval(nextExample, 5000)
  }
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

onMounted(async () => {
  highlighter.value = await createHighlighter({
    themes: ['github-light'],
    langs: ['typescript'],
  })
  await highlightCode()
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div class="code-preview" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <div class="code-window">
      <div class="window-controls">
        <span class="control red"></span>
        <span class="control yellow"></span>
        <span class="control green"></span>
      </div>
      <div class="code-content-wrapper" :class="{
        'sliding-left': slideDirection === 'left',
        'sliding-right': slideDirection === 'right'
      }">
        <button class="nav-button prev" @click="prevExample">&lt;</button>
        <div class="code-content" :style="{ maxHeight: maxHeight }" v-html="highlightedCode"></div>
        <button class="nav-button next" @click="nextExample">&gt;</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.code-preview {
  position: relative;

  .code-window {
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  .code-content-wrapper {
    position: relative;

    .code-content {
      transition: transform 0.3s ease-in-out;
      transform: translateX(0);
    }

    &.sliding-left .code-content {
      transform: translateX(-100%);
    }

    &.sliding-right .code-content {
      transform: translateX(100%);
    }
  }

  .window-controls {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;

    .control {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      margin-right: 8px;

      &.red {
        background-color: #ff5f56;
      }

      &.yellow {
        background-color: #ffbd2e;
      }

      &.green {
        background-color: #27c93f;
      }
    }
  }

  .code-content-wrapper {
    position: relative;

    .nav-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 1;

      &.prev {
        left: 0;
        border-radius: 0 4px 4px 0;
      }

      &.next {
        right: 0;
        border-radius: 4px 0 0 4px;
      }
    }

    &:hover .nav-button {
      opacity: 1;
    }
  }

  .code-content {
    padding: 1rem;
    margin: 0;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;

      &:hover {
        background: #555;
      }
    }

    :deep(pre) {
      margin: 0;
      font-family: 'Fira Code', monospace;
      font-size: 14px;
      line-height: 1.5;
      background-color: transparent !important;
    }
  }
}
</style>