<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>{{ t('footer.learn') }}</h3>
        <ul>
          <li><a href="/docs/getting-started">{{ t('footer.quickStart') }}</a></li>
          <li><a href="/docs/guide">{{ t('footer.guide') }}</a></li>
          <li><a href="/docs/api">{{ t('footer.api') }}</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>{{ t('footer.community') }}</h3>
        <ul>
          <li><a href="https://github.com/valkyrie-language" target="_blank">GitHub</a></li>
          <li><a href="https://discord.gg/valkyrie" target="_blank">Discord</a></li>
          <li><a href="/blog">{{ t('footer.blog') }}</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>{{ t('footer.more') }}</h3>
        <ul>
          <li><a href="/about">{{ t('footer.about') }}</a></li>
          <li><a href="/team">{{ t('footer.team') }}</a></li>
          <li><a href="/contact">{{ t('footer.contact') }}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="copyright">&copy; {{ new Date().getFullYear() }} Valkyrie Language. {{
          t('footer.allRightsReserved')
        }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--vt-c-white);
  border-top: 1px solid var(--vt-c-divider-light);
  padding: 1.5rem 1rem;
  margin-top: auto;
  
  @media (min-width: 768px) {
    padding: 2rem 1rem;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    padding-bottom: 2rem;
  }

  .footer-section {
    h3 {
      color: var(--vt-c-text-1);
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: var(--vt-c-text-2);
          text-decoration: none;
          font-size: 0.9rem;

          &:hover {
            color: var(--vt-c-green);
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid var(--vt-c-divider-light);

    .copyright {
      color: var(--vt-c-text-2);
      font-size: 0.9rem;
    }
  }
}
</style>