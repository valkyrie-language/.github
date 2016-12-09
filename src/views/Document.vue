<template>
  <div class="document-page">
    <header class="page-header">
      <h1>{{ t('document.title') }}</h1>
      <p class="subtitle">{{ t('document.subtitle') }}</p>
    </header>

    <section class="content-section">
      <div class="documentation-container">
        <aside class="sidebar">
          <nav class="nav-menu">
            <h3>{{ t('document.menu.gettingStarted') }}</h3>
            <ul>
              <li><a href="#installation">{{ t('document.menu.installation') }}</a></li>
              <li><a href="#quickStart">{{ t('document.menu.quickStart') }}</a></li>
              <li><a href="#basicConcepts">{{ t('document.menu.basicConcepts') }}</a></li>
            </ul>

            <h3>{{ t('document.menu.language') }}</h3>
            <ul>
              <li><a href="#syntax">{{ t('document.menu.syntax') }}</a></li>
              <li><a href="#typeSystem">{{ t('document.menu.typeSystem') }}</a></li>
              <li><a href="#functions">{{ t('document.menu.functions') }}</a></li>
            </ul>

            <h3>{{ t('document.menu.advanced') }}</h3>
            <ul>
              <li><a href="#concurrency">{{ t('document.menu.concurrency') }}</a></li>
              <li><a href="#memoryManagement">{{ t('document.menu.memoryManagement') }}</a></li>
              <li><a href="#errorHandling">{{ t('document.menu.errorHandling') }}</a></li>
            </ul>
          </nav>
        </aside>

        <main class="main-content">
          <section id="installation" class="doc-section">
            <h2>{{ t('document.sections.installation.title') }}</h2>
            <p>{{ t('document.sections.installation.description') }}</p>
            <div class="code-block">
              <pre><code>$ curl -sSf https://valkyrie-lang.org/install.sh | sh</code></pre>
            </div>
          </section>

          <section id="quickStart" class="doc-section">
            <h2>{{ t('document.sections.quickStart.title') }}</h2>
            <p>{{ t('document.sections.quickStart.description') }}</p>
            <div class="code-block">
              <pre><code>// Hello World in Valkyrie
micro main() {
  println("Hello, Valkyrie!")
}</code></pre>
            </div>
          </section>

          <section id="basicConcepts" class="doc-section">
            <h2>{{ t('document.sections.basicConcepts.title') }}</h2>
            <p>{{ t('document.sections.basicConcepts.description') }}</p>
          </section>

          <!-- More sections would be added here -->
        </main>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>

<style lang="scss" scoped>
.document-page {
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

.content-section {
  background-color: var(--vt-c-white);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.documentation-container {
  display: flex;
  min-height: 600px;
}

.sidebar {
  width: 280px;
  background-color: var(--vt-c-white-soft);
  padding: 2rem 1.5rem;
  border-right: 1px solid var(--vt-c-divider);

  .nav-menu {
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 1.5rem 0 0.75rem;
      color: var(--vt-c-text-1);

      &:first-child {
        margin-top: 0;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 1.5rem;

      li {
        margin-bottom: 0.5rem;

        a {
          display: block;
          padding: 0.5rem 0.75rem;
          color: var(--vt-c-text-2);
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.2s ease;

          &:hover {
            background-color: rgba(0, 0, 0, 0.05);
            color: var(--vt-c-text-1);
          }
        }
      }
    }
  }
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;

  .doc-section {
    margin-bottom: 3rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      color: var(--vt-c-text-1);
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--vt-c-divider);
    }

    p {
      margin-bottom: 1.5rem;
      line-height: 1.7;
      color: var(--vt-c-text-2);
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
  }
}

@media (max-width: 768px) {
  .documentation-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--vt-c-divider);
  }
}
</style>