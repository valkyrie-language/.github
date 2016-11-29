<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import TopBar from './components/TopBar.vue'
import Footer from './components/Footer.vue'
import './style/_variable.scss'
import {useI18n} from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isPlayground = computed(() => route.path === '/playground')
const {t} = useI18n()
</script>


<style lang="scss">
@import './style/_variable.scss';

:root {
  --primary-color: #{$primary-color};
  --secondary-color: #{$secondary-color};
  --background-color: #{$background-color};
  --text-color: #{$text-primary};
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-color);
  color: var(--text-color);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>