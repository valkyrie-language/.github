<template>
  <div class="feature-cell">
    <img class="feature-icon" :src="icon" :alt="titleKey"/>
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
.feature-cell {
  background: var(--vt-c-white);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .feature-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--vt-c-text-1);
  }

  p {
    color: var(--vt-c-text-2);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .learn-more-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid var(--vt-c-divider);
    border-radius: 4px;
    color: var(--vt-c-text-1);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: var(--vt-c-divider);
      color: var(--vt-c-text-1);
    }
  }
}
</style>