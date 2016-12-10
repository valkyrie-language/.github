<template>
  <div class="playground">
    <header class="playground-header">
      <div class="left">
        <button class="icon-button" @click="toggleFileExplorer">
          <span class="codicon codicon-menu"></span>
        </button>
        <h1>{{ t('playground.title') }}</h1>
      </div>
      <div class="actions">
        <button class="action-button" @click="runCode">
          <span class="codicon codicon-play"></span>
          {{ t('playground.run') }}
        </button>
        <button class="action-button" @click="shareCode">
          <span class="codicon codicon-share"></span>
          {{ t('playground.share') }}
        </button>
      </div>
    </header>

    <div class="playground-content">
      <div v-show="isFileExplorerVisible" class="sidebar">
        <div class="sidebar-header">
          <span class="codicon codicon-files"></span>
          {{ t('playground.explorer') }}
        </div>
        <div class="file-tree">
          <!-- TODO: Implement file tree -->
          <div class="file-item">
            <span class="codicon codicon-file"></span>
            main.vk
          </div>
        </div>
      </div>

      <div class="editor-container">
        <MonacoEditor
          v-model="code"
          language="javascript"
          :options="{
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            theme: 'vs-dark'
          }"
        />
      </div>

      <div v-show="isOutputVisible" class="output-panel">
        <div class="panel-header">
          <span class="codicon codicon-terminal"></span>
          {{ t('playground.output') }}
          <button class="icon-button" @click="toggleOutput">
            <span class="codicon codicon-close"></span>
          </button>
        </div>
        <div class="output-content">
          <pre>{{ output }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import MonacoEditor from '../components/MonacoEditor.vue'
import Split from 'split.js'
import '@vscode/codicons/dist/codicon.css'

const { t } = useI18n()
const code = ref(`// Welcome to Valkyrie Language Playground
fn main() {
    println("Hello, World!")
}`)

const output = ref('')
const isFileExplorerVisible = ref(true)
const isOutputVisible = ref(true)

const runCode = () => {
  // TODO: Implement code execution
  output.value = 'Running code...\n' + code.value
}

const shareCode = () => {
  // TODO: Implement code sharing
  console.log('Sharing code:', code.value)
}

const toggleFileExplorer = () => {
  isFileExplorerVisible.value = !isFileExplorerVisible.value
}

const toggleOutput = () => {
  isOutputVisible.value = !isOutputVisible.value
}
</script>

<style lang="scss" scoped>
.playground {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
}

.playground-header {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    margin: 0;
    font-size: 1.2rem;
  }
}

.playground-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  background-color: #252526;
  border-right: 1px solid #3c3c3c;
  display: flex;
  flex-direction: column;

  .sidebar-header {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #cccccc;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid #3c3c3c;
  }
}

.file-tree {
  padding: 0.5rem;

  .file-item {
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #cccccc;
    cursor: pointer;

    &:hover {
      background-color: #2a2d2e;
    }
  }
}

.editor-container {
  flex: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 999;
  }
}

.window-controls {
  @media (max-width: 768px) {
    display: none;
  }
}

.output-panel {
  height: 200px;
  background-color: #1e1e1e;
  border-top: 1px solid #3c3c3c;
  display: flex;
  flex-direction: column;

  .panel-header {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: #cccccc;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: #252526;
    border-bottom: 1px solid #3c3c3c;

    button {
      margin-left: auto;
    }
  }

  .output-content {
    flex: 1;
    overflow: auto;
    padding: 0.5rem 1rem;
    color: #cccccc;
    font-family: 'Fira Code', monospace;

    pre {
      margin: 0;
      white-space: pre-wrap;
    }
  }
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.action-button {
  background-color: #4d4d4d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a5a5a;
  }
}

.icon-button {
  background: transparent;
  border: none;
  color: #cccccc;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
  }
}
</style>