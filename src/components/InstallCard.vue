<template>
  <div class="install-card">
    <h3>{{ platform }}</h3>
    <div class="steps">
      <div v-for="(step, index) in steps" :key="index" class="step">
        {{ index + 1 }}. {{ t(step) }}
      </div>
    </div>
    <div v-if="packageManagers && packageManagers.length > 0" class="package-managers">
      <h4>{{ t('download.packageManagers.title') }}</h4>
      <div class="code-block">
        <pre><code v-for="(manager, index) in packageManagers" :key="index">{{ manager }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

defineProps({
  platform: {
    type: String,
    required: true
  },
  steps: {
    type: Array as () => string[],
    required: true
  },
  packageManagers: {
    type: Array as () => string[],
    default: () => []
  }
})

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.install-card {
  background-color: var(--vt-c-white);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--vt-c-text-1);
  }

  .steps {
    margin-bottom: 1.5rem;

    .step {
      margin-bottom: 0.75rem;
      color: var(--vt-c-text-2);
      line-height: 1.6;
    }
  }

  .package-managers {
    h4 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: var(--vt-c-text-1);
    }

    .code-block {
      background-color: var(--vt-c-bg-soft);
      border-radius: 4px;
      padding: 1rem;

      pre {
        margin: 0;
        code {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--vt-c-text-code);
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>