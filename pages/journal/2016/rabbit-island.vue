<template>
  <div>
    <!-- Title -->
    <div class="journal-title">
      <h1>Rabbit Island</h1>
    </div>

    <!-- Metadata -->
    <div class="journal-metadata">
      <div class="metadata-item">
        <div class="metadata-header">
          <PhCalendarDots :size="16" :weight="'regular'" />
          <span class="metadata-label">dates</span>
        </div>
        <div class="metadata-value">AUG 29-SEP 2 2016</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-header">
          <PhImages :size="16" :weight="'regular'" />
          <span class="metadata-label">shot</span>
        </div>
        <div class="metadata-value">???</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-header">
          <PhCrop :size="16" :weight="'regular'" />
          <span class="metadata-label">edited</span>
        </div>
        <div class="metadata-value">450</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-header">
          <PhCamera :size="16" :weight="'regular'" />
          <span class="metadata-label">camera</span>
        </div>
        <div class="metadata-value">SONY A7RIII</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-header">
          <PhAperture :size="16" :weight="'regular'" />
          <span class="metadata-label">Lenses</span>
        </div>
        <div class="metadata-value">16-35mm, 55mm, 70-200mm</div>
      </div>
    </div>

    <!-- Main horizontal image -->
    <div class="photo-layout-single">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Rabbit Island" 
        />
      </div>
    </div>

    <!-- Footer -->
    <div class="journal-footer">
      <NuxtLink to="/journal" class="footer-link">← Back to Journal</NuxtLink>
      <div class="divider-line"></div>
      <span class="footer-text">Until next time.</span>
    </div>
  </div>
</template>

<script setup>
import { PhCalendarDots, PhImages, PhCrop, PhCamera, PhAperture } from '@phosphor-icons/vue'

definePageMeta({
  layout: 'journal-detail'
})
</script>
