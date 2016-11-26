<template>
  <nav class="top-bar">
    <div class="left">
      <router-link to="/" class="logo"> {{ t('common.projectName') }}</router-link>
      <router-link to="/">{{ t('nav.home') }}</router-link>
      <router-link to="/playground">{{ t('nav.playground') }}</router-link>
    </div>
    <div class="right">
      <a
        href="https://github.com/valkyrie-language/valkyrie"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-button"
        :title="t('common.github')"
      >
        <img :src="GithubIcon" alt="GitHub"/>
      </a>
      <a
        href="https://discord.gg/valkyrie"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-button"
        :title="t('common.discord')"
      >
        <img :src="DiscordIcon" alt="Discord"/>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n'
import GithubIcon from '../assets/icon/github.svg'
import DiscordIcon from '../assets/icon/discord.svg'

const {t} = useI18n()
</script>


<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color);

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    text-decoration: none;

    &:hover {
      color: darken(#FFD700, 10%);
    }
  }

  .right {
    display: flex;
    gap: 1rem;
  }

  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    color: var(--text-color);
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>