<template>
  <div class="language-switch">
    <button class="language-button" @click="toggleDropdown" :title="t('common.language')">
      <span>{{ currentLanguage.name }} {{ currentLanguage.icon }}</span>
    </button>
    <div class="language-dropdown" v-if="isOpen" @click="closeDropdown">
      <button
        v-for="lang in languages"
        :key="lang.code"
        class="language-option"
        :class="{ active: currentLocale === lang.code }"
        @click="switchLanguage(lang.code)"
      >
        {{ lang.icon }} {{ lang.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import languageConfig from '../locales/languages.json'

const {
  t,
  locale
} = useI18n()

const languages = languageConfig.languages

const isOpen = ref(false)
const currentLocale = ref(languageConfig.defaultLanguage)

const currentLanguage = computed(() => {
  const lang = languages.find(l => l.code === currentLocale.value)
  return lang || languages.find(l => l.code === languageConfig.defaultLanguage)!
})

const detectLanguage = () => {
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage && languages.some(l => l.code === savedLanguage)) {
    return savedLanguage
  }

  const browserLang = navigator.language
  const matchedLang = languages.find(l => browserLang.startsWith(l.code.split('-')[0]))
  return matchedLang ? matchedLang.code : languageConfig.defaultLanguage
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

    &:hover {
      background: rgba(255, 215, 0, 0.1);
    }
  }

  .language-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 0.5rem;
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    z-index: 1000;

    .language-option {
      display: block;
      width: 100%;
      padding: 0.5rem 1rem;
      border: none;
      background: none;
      color: var(--text-primary);
      text-align: left;
      cursor: pointer;
      transition: background-color var(--transition-duration);

      &:hover {
        background-color: var(--hover-color);
      }

      &.active {
        color: var(--primary-color);
        background-color: var(--active-color);
      }
    }
  }
}
</style>