<template>
  <div 
    class="photo-metadata-wrapper"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <NuxtImg :src="resolvedImageSrc" :alt="imageAlt" />
    
    <!-- Metadata Button (shown on hover) -->
    <button
      v-if="!showOverlay && isHovered"
      class="metadata-button"
      @click="showOverlay = true"
      aria-label="Show photo metadata"
    >
      <PhImages :size="24" :weight="'regular'" />
    </button>

    <!-- Metadata Overlay -->
    <div
      v-if="showOverlay"
      class="metadata-overlay"
    >
      <button
        class="close-button"
        @click="showOverlay = false"
        aria-label="Close metadata"
      >
        <PhXCircle :size="20" :weight="'regular'" />
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
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: rgba(25, 27, 34, 0.8);
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: opacity 0.2s ease;
  z-index: 10;
}

.metadata-button :deep(svg) {
  color: var(--color-neutral-lightest);
}

.metadata-button:hover {
  background: rgba(25, 27, 34, 0.9);
}

.metadata-overlay {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 48px;
  align-items: center;
  padding: 12px 24px;
  background: rgba(25, 27, 34, 0.8);
  border: 1px solid var(--color-neutral-800);
  border-radius: 8px;
  backdrop-filter: blur(4px);
  z-index: 20;
}

.close-button {
  position: absolute;
  top: -10.5px;
  right: -10.5px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 21;
}

.close-button :deep(svg) {
  color: var(--color-neutral-lightest);
}

.close-button:hover :deep(svg) {
  opacity: 0.8;
}

.metadata-content {
  display: flex;
  gap: 48px;
  align-items: center;
}

.metadata-item {
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  flex-shrink: 0;
}

.metadata-header {
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
}

.metadata-header :deep(svg) {
  color: var(--color-neutral-lightest);
  flex-shrink: 0;
}

.metadata-label {
  font-family: 'SFM';
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -0.25px;
  color: var(--color-neutral-lightest);
  white-space: nowrap;
}

.metadata-value {
  font-family: 'SFM';
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.25px;
  color: var(--color-neutral-lightest);
  white-space: nowrap;
}

@media (max-width: 1023px) {
  .metadata-overlay {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    max-width: calc(100% - 32px);
  }

  .metadata-content {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .metadata-item {
    width: 100%;
  }
}
</style>

