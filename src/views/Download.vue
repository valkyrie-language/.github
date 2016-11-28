<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="download-page">
    <header class="page-header">
      <h1>{{ t('download.title') }}</h1>
      <p class="subtitle">{{ t('download.subtitle') }}</p>
    </header>

    <section class="download-options">
      <div class="download-grid">
        <div class="download-card">
          <div class="platform-icon windows"></div>
          <h3>Windows</h3>
          <p>{{ t('download.windows.description') }}</p>
          <a href="#" class="download-button">{{ t('download.downloadButton') }} (64-bit)</a>
          <div class="version-info">{{ t('download.latestVersion') }}: 0.1.0</div>
        </div>

        <div class="download-card">
          <div class="platform-icon macos"></div>
          <h3>macOS</h3>
          <p>{{ t('download.macos.description') }}</p>
          <a href="#" class="download-button">{{ t('download.downloadButton') }}</a>
          <div class="version-info">{{ t('download.latestVersion') }}: 0.1.0</div>
        </div>

        <div class="download-card">
          <div class="platform-icon linux"></div>
          <h3>Linux</h3>
          <p>{{ t('download.linux.description') }}</p>
          <a href="#" class="download-button">{{ t('download.downloadButton') }}</a>
          <div class="version-info">{{ t('download.latestVersion') }}: 0.1.0</div>
        </div>
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

.download-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.download-card {
  background-color: var(--vt-c-white);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: var(--vt-c-text-1);
  }
  
  p {
    color: var(--vt-c-text-2);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .platform-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background-color: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .download-button {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: darken(#3b82f6, 10%);
    }
  }
  
  .version-info {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--vt-c-text-3);
  }
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