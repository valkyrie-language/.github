<script setup lang="ts">
import { ref } from 'vue'

const currentTheme = ref('light')
const currentLang = ref('en-US')

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  // TODO: 实现主题切换逻辑
}

const toggleLang = () => {
  currentLang.value = currentLang.value === 'en-US' ? 'zh-CN' : 'en-US'
  // TODO: 实现语言切换逻辑
}
</script>

<template>
  <nav class="top-bar">
    <div class="nav-links">
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/playground" class="nav-link">Playground</router-link>
    </div>
    <div class="actions">
      <button @click="toggleLang" class="action-btn">
        {{ currentLang === 'en-US' ? 'EN' : '中' }}
      </button>
      <button @click="toggleTheme" class="action-btn">
        {{ currentTheme === 'light' ? '☀️' : '🌙' }}
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--vt-c-white);
  border-bottom: 1px solid var(--vt-c-divider-light);

  .nav-links {
    display: flex;
    gap: 1rem;

    .nav-link {
      text-decoration: none;
      color: var(--vt-c-text-1);
      font-weight: 500;

      &:hover {
        color: var(--vt-c-green);
      }

      &.router-link-active {
        color: var(--vt-c-green);
      }
    }
  }

  .actions {
    display: flex;
    gap: 0.5rem;

    .action-btn {
      padding: 0.25rem 0.5rem;
      border: 1px solid var(--vt-c-divider-light);
      border-radius: 4px;
      background: transparent;
      cursor: pointer;

      &:hover {
        background-color: var(--vt-c-divider-light);
      }
    }
  }
}
</style>