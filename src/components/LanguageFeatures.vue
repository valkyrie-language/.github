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