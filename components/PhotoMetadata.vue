<template>
  <div 
    class="photo-metadata-wrapper"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <NuxtImg :src="resolvedImageSrc" :alt="imageAlt" />
    
    <!-- Metadata Button (shown on hover) -->
    <button
      v-if="!showOverlay"
      class="metadata-button"
      :class="{ 'is-visible': isHovered, 'is-fading-in': isFadingIn }"
      @click="showOverlay = true"
      aria-label="Show photo metadata"
    >
      <PhImages :size="24" :weight="'regular'" />
    </button>

    <!-- Metadata Overlay -->
    <div
      v-if="showOverlay"
      class="metadata-overlay"
      :class="{ 'is-closing': isClosing }"
    >
      <button
        class="metadata-close-button"
        @click="closeOverlay"
        aria-label="Close metadata"
      >
        <PhXCircle :size="16" :weight="'regular'" />
      </button>
      
      <div class="metadata-content">
        <div class="metadata-item">
          <div class="metadata-header">
            <PhCalendarDots :size="12" :weight="'regular'" />
            <span class="metadata-label">date</span>
          </div>
          <div class="metadata-value">{{ metadata.date || '2025-05-19' }}</div>
        </div>
        
        <div class="metadata-item">
          <div class="metadata-header">
            <PhCamera :size="12" :weight="'regular'" />
            <span class="metadata-label">camera</span>
          </div>
          <div class="metadata-value">{{ metadata.camera || 'SONY A7RIII' }}</div>
        </div>
        
        <div class="metadata-item">
          <div class="metadata-header">
            <PhCylinder :size="12" :weight="'regular'" />
            <span class="metadata-label">Lens</span>
          </div>
          <div class="metadata-value">{{ metadata.lens || '70-200mm' }}</div>
        </div>
        
        <div class="metadata-item">
          <div class="metadata-header">
            <PhAperture :size="12" :weight="'regular'" />
            <span class="metadata-label">Aperture</span>
          </div>
          <div class="metadata-value">{{ metadata.aperture || 'f/6.3' }}</div>
        </div>
        
        <div class="metadata-item">
          <div class="metadata-header">
            <PhCameraRotate :size="12" :weight="'regular'" />
            <span class="metadata-label">shutter</span>
          </div>
          <div class="metadata-value">{{ metadata.shutter || '160th' }}</div>
        </div>
        
        <div class="metadata-item">
          <div class="metadata-header">
            <PhFilmStrip :size="12" :weight="'regular'" />
            <span class="metadata-label">ISO</span>
          </div>
          <div class="metadata-value">{{ metadata.iso || '200' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  PhImages, 
  PhCalendarDots, 
  PhCamera, 
  PhCylinder, 
  PhAperture, 
  PhCameraRotate, 
  PhFilmStrip,
  PhXCircle 
} from '@phosphor-icons/vue'

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  metadata: {
    type: Object,
    default: () => ({})
  }
})

// Resolve the @/ alias path for images
// In Nuxt/Vite, @/ resolves to project root at build time in static templates
// When passed as a prop string, Vite doesn't process it, so we need to resolve manually
const resolvedImageSrc = computed(() => {
  if (props.imageSrc.startsWith('@/')) {
    // Convert @/portfolio/... to the actual served path
    // In Nuxt, @/ resolves to project root, but files need to be accessible
    // Since portfolio files are at root, they should be accessible via /portfolio/...
    const pathWithoutAlias = props.imageSrc.replace('@/', '')
    // Ensure it starts with / for absolute path
    return pathWithoutAlias.startsWith('/') ? pathWithoutAlias : '/' + pathWithoutAlias
  }
  return props.imageSrc
})

const showOverlay = ref(false)
const isHovered = ref(false)
const isClosing = ref(false)
const isFadingIn = ref(false)

const closeOverlay = () => {
  isClosing.value = true
  setTimeout(() => {
    showOverlay.value = false
    isClosing.value = false
    // Trigger fade-in animation for button if still hovering
    if (isHovered.value) {
      isFadingIn.value = true
      setTimeout(() => {
        isFadingIn.value = false
      }, 300)
    }
  }, 250)
}
</script>

<style scoped>
.photo-metadata-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.photo-metadata-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.metadata-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  color: var(--color-neutral-darkest);
  /* background: var(--color-neutral-200); */
  /* background: linear-gradient(180deg, rgba(247, 247, 247, 0.9) 0%, rgba(213, 215, 219, 0.88) 72%); */
  background: linear-gradient(180deg, var(--color-neutral-200) 0%, var(--color-neutral-300) 72%);
  border: 1px solid var(--color-neutral-500);
  border-radius: 8px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 10;
  pointer-events: none;
}

.metadata-button.is-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.metadata-button.is-fading-in {
  animation: buttonFadeIn 250ms ease;
}

@keyframes buttonFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.metadata-button :deep(svg) {
  color: var(--color-neutral-darkest);
}

.metadata-button:hover {
  color: var(--color-neutral-darkest);
  background: linear-gradient(180deg, var(--color-highlight-200) 0%, var(--color-highlight-300) 72%);
  border-color: var(--color-highlight-700);
}

.metadata-overlay {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(0) scale(1);
  width: calc(100% - 48px);
  max-width: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px clamp(16px, 24px, 4vw);
  min-width: 0;
  /* background: linear-gradient(180deg, var(--color-neutral-200) 0%, var(--color-neutral-300) 72%); */
  background: linear-gradient(180deg, rgba(237, 238, 239, 0.8) 0%, rgba(213, 215, 219, 0.88) 72%);
  border: 1px solid var(--color-neutral-500);
  box-shadow: 0 0 12px 0 rgba(12, 12, 12, 0.12);
  border-radius: 8px;
  backdrop-filter: blur(4px);
  opacity: 1;
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  z-index: 20;
  animation: overlayFadeIn 250ms ease-in-out;
  box-sizing: border-box;
  overflow: visible;
}

.metadata-overlay.is-closing {
  opacity: 0;
  transform: translateX(-50%) translateY(8px) scale(0.96);
}

@keyframes overlayFadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

.metadata-close-button {
  position: absolute;
  top: -12px;
  right: -12px;
  display: flex;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  margin: 0;
  z-index: 21;
}

.metadata-close-button svg {
  height: 24px;
  width: 24px;
}

.metadata-content {
  display: flex;
  gap: min(48px, 8%);
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  min-width: 0;
  width: 100%;
  row-gap: 12px;
}

.metadata-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  min-width: fit-content;
  flex-grow: 1;
}

.metadata-header {
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
}

.metadata-header :deep(svg) {
  color: var(--color-neutral-darkest);
  flex-shrink: 0;
}

.metadata-label {
  font-family: 'SFM';
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
  white-space: nowrap;
}

.metadata-value {
  font-family: 'SFM';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
  white-space: nowrap;
}

/* Dark Mode Styles */
body[dark-mode] {
  .metadata-button {
    /* background: linear-gradient(180deg, var(--color-neutral-1000) 0%, rgba(25, 27, 34, 0.32) 72.12%); */
    background: var(--color-neutral-500-alpha);
    border: 1px solid var(--color-neutral-800);
  }

  .metadata-close-button {
    background: var(--color-neutral-darkest);
  }

  .metadata-button:hover {
    /* background: linear-gradient(180deg, var(--color-neutral-900) 0%, rgba(25, 27, 34, 0.5) 72.12%); */
    background-color: var(--color-highlight-1000);
    border-color: var(--color-highlight-800);
    transition: background-color 400ms ease-in-out, border-color 400ms ease-in-out;
  }

  .metadata-overlay {
    background: rgba(25, 27, 34, 0.81);
    border: 1px solid var(--color-neutral-800);
  }

  .metadata-button :deep(svg),
  .metadata-close-button :deep(svg),
  .metadata-header :deep(svg),
  .metadata-label,
  .metadata-value {
    color: var(--color-neutral-lightest);
  }
}
</style>

