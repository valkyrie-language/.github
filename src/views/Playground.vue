<script lang="ts" setup>
import {ref} from 'vue'
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
const code = ref(`// Welcome to Valkyrie Language Playground
fn main() {
    println("Hello, World!")
}`)

const runCode = () => {
  // TODO: Implement code execution
  console.log('Running code:', code.value)
}

const shareCode = () => {
  // TODO: Implement code sharing
  console.log('Sharing code:', code.value)
}
</script>

<template>
  <div class="playground">
    <header class="playground-header">
      <h1>{{ t('playground.title') }}</h1>
      <div class="actions">
        <button class="action-button" @click="runCode">
          {{ t('playground.run') }}
        </button>
        <button class="action-button" @click="shareCode">
          {{ t('playground.share') }}
        </button>
      </div>
    </header>

    <div class="editor-container">
      <textarea
        v-model="code"
        autocomplete="off"
        class="code-editor"
        spellcheck="false"
      ></textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.playground {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.playground-header {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }
}

.actions {
  display: flex;
  gap: 1rem;
}

.action-button {
  background-color: white;
  color: var(--primary-color);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondary-color);
    color: white;
  }
}

.editor-container {
  flex: 1;
  padding: 1rem;
  background-color: #1e1e1e;
}

.code-editor {
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: #d4d4d4;
  border: none;
  resize: none;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 1rem;

  &:focus {
    outline: none;
  }
}
</style>