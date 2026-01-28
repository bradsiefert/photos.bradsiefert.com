<template>
  <div>
    <!-- Title -->
    <div class="journal-title">
      <h1>Grand Teton National Park</h1>
    </div>

    <!-- Metadata -->
    <div class="journal-metadata">
      <div class="metadata-item">
        <div class="metadata-header">
          <PhCalendarDots :size="16" :weight="'regular'" />
          <span class="metadata-label">dates</span>
        </div>
        <div class="metadata-value">MAY 18-21 2025</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-header">
          <PhImages :size="16" :weight="'regular'" />
          <span class="metadata-label">shot</span>
        </div>
        <div class="metadata-value">2115</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-header">
          <PhCrop :size="16" :weight="'regular'" />
          <span class="metadata-label">edited</span>
        </div>
        <div class="metadata-value">250</div>
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
        <div class="metadata-value">15mm, 24-70mm, 70-200mm</div>
      </div>
    </div>

    <!-- Example: Single horizontal image -->
    <div class="photo-layout-single">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
    </div>

    <!-- Example: Text section -->
    <div class="journal-text-section">
      <div class="section-divider">
        <div class="divider-line"></div>
        <span class="section-label">Introduction</span>
        <div class="divider-line"></div>
      </div>
      <div class="text-content">
        <p>This is an example text section. You can add multiple paragraphs here to tell the story of your journey through Grand Teton National Park.</p>
        <p>Each paragraph will be properly spaced and formatted. The text section has a maximum width for optimal readability.</p>
      </div>
    </div>

    <!-- Example: Two horizontal images side by side -->
    <div class="photo-layout-landscape-2">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Image 1" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Image 2" 
        />
      </div>
    </div>

    <!-- Example: Three horizontal images side by side -->
    <div class="photo-layout-landscape-3">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Image 1" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Image 2" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Image 3" 
        />
      </div>
    </div>

    <!-- Example: Two portrait images side by side -->
    <div class="photo-layout-portrait-2">
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Portrait 1" 
        />
      </div>
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Portrait 2" 
        />
      </div>
    </div>

    <!-- Example: Three portrait images side by side -->
    <div class="photo-layout-portrait-3">
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Portrait 1" 
        />
      </div>
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Portrait 2" 
        />
      </div>
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Portrait 3" 
        />
      </div>
    </div>

    <!-- Example: Grid layout 2x2 (4 images) -->
    <div class="photo-layout-grid-2x2">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Grid 1" 
        />
      </div>
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Grid 2" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Grid 3" 
        />
      </div>
    </div>

    <!-- Example: Grid layout 3x4 (5 images) -->
    <div class="photo-layout-grid-3x4">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Grid 1" 
        />
      </div>
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Grid 2" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Grid 3" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Grid 4" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park - Grid 5" 
        />
      </div>
    </div>

    <!-- Example: Another text section -->
    <div class="journal-text-section">
      <div class="section-divider">
        <div class="divider-line"></div>
        <span class="section-label">Reflections</span>
        <div class="divider-line"></div>
      </div>
      <div class="text-content">
        <p>You can add multiple text sections throughout your journal entry. Each section can have its own heading and multiple paragraphs.</p>
        <p>Use text sections to provide context, tell stories, or share reflections about your photography journey.</p>
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

