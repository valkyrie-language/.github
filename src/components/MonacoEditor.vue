<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'
import { editor } from 'monaco-editor'

const props = defineProps<{
  modelValue: string
  language?: string
  theme?: string
  options?: editor.IStandaloneEditorConstructionOptions
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const editorContainer = ref<HTMLElement | null>(null)
let monacoEditor: editor.IStandaloneCodeEditor | null = null

onMounted(() => {
  if (!editorContainer.value) return

  monacoEditor = monaco.editor.create(editorContainer.value, {
    value: props.modelValue,
    language: props.language || 'plaintext',
    theme: props.theme || 'vs-dark',
    automaticLayout: true,
    minimap: { enabled: true },
    scrollBeyondLastLine: false,
    ...props.options
  })

  monacoEditor.onDidChangeModelContent(() => {
    const value = monacoEditor?.getValue() || ''
    emit('update:modelValue', value)
  })
})

watch(() => props.modelValue, (newValue) => {
  if (monacoEditor && newValue !== monacoEditor.getValue()) {
    monacoEditor.setValue(newValue)
  }
})

onBeforeUnmount(() => {
  if (monacoEditor) {
    monacoEditor.dispose()
  }
})
</script>

<template>
  <div ref="editorContainer" class="monaco-editor"></div>
</template>

<style scoped>
.monaco-editor {
  width: 100%;
  height: 100%;
}
</style>