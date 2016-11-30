<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from 'vue'
import ApplicationCard from './ApplicationCard.vue'

// 应用场景数据
const applications = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16v16H4V4z" fill="#3B82F6"/>
      <path d="M8 8h8v8H8V8z" fill="white"/>
    </svg>`,
    titleKey: 'applications.serverSide.title',
    descriptionKey: 'applications.serverSide.description',
    learnMoreLink: '/docs/server-side'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" fill="#10B981"/>
      <path d="M12 8l4.5 2.25v4.5L12 17l-4.5-2.25v-4.5L12 8z" fill="white"/>
    </svg>`,
    titleKey: 'applications.dataProcessing.title',
    descriptionKey: 'applications.dataProcessing.description',
    learnMoreLink: '/docs/data-processing'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#8B5CF6"/>
      <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" fill="white"/>
    </svg>`,
    titleKey: 'applications.commandLine.title',
    descriptionKey: 'applications.commandLine.description',
    learnMoreLink: '/docs/command-line'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16v16H4V4z" fill="#F59E0B"/>
      <path d="M8 8h8v8H8V8z" fill="white"/>
    </svg>`,
    titleKey: 'applications.frontendWeb.title',
    descriptionKey: 'applications.frontendWeb.description',
    learnMoreLink: '/docs/frontend-web'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" fill="#EC4899"/>
      <path d="M12 8l4.5 2.25v4.5L12 17l-4.5-2.25v-4.5L12 8z" fill="white"/>
    </svg>`,
    titleKey: 'applications.machineLearning.title',
    descriptionKey: 'applications.machineLearning.description',
    learnMoreLink: '/docs/machine-learning'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#EF4444"/>
      <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" fill="white"/>
    </svg>`,
    titleKey: 'applications.embedded.title',
    descriptionKey: 'applications.embedded.description',
    learnMoreLink: '/docs/embedded'
  }
]

// 轮播状态
const currentIndex = ref(0)
const slideWidth = ref(0)
const containerRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const startX = ref(0)
const currentTranslate = ref(0)
const prevTranslate = ref(0)
const animationID = ref<number | null>(null)

// 自动轮播
let autoplayInterval: number | null = null

const startAutoplay = () => {
  if (autoplayInterval) return
  autoplayInterval = window.setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

// 轮播控制
const nextSlide = () => {
  if (currentIndex.value >= applications.length - 1) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
  updateSlidePosition()
}

const prevSlide = () => {
  if (currentIndex.value <= 0) {
    currentIndex.value = applications.length - 1
  } else {
    currentIndex.value--
  }
  updateSlidePosition()
}

const updateSlidePosition = () => {
  const visibleSlides = getVisibleSlidesCount()
  const maxIndex = Math.max(0, applications.length - visibleSlides)

  // 确保索引不超出范围
  if (currentIndex.value > maxIndex) {
    currentIndex.value = maxIndex
  }

  prevTranslate.value = -currentIndex.value * slideWidth.value
  currentTranslate.value = prevTranslate.value
}

// 获取可见卡片数量
const getVisibleSlidesCount = () => {
  if (!containerRef.value) return 1
  const containerWidth = containerRef.value.clientWidth
  return Math.max(1, Math.floor(containerWidth / slideWidth.value))
}

// 触摸和拖动事件处理
const touchStart = (event: TouchEvent | MouseEvent) => {
  stopAutoplay()
  isDragging.value = true
  startX.value = 'touches' in event ? event.touches[0].clientX : event.clientX
  cancelAnimationFrame(animationID.value as number)
}

const touchMove = (event: TouchEvent | MouseEvent) => {
  if (!isDragging.value) return

  const currentX = 'touches' in event ? event.touches[0].clientX : event.clientX
  const diff = currentX - startX.value
  currentTranslate.value = prevTranslate.value + diff

  animationID.value = requestAnimationFrame(() => {
    if (containerRef.value) {
      containerRef.value.style.transform = `translateX(${currentTranslate.value}px)`
    }
  })
}

const touchEnd = () => {
  isDragging.value = false
  const movedBy = currentTranslate.value - prevTranslate.value

  // 如果移动距离足够大，则切换到下一张或上一张
  if (movedBy < -100) {
    nextSlide()
  } else if (movedBy > 100) {
    prevSlide()
  } else {
    // 回到原位
    currentTranslate.value = prevTranslate.value
    if (containerRef.value) {
      containerRef.value.style.transform = `translateX(${currentTranslate.value}px)`
    }
  }

  startAutoplay()
}

// 窗口大小变化时重新计算
const handleResize = () => {
  if (!containerRef.value) return

  const cardElements = containerRef.value.querySelectorAll('.application-card')
  if (cardElements.length > 0) {
    const firstCard = cardElements[0] as HTMLElement
    // 获取卡片宽度（包括外边距）
    const cardStyle = window.getComputedStyle(firstCard)
    const marginLeft = parseInt(cardStyle.marginLeft || '0')
    const marginRight = parseInt(cardStyle.marginRight || '0')
    slideWidth.value = firstCard.offsetWidth + marginLeft + marginRight
  }

  updateSlidePosition()
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  startAutoplay()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  stopAutoplay()
  if (animationID.value) {
    cancelAnimationFrame(animationID.value)
  }
})
</script>

<template>
  <section class="language-applications">
    <h2>{{ $t('applications.title') }}</h2>

    <div class="carousel-container">
      <button class="carousel-control prev" @click="prevSlide">
        <span class="arrow">&#10094;</span>
      </button>

      <div class="carousel-wrapper">
        <div
          ref="containerRef"
          class="carousel-slides"
          :style="{ transform: `translateX(${currentTranslate}px)` }"
          @touchstart="touchStart"
          @touchmove="touchMove"
          @touchend="touchEnd"
          @mousedown="touchStart"
          @mousemove="touchMove"
          @mouseup="touchEnd"
          @mouseleave="touchEnd"
        >
          <div
            v-for="(application, index) in applications"
            :key="index"
            class="carousel-slide"
          >
            <ApplicationCard v-bind="application"/>
          </div>
        </div>
      </div>

      <button class="carousel-control next" @click="nextSlide">
        <span class="arrow">&#10095;</span>
      </button>
    </div>

    <div class="carousel-indicators">
      <button
        v-for="(_, index) in applications"
        :key="index"
        class="indicator"
        :class="{ active: index === currentIndex }"
        @click="currentIndex = index; updateSlidePosition()"
      ></button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.language-applications {
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--vt-c-text-1);
  }
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 2rem;
}

.carousel-wrapper {
  overflow: hidden;
  width: 100%;
}

.carousel-slides {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 300px;
  padding: 0 1rem;
  box-sizing: border-box;
  flex: 0 0 auto; /* 修改为不伸缩 */

  @media (min-width: 768px) {
    min-width: 50%; /* 平板显示2个 */
  }

  @media (min-width: 1024px) {
    min-width: 33.333%; /* 小桌面显示3个 */
  }

  @media (min-width: 1200px) {
    min-width: 25%; /* 大桌面显示4个 */
  }
}

.carousel-control {
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .arrow {
    font-size: 18px;
    color: var(--vt-c-text-1);
  }

  &.prev {
    margin-right: 1rem;
  }

  &.next {
    margin-left: 1rem;
  }
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--vt-c-divider);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background: var(--primary-color);
      transform: scale(1.2);
    }
  }
}
</style>