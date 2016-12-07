<template>
  <nav class="top-bar">
    <div class="left">
      <router-link to="/" class="logo">
        <img :src="LogoIcon" alt="Logo" class="logo-icon"/>
        <span>{{ t('common.projectName') }}</span>
      </router-link>
      <div class="nav-links">
        <router-link to="/">{{ t('nav.home') }}</router-link>
        <router-link to="/playground">{{ t('common.playground') }}</router-link>
        <router-link to="/document">{{ t('common.document') }}</router-link>
        <router-link to="/download">{{ t('common.download') }}</router-link>
        <router-link to="/community">{{ t('common.community') }}</router-link>
      </div>
    </div>
    <div class="right">
      <LanguageSwitch/>
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
import LogoIcon from '../assets/icon/logo.svg'
import LanguageSwitch from './LanguageSwitch.vue'

const {t} = useI18n()
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background: white;
  border-bottom: 1px solid rgba(55, 128, 255, 0.1);
  box-shadow: 0 2px 10px rgba(55, 128, 255, 0.05);

  .left {
    display: flex;
    align-items: center;
    gap: 2rem;

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--primary-color);
      text-decoration: none;
      transition: transform var(--transition-duration);

      &:hover {
        transform: scale(1.05);
      }

      .logo-icon {
        width: 32px;
        height: 32px;
      }

      span {
        background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
      }
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;

      a {
        color: var(--text-primary);
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem 0;
        position: relative;
        transition: color var(--transition-duration);

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-color);
          transition: width var(--transition-duration);
        }

        &:hover, &.router-link-active {
          color: var(--primary-color);

          &::after {
            width: 100%;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    gap: 1rem;

    .icon-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: transparent;
      transition: all var(--transition-duration);

      img {
        width: 24px;
        height: 24px;
        transition: transform var(--transition-duration);
      }

      &:hover {
        background: rgba(55, 128, 255, 0.1);

        img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>