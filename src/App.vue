<script lang="ts" setup>
import {RouterView} from 'vue-router'
import {useI18n} from 'vue-i18n'
import TopBar from './components/TopBar.vue'

const {t} = useI18n()
</script>

<template>
  <TopBar />
  <RouterView/>
</template>

<style lang="scss">
:root {
  --primary-color: #6200ea;
  --secondary-color: #b388ff;
  --background-color: #f5f5f5;
  --text-color: #333;
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
}
</style>