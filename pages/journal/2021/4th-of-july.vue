<template>
  <div>
    <!-- Title -->
    <div class="journal-title">
      <h1>4th of July</h1>
    </div>

    <!-- Metadata -->
    <div class="journal-metadata">
      <div class="metadata-item">
        <div class="metadata-header">
          <PhCalendarDots :size="16" :weight="'regular'" />
          <span class="metadata-label">dates</span>
        </div>
        <div class="metadata-value">JUL 3-5 2021</div>
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
        <div class="metadata-value">65</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-header">
          <PhCamera :size="16" :weight="'regular'" />
          <span class="metadata-label">camera</span>
        </div>
        <div class="metadata-value">iPhone 13 Pro Max</div>
      </div>
    </div>

    <!-- Main horizontal image -->
    <div class="photo-layout-single">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="4th of July" 
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
import { PhCalendarDots, PhImages, PhCrop, PhCamera } from '@phosphor-icons/vue'

definePageMeta({
  layout: 'journal-detail'
})
</script>
