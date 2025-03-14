<template>

  <div class="download-page">
    <header class="page-header">
      <h1>{{ t('tools.title') }}</h1>
      <p class="subtitle">{{ t('tools.subtitle') }}</p>
    </header>

    <section class="tools-section">
      <div class="tools-grid">
        <ToolCard
          name="VS Code"
          :description="t('tools.vsCode.description')"
          icon="/src/assets/icon/vscode.svg"
          link="https://marketplace.visualstudio.com/items?itemName=valkyrie.valkyrie-vscode"
        />
        <ToolCard
          name="Vim/NeoVim"
          :description="t('tools.vim.description')"
          icon="/src/assets/icon/vim.svg"
          link="https://github.com/valkyrie-language/valkyrie-vim"
        />
        <ToolCard
          name="RustRover"
          :description="t('tools.rustRover.description')"
          icon="/src/assets/icon/rustrover.svg"
          link="https://www.jetbrains.com/rust/"
        />
        <ToolCard
          name="Helix"
          :description="t('tools.helix.description')"
          icon="/src/assets/icon/helix.svg"
          link="https://helix-editor.com/"
        />
        <ToolCard
          name="Emacs"
          :description="t('tools.emacs.description')"
          icon="/src/assets/icon/emacs.svg"
          link="https://www.gnu.org/software/emacs/"
        />
        <ToolCard
          name="Sublime Text"
          :description="t('tools.sublime.description')"
          icon="/src/assets/icon/sublime.svg"
          link="https://www.sublimetext.com/"
        />
        <ToolCard
          name="Visual Studio"
          :description="t('tools.visualStudio.description')"
          icon="/src/assets/icon/visual-studio.svg"
          link="https://visualstudio.microsoft.com/"
        />
        <ToolCard
          name="Eclipse"
          :description="t('tools.eclipse.description')"
          icon="/src/assets/icon/eclipse.svg"
          link="https://www.eclipse.org/"
        />
      </div>
    </section>

    <section class="installation-guide">
      <h2>{{ t('download.installationGuide.title') }}</h2>

      <div class="installation-tabs">
        <button class="tab-button active">Windows</button>
        <button class="tab-button">macOS</button>
        <button class="tab-button">Linux</button>
      </div>

      <div class="installation-content">
        <div class="code-block">
          <pre><code># {{ t('download.installationGuide.windows') }}
1. {{ t('download.installationGuide.downloadExecutable') }}
2. {{ t('download.installationGuide.runInstaller') }}
3. {{ t('download.installationGuide.followPrompts') }}</code></pre>
        </div>
      </div>
    </section>

    <section class="package-managers">
      <h2>{{ t('download.packageManagers.title') }}</h2>
      <p>{{ t('download.packageManagers.description') }}</p>

      <div class="code-block">
        <pre><code># Homebrew (macOS)
brew install valkyrie

# Chocolatey (Windows)
choco install valkyrie

# APT (Debian/Ubuntu)
apt-get install valkyrie

# Cargo
cargo install valkyrie</code></pre>
      </div>
    </section>
  </div>

</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import ToolCard from '../components/ToolCard.vue'

const { t } = useI18n()
</script>


<style lang="scss" scoped>
.download-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: var(--vt-c-text-1);
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.25rem;
    color: var(--vt-c-text-2);
    max-width: 800px;
    margin: 0 auto;
  }
}

.download-options {
  margin-bottom: 4rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.tools-section {
  margin-bottom: 4rem;
}

.installation-guide,
.package-managers {
  background-color: var(--vt-c-white);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--vt-c-text-1);
  }

  p {
    color: var(--vt-c-text-2);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
}

.installation-tabs {
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--vt-c-divider);

  .tab-button {
    padding: 0.75rem 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: var(--vt-c-text-2);
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;

    &.active {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
    }

    &:hover {
      color: var(--vt-c-text-1);
    }
  }
}

.code-block {
  background-color: var(--vt-c-black-soft);
  border-radius: 6px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  overflow-x: auto;

  pre {
    margin: 0;

    code {
      color: var(--vt-c-white);
      font-family: 'Fira Code', monospace;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
}

@media (max-width: 768px) {
  .download-grid {
    grid-template-columns: 1fr;
  }

  .installation-tabs {
    flex-wrap: wrap;

    .tab-button {
      flex: 1;
      min-width: 100px;
      text-align: center;
    }
  }
}
</style>