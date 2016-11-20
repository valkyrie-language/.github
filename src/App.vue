<script lang="ts" setup>
import {RouterView} from 'vue-router'
import {useI18n} from 'vue-i18n'
import TopBar from './components/TopBar.vue'
import './style/_variable.scss'

const {t} = useI18n()
</script>

<template>
  <TopBar />
  <RouterView/>
</template>

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
}
</style>