<template>
  <div class="tool-card">
    <div class="tool-icon">
      <img :src="icon" :alt="name" v-if="icon">
      <div class="default-icon" v-else></div>
    </div>
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <a :href="link" class="tool-link" target="_blank" rel="noopener" v-if="link">
      {{ t('tools.learnMore') }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  }
})

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.tool-card {
  background-color: var(--vt-c-white);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .tool-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .default-icon {
      width: 100%;
      height: 100%;
      background-color: var(--primary-color);
      border-radius: 50%;
    }
  }

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: var(--vt-c-text-1);
  }

  p {
    color: var(--vt-c-text-2);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .tool-link {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: darken(#3b82f6, 10%);
    }
  }
}
</style>