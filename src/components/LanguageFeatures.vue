<template>
  <section class="language-features">
    <h2>{{ $t('features.title') }}</h2>
    <div class="features-grid">
      <feature-card
        v-for="feature in LANGUAGE_FEATURES"
        :key="feature.titleKey"
        v-bind="feature"
      />
    </div>
  </section>
</template>


<script setup lang="ts">
import FeatureCard from './FeatureCard.vue'
import LexicalIcon from '../assets/icon/feature-lexical.svg'
import SafetyIcon from '../assets/icon/feature-safety.svg'
import PolymorphismIcon from '../assets/icon/feature-polymorphism.svg'

export type LanguageFeature = {
  icon: string
  titleKey: string
  descriptionKey: string
  learnMoreLink: string
}

export const LANGUAGE_FEATURES: LanguageFeature[] = [
  {
    icon: LexicalIcon,
    titleKey: 'features.lexicalEffectHandlers.title',
    descriptionKey: 'features.lexicalEffectHandlers.description',
    learnMoreLink: '/docs/effect-handlers'
  },
  {
    icon: SafetyIcon,
    titleKey: 'features.effectSafety.title',
    descriptionKey: 'features.effectSafety.description',
    learnMoreLink: '/docs/effect-safety'
  },
  {
    icon: PolymorphismIcon,
    titleKey: 'features.lightweightPolymorphism.title',
    descriptionKey: 'features.lightweightPolymorphism.description',
    learnMoreLink: '/docs/polymorphism'
  }
]
</script>


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
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 2rem;
    padding: 0 2rem;
  }
}
</style>