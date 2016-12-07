<template>
  <div class="language-show">
    <ParticleBackground/>
    <div class="language-info">
      <h1>{{ t('home.title') }}</h1>
      <p class="subtitle">{{ t('home.subtitle') }}</p>
      <div class="buttons-container">
        <button class="cta-button" @click="jumpDownload">
          {{ t('home.show.download') }}
        </button>
        <button class="cta-button" @click="jumpPlayground">
          {{ t('home.show.playground') }}
        </button>
      </div>
    </div>
    <div class="code-preview">
      <div class="code-window">
        <div class="window-controls">
          <span class="control red"></span>
          <span class="control yellow"></span>
          <span class="control green"></span>
          <button class="play-button" @click="copyToPlayground" :title="t('home.tryInPlayground')">
            <img :src="PlayIcon" alt="Play"/>
          </button>
        </div>
        <div class="examples-container">
          <IntroduceCode :examples="examples"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import ParticleBackground from './ParticleBackground.vue'
import IntroduceCode from './IntroduceCode.vue'
import PlayIcon from '../assets/icon/play.svg'

const {t} = useI18n()
const router = useRouter()

const jumpDownload = () => {
  window.open('https://github.com/valkyrie-lang/valkyrie/releases/latest', '_blank')
}

const jumpPlayground = () => {
  window.open('https://playground.valkyrie-lang.org', '_blank')
}

// 代码示例轮播
const examples = ref<string[]>([])

// 加载示例代码
const loadExamples = async () => {
  const exampleModules = import.meta.glob('../assets/examples/*.valkyrie', {as: 'raw'})
  const loadedExamples = await Promise.all(
    Object.entries(exampleModules).map(([_, loader]) => loader())
  )
  examples.value = loadedExamples
}

// 复制到 playground
const copyToPlayground = () => {
  const currentExample = examples.value[0]
  localStorage.setItem('playground-code', currentExample)
  router.push('/playground')
}

onMounted(async () => {
  await loadExamples()
})
</script>


<style lang="scss" scoped>
.language-show {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.language-info {
  flex: 1;

  h1 {
    font-size: 3rem;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .buttons-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
}

.cta-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(55, 128, 255, 0.25);

  &:hover {
    background-color: darken(#3780ff, 10%);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(55, 128, 255, 0.3);
  }
}

.code-preview {
  flex: 1;
  position: relative;

  .code-window {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }

  .window-controls {
    display: flex;
    align-items: center;
    padding: 10px;
    background: linear-gradient(to right, #f8f8f8, #ffffff);
    border-bottom: 1px solid #eaeaea;

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

    .play-button {
      margin-left: auto;
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: background-color 0.2s;

      img {
        width: 16px;
        height: 16px;
        filter: invert(1);
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }

  .examples-container {
    :deep(.code-window) {
      border-radius: 0;
      box-shadow: none;

      .window-controls {
        display: none;
      }
    }
  }
}
</style>