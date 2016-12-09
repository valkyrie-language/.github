<template>
  <nav class="top-bar">
    <div class="left">
      <router-link to="/" class="logo">
        <img :src="LogoIcon" alt="Logo" class="logo-icon"/>
        <span>{{ t('common.projectName') }}</span>
      </router-link>
      <div class="nav-links" :class="{ 'active': menuOpen }">
        <router-link to="/" @click="menuOpen = false">{{ t('nav.home') }}</router-link>
        <router-link to="/playground" @click="menuOpen = false">{{ t('common.playground') }}</router-link>
        <router-link to="/document" @click="menuOpen = false">{{ t('common.document') }}</router-link>
        <router-link to="/download" @click="menuOpen = false">{{ t('common.download') }}</router-link>
        <router-link to="/community" @click="menuOpen = false">{{ t('common.community') }}</router-link>
      </div>
      <button class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
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
import {ref} from 'vue'
import GithubIcon from '../assets/icon/github.svg'
import DiscordIcon from '../assets/icon/discord.svg'
import LogoIcon from '../assets/icon/logo.svg'
import LanguageSwitch from './LanguageSwitch.vue'

const {t} = useI18n()
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: linear-gradient(to right, var(--background-color), var(--surface-color));
  border-bottom: 2px solid var(--border-color);
  box-shadow: var(--box-shadow);
  
  @media (min-width: 768px) {
    padding: 0.75rem 2rem;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 2rem;
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 10;
      
      @media (max-width: 767px) {
        display: flex;
      }
      
      span {
        display: block;
        height: 3px;
        width: 100%;
        background-color: var(--primary-color);
        border-radius: 3px;
        transition: all 0.3s ease;
      }
    }

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
      }
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      
      @media (max-width: 767px) {
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        background: var(--background-color);
        flex-direction: column;
        padding: 1rem;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transform: translateY(-100%);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        z-index: 100;
        
        &.active {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
      }

      a {
        color: var(--text-primary);
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem 0;
        position: relative;
        transition: color var(--transition-duration);
        
        @media (max-width: 767px) {
          padding: 0.75rem 0;
          width: 100%;
          text-align: center;
          border-bottom: 1px solid var(--border-color);
          
          &:last-child {
            border-bottom: none;
          }
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-color);
          transition: width var(--transition-duration);
          
          @media (max-width: 767px) {
            display: none;
          }
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
        background: rgba(255, 215, 0, 0.1);

        img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>