<template>
  <div class="home">
    <language-introduce/>
    <language-features/>
    <language-applications/>
  </div>
</template>
<script lang="ts" setup>
import LanguageIntroduce from '@/components/LanguageIntroduce.vue'
import LanguageApplications from '@/components/LanguageApplications.vue'
import LanguageFeatures from "@/components/LanguageFeatures.vue";
</script>


<style lang="scss" scoped>
.home {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
}

.features {
  padding: 4rem 0;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: var(--primary-color);
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-color);
    line-height: 1.6;
  }
}
</style>