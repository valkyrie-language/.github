<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number
let particles: Particle[] = []

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

const createParticles = (canvas: HTMLCanvasElement) => {
  const particleCount = 50
  particles = []

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1
    })
  }
}

const drawParticles = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'rgba(255, 200, 0, 0.5)'
  ctx.strokeStyle = 'rgba(255, 200, 0, 0.2)'

  particles.forEach((particle, i) => {
    // 更新粒子位置
    particle.x += particle.vx
    particle.y += particle.vy

    // 边界检查
    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

    // 绘制粒子
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
    ctx.fill()

    // 绘制连接线
    particles.slice(i + 1).forEach(otherParticle => {
      const dx = particle.x - otherParticle.x
      const dy = particle.y - otherParticle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(otherParticle.x, otherParticle.y)
        ctx.stroke()
      }
    })
  })
}

const animate = () => {
  if (!canvasRef.value) return
  const ctx = canvasRef.value.getContext('2d')
  if (!ctx) return

  drawParticles(ctx, canvasRef.value)
  animationFrameId = requestAnimationFrame(animate)
}

const resizeCanvas = () => {
  if (!canvasRef.value) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
  createParticles(canvasRef.value)
}

onMounted(() => {
  if (!canvasRef.value) return
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <canvas ref="canvasRef" class="particle-background"></canvas>
</template>

<style scoped>
.particle-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
</style>