<script setup lang="ts">
import FeatureCard from './FeatureCard.vue'

const features = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16v16H4V4z" fill="#8B5CF6"/>
      <path d="M8 8h8v8H8V8z" fill="white"/>
    </svg>`,
    titleKey: 'features.lexicalEffectHandlers.title',
    descriptionKey: 'features.lexicalEffectHandlers.description',
    learnMoreLink: '/docs/effect-handlers'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" fill="#EF4444"/>
      <path d="M12 8l4.5 2.25v4.5L12 17l-4.5-2.25v-4.5L12 8z" fill="white"/>
    </svg>`,
    titleKey: 'features.effectSafety.title',
    descriptionKey: 'features.effectSafety.description',
    learnMoreLink: '/docs/effect-safety'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#10B981"/>
      <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" fill="white"/>
    </svg>`,
    titleKey: 'features.lightweightPolymorphism.title',
    descriptionKey: 'features.lightweightPolymorphism.description',
    learnMoreLink: '/docs/polymorphism'
  }
]
</script>

<template>
  <section class="language-features">
    <h2>{{ $t('features.title') }}</h2>
    <div class="features-grid">
      <FeatureCard
        v-for="feature in features"
        :key="feature.titleKey"
        v-bind="feature"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.language-features {
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--vt-c-text-1);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 2rem;
  }
}
</style>