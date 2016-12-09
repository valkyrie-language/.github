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
import {LANGUAGE_FEATURES} from "@/types/features.js";
</script>


<style lang="scss" scoped>
.language-features {
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    padding: 4rem 0;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--vt-c-text-1);
    
    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
      gap: 2rem;
      padding: 0 2rem;
    }
  }
}
</style>