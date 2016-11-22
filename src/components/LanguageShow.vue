<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 定义组件属性
interface Props {
  title?: string
  subtitle?: string
  codeExample?: string
  codeLanguage?: string
  ctaText?: string
  ctaLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  codeExample: '',
  codeLanguage: 'typescript',
  ctaText: '',
  ctaLink: ''
})

const emit = defineEmits<{
  (e: 'cta-click'): void
}>()

const handleCtaClick = () => {
  emit('cta-click')
}
</script>

<template>
  <div class="language-show">
    <div class="language-info">
      <h1>{{ title || t('home.title') }}</h1>
      <p class="subtitle">{{ subtitle || t('home.subtitle') }}</p>
      <button v-if="ctaText" class="cta-button" @click="handleCtaClick">
        {{ ctaText }}
      </button>
    </div>
    <div class="code-preview">
      <div class="code-window">
        <div class="window-controls">
          <span class="control red"></span>
          <span class="control yellow"></span>
          <span class="control green"></span>
        </div>
        <pre class="code-content"><code>{{ codeExample }}</code></pre>
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
  
  .code-window {
    background-color: #1e1e1e;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
  
  .window-controls {
    display: flex;
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
  }
  
  .code-content {
    padding: 1rem;
    margin: 0;
    color: #f8f8f2;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.5;
    overflow-x: auto;
  }
}
</style>