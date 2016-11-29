<template>
  <div class="home">
    <TopBar/>
    <language-introduces/>
    <language-introduces/>
    <language-applications/>
    <Footer/>
  </div>
</template>
<script lang="ts" setup>
import {useI18n} from 'vue-i18n'
import {useRouter} from 'vue-router'
import LanguageIntroduces from '@/components/LanguageIntroduces.vue'
import LanguageApplications from '@/components/LanguageApplications.vue'
import TopBar from "@/components/TopBar.vue";
import Footer from "@/components/Footer.vue";

const {t} = useI18n()
const router = useRouter()

const goToPlayground = () => {
  router.push('/playground')
}

const valkyrieCodeExample = `
micro() { }
mezzo() { }
macro() { }
`
</script>


<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
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