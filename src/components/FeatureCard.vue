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
import {LanguageFeature} from "@/types/features";

const props = defineProps<LanguageFeature>()

const {t} = useI18n()
</script>

<style lang="scss" scoped>
.feature-cell {
  background: var(--vt-c-white);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 20px rgba(55, 128, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(55, 128, 255, 0.15);
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
    color: var(--primary-color);
  }

  p {
    color: var(--vt-c-text-2);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .learn-more-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary-color);
    border-radius: 6px;
    color: var(--primary-color);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: var(--primary-color);
      color: white;
    }
  }
}
</style>