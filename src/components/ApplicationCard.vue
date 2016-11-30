<template>
  <div class="application-card">
    <div class="application-icon" v-html="icon"></div>
    <h3>{{ t(titleKey) }}</h3>
    <p>{{ t(descriptionKey) }}</p>
    <a v-if="learnMoreLink" :href="learnMoreLink" class="learn-more-btn">
      {{ t('common.learnMore') }}
    </a>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n'

interface Props {
  icon: string
  titleKey: string
  descriptionKey: string
  learnMoreLink?: string
}

const props = withDefaults(defineProps<Props>(), {
  learnMoreLink: ''
})

const {t} = useI18n()
</script>


<style lang="scss" scoped>
.application-card {
  background: var(--vt-c-white);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 280px; /* 设置固定宽度 */
  margin: 0 auto;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }

  .application-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
    color: var(--vt-c-text-1);
  }

  p {
    color: var(--vt-c-text-2);
    margin-bottom: 1.75rem;
    line-height: 1.7;
    flex-grow: 1;
  }

  .learn-more-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--vt-c-divider);
    border-radius: 6px;
    color: var(--vt-c-text-1);
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    align-self: center;

    &:hover {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }
  }
}
</style>