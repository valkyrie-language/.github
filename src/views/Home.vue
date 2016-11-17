<script lang="ts" setup>
import {useI18n} from 'vue-i18n'
import {useRouter} from 'vue-router'

const {t} = useI18n()
const router = useRouter()

const goToPlayground = () => {
  router.push('/playground')
}
</script>

<template>
  <div class="home">
    <header class="hero">
      <h1>{{ t('home.title') }}</h1>
      <p class="subtitle">{{ t('home.subtitle') }}</p>
      <button class="cta-button" @click="goToPlayground">
        {{ t('home.getStarted') }}
      </button>
    </header>

    <section class="features">
      <h2>{{ t('home.features.title') }}</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>{{ t('home.features.safety.title') }}</h3>
          <p>{{ t('home.features.safety.description') }}</p>
        </div>
        <div class="feature-card">
          <h3>{{ t('home.features.performance.title') }}</h3>
          <p>{{ t('home.features.performance.description') }}</p>
        </div>
        <div class="feature-card">
          <h3>{{ t('home.features.modern.title') }}</h3>
          <p>{{ t('home.features.modern.description') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 0;

  h1 {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 2rem;
  }
}

.cta-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken(#6200ea, 10%);
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