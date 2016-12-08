<template>
  <div class="community-page">
    <header class="page-header">
      <h1>{{ t('community.title') }}</h1>
      <p class="subtitle">{{ t('community.subtitle') }}</p>
    </header>

    <section class="community-section">
      <div class="community-grid">
        <div class="community-card">
          <div class="community-icon github"></div>
          <h3>GitHub</h3>
          <p>{{ t('community.github.description') }}</p>
          <a href="https://github.com/valkyrie-language/valkyrie" target="_blank" class="community-button">
            {{ t('community.visitButton') }}
          </a>
        </div>

        <div class="community-card">
          <div class="community-icon discord"></div>
          <h3>Discord</h3>
          <p>{{ t('community.discord.description') }}</p>
          <a href="https://discord.gg/valkyrie" target="_blank" class="community-button">
            {{ t('community.joinButton') }}
          </a>
        </div>

        <div class="community-card">
          <div class="community-icon forum"></div>
          <h3>{{ t('community.forum.title') }}</h3>
          <p>{{ t('community.forum.description') }}</p>
          <a href="#" class="community-button">
            {{ t('community.visitButton') }}
          </a>
        </div>
      </div>
    </section>

    <section class="contribute-section">
      <h2>{{ t('community.contribute.title') }}</h2>
      <p>{{ t('community.contribute.description') }}</p>

      <div class="contribute-cards">
        <div class="contribute-card">
          <h3>{{ t('community.contribute.code.title') }}</h3>
          <p>{{ t('community.contribute.code.description') }}</p>
          <a href="https://github.com/valkyrie-language/valkyrie/issues" target="_blank" class="link-button">
            {{ t('community.contribute.code.button') }}
          </a>
        </div>

        <div class="contribute-card">
          <h3>{{ t('community.contribute.docs.title') }}</h3>
          <p>{{ t('community.contribute.docs.description') }}</p>
          <a href="https://github.com/valkyrie-language/docs" target="_blank" class="link-button">
            {{ t('community.contribute.docs.button') }}
          </a>
        </div>

        <div class="contribute-card">
          <h3>{{ t('community.contribute.examples.title') }}</h3>
          <p>{{ t('community.contribute.examples.description') }}</p>
          <a href="https://github.com/valkyrie-language/examples" target="_blank" class="link-button">
            {{ t('community.contribute.examples.button') }}
          </a>
        </div>
      </div>
    </section>

    <section class="events-section">
      <h2>{{ t('community.events.title') }}</h2>
      <p>{{ t('community.events.description') }}</p>

      <div class="events-list">
        <div class="event-card">
          <div class="event-date">
            <span class="month">JUN</span>
            <span class="day">15</span>
          </div>
          <div class="event-details">
            <h3>{{ t('community.events.meetup.title') }}</h3>
            <p>{{ t('community.events.meetup.description') }}</p>
            <a href="#" class="link-button">{{ t('community.events.registerButton') }}</a>
          </div>
        </div>

        <div class="event-card">
          <div class="event-date">
            <span class="month">JUL</span>
            <span class="day">10</span>
          </div>
          <div class="event-details">
            <h3>{{ t('community.events.webinar.title') }}</h3>
            <p>{{ t('community.events.webinar.description') }}</p>
            <a href="#" class="link-button">{{ t('community.events.registerButton') }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>

<style lang="scss" scoped>
.community-page {
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

.community-section {
  margin-bottom: 4rem;
}

.community-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.community-card {
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

  .community-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.github {
      background-color: #333;
    }

    &.discord {
      background-color: #7289DA;
    }

    &.forum {
      background-color: #FF6B6B;
    }
  }

  .community-button {
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
}

.contribute-section,
.events-section {
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

.contribute-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  .contribute-card {
    padding: 1.5rem;
    border-radius: 8px;
    background-color: var(--vt-c-white-mute);

    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      color: var(--vt-c-text-1);
    }

    p {
      margin-bottom: 1.5rem;
    }
  }
}

.events-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .event-card {
    display: flex;
    background-color: var(--vt-c-white-mute);
    border-radius: 8px;
    overflow: hidden;

    .event-date {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      min-width: 100px;
      background-color: var(--primary-color);
      color: white;

      .month {
        font-size: 1rem;
        font-weight: 500;
      }

      .day {
        font-size: 2rem;
        font-weight: 700;
      }
    }

    .event-details {
      padding: 1.5rem;
      flex: 1;

      h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        color: var(--vt-c-text-1);
      }

      p {
        margin-bottom: 1rem;
      }
    }
  }
}

.link-button {
  display: inline-block;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: darken(#3b82f6, 10%);
    text-decoration: underline;
  }
}

@media (max-width: 768px) {
  .community-grid,
  .contribute-cards {
    grid-template-columns: 1fr;
  }

  .event-card {
    flex-direction: column;

    .event-date {
      padding: 1rem;
      flex-direction: row;
      gap: 0.5rem;
    }
  }
}
</style>