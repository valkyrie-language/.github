<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ParticleBackground from './ParticleBackground.vue'
import LanguageExamples from './LanguageExamples.vue'

const { t } = useI18n()
const router = useRouter()

// 定义组件属性
interface Props {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  playText?: string
  playLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  ctaText: '',
  ctaLink: ''
})

const emit = defineEmits<{
  (e: 'cta-click'): void
}>()

const handleCtaClick = () => {
  emit('cta-click')
}

// 代码示例轮播
const examples = ref<string[]>([])

// 加载示例代码
const loadExamples = async () => {
  const exampleModules = import.meta.glob('../assets/examples/*.valkyrie', { as: 'raw' })
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

<template>
  <div class="language-show">
    <ParticleBackground />
    <div class="language-info">
      <h1>{{ title || t('home.title') }}</h1>
      <p class="subtitle">{{ subtitle || t('home.subtitle') }}</p>
      <button v-if="ctaText" class="cta-button" @click="handleCtaClick">
        {{ ctaText }}
      </button>
      <button v-if="playText" class="cta-button" @click="handleCtaClick">
        {{ playText }}
      </button>
    </div>
    <div class="code-preview">
      <div class="code-window">
        <div class="window-controls">
          <span class="control red"></span>
          <span class="control yellow"></span>
          <span class="control green"></span>
          <button class="play-button" @click="copyToPlayground" :title="t('home.tryInPlayground')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        </div>
        <LanguageExamples :examples="examples" />
      </div>
    </div>
  </div>
</template>

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
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
}

.cta-button {
  background-color: var(--primary-color);
  color: var(--text-primary);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;
  
  &:hover {
    background-color: darken(#FFD700, 10%);
  }
}

.code-preview {
  flex: 1;
  position: relative;
  
  .code-window {
    background-color: #1e1e1e;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
  
  .window-controls {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #252525;
    
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

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
}
</style>