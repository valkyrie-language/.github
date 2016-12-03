<template>
  <div class="language-switch">
    <button class="language-button" @click="toggleDropdown" :title="t('common.language')">
      <img :src="LanguageIcon" alt="language" class="language-icon" />
    </button>
    <div class="language-dropdown" v-if="isOpen" @click="closeDropdown">
      <button
        v-for="lang in languages"
        :key="lang.code"
        class="language-option"
        :class="{ active: currentLocale === lang.code }"
        @click="switchLanguage(lang.code)"
      >
        <span>{{ lang.name }}</span>
        <a
          :href="`https://github.com/valkyrie-language/valkyrie/tree/main/locales/${lang.code}`"
          target="_blank"
          rel="noopener noreferrer"
          class="github-link"
          @click.stop
        >
          <img :src="GithubIcon" alt="GitHub" class="github-icon" />
        </a>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {LANGUAGE_CONFIG} from '@/api/languages'
import LanguageIcon from '../assets/icon/language.svg'
import GithubIcon from '../assets/icon/github.svg'

const {
  t,
  locale
} = useI18n()

const languages = LANGUAGE_CONFIG.languages

const isOpen = ref(false)
const currentLocale = ref(LANGUAGE_CONFIG.defaultLanguage)

const currentLanguage = computed(() => {
  const lang = languages.find(l => l.code === currentLocale.value)
  return lang || languages.find(l => l.code === LANGUAGE_CONFIG.defaultLanguage)!
})

const detectLanguage = () => {
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage && languages.some(l => l.code === savedLanguage)) {
    return savedLanguage
  }

  const browserLang = navigator.language
  const matchedLang = languages.find(l => browserLang.startsWith(l.code.split('-')[0]))
  return matchedLang ? matchedLang.code : LANGUAGE_CONFIG.defaultLanguage
}

const switchLanguage = (lang: string) => {
  currentLocale.value = lang
  locale.value = lang
  localStorage.setItem('language', lang)
  isOpen.value = false
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = (e: Event) => {
  if (e.target !== e.currentTarget) {
    isOpen.value = false
  }
}

const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (!target.closest('.language-switch')) {
    isOpen.value = false
  }
}

onMounted(() => {
  const detectedLang = detectLanguage()
  if (detectedLang !== locale.value) {
    switchLanguage(detectedLang)
  }
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss" scoped>
.language-switch {
  position: relative;
  display: inline-block;

  .language-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    padding: 0 12px;
    border-radius: 8px;
    background: transparent;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    transition: all var(--transition-duration);

    .language-icon {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: rgba(255, 215, 0, 0.1);
    }
  }

  .language-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 180px;
    margin-top: 0.5rem;
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;

    .language-option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0.75rem 1rem;
      border: none;
      background: none;
      color: var(--text-primary);
      text-align: left;
      cursor: pointer;
      transition: background-color var(--transition-duration);

      &:not(:last-child) {
        border-bottom: 1px solid var(--border-color);
      }

      .github-link {
        display: flex;
        align-items: center;
        opacity: 0.6;
        transition: opacity var(--transition-duration);

        .github-icon {
          width: 16px;
          height: 16px;
        }

        &:hover {
          opacity: 1;
        }
      }

      &:hover {
        background: var(--hover-color);
      }

      &.active {
        color: var(--primary-color);
        background-color: var(--active-color);
      }
    }
  }
}
</style>