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
        <div class="metadata-value">JUN 4-7 2025</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-header">
          <PhImages :size="16" :weight="'regular'" />
          <span class="metadata-label">shot</span>
        </div>
        <div class="metadata-value">2531</div>
      </div>
      <div class="metadata-item">
        <div class="metadata-header">
          <PhCrop :size="16" :weight="'regular'" />
          <span class="metadata-label">edited</span>
        </div>
        <div class="metadata-value">300</div>
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
        <div class="metadata-value">24-70mm 70-200mm</div>
      </div>
    </div>

    <!-- Main horizontal image -->
    <div class="photo-layout-single">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
    </div>

    <!-- Story Section -->
    <div class="journal-text-section">
      <div class="section-divider">
        <div class="divider-line"></div>
        <span class="section-label">STORY</span>
        <div class="divider-line"></div>
      </div>
      <div class="text-content">
        <p>Rwanda is the land of a thousand hills. That was one of the first things our guide Abou shared when he picked us up from Kigali airport. This was the beginning of a two week adventure in Africa filled with wildlife sightings from silverback mountain gorilla treks in Rwanda to Serengeti game drives in Tanzania afterwards.</p>
        
        <p>Mike Davidson, a former colleague from Twitter, and his wife Chelan were the ones behind the entire trip. Mike had been planning a trip to Africa and invited a few folks. My sister and I had long been considering a trip to Africa and this opportunity came at the perfect time. After some coordination—as well as buying appropriate gear and getting a few vaccines—the trip was set for six of us to meet in Rwanda. Our friends Jen and Sana would join us later.</p>
      </div>
      <div class="text-divider"></div>
    </div>

    <!-- Two landscape images -->
    <div class="photo-layout-landscape-2">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
    </div>

    <!-- Single landscape image -->
    <div class="photo-layout-single">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
    </div>

    <!-- Three landscape images -->
    <div class="photo-layout-landscape-3">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
    </div>

    <!-- Text Section -->
    <div class="journal-text-section">
      <div class="section-divider">
        <div class="divider-line"></div>
        <span class="section-label">In The Valley</span>
        <div class="divider-line"></div>
      </div>
      <div class="text-content">
        <p>Rwanda is the land of a thousand hills. That was one of the first things our guide Abou shared when he picked us up from Kigali airport. This was the beginning of a two week adventure in Africa filled with wildlife sightings from silverback mountain gorilla treks in Rwanda to Serengeti game drives in Tanzania afterwards.</p>
        
        <p>Mike Davidson, a former colleague from Twitter, and his wife Chelan were the ones behind the entire trip. Mike had been planning a trip.</p>
      </div>
      <div class="text-divider"></div>
    </div>

    <!-- Grid layout 2x2 -->
    <div class="photo-layout-grid-2x2">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
    </div>

    <!-- Text Section -->
    <div class="journal-text-section">
      <div class="section-divider">
        <div class="divider-line"></div>
        <span class="section-label">In The Valley</span>
        <div class="divider-line"></div>
      </div>
      <div class="text-content">
        <p>Rwanda is the land of a thousand hills. That was one of the first things our guide Abou shared when he picked us up from Kigali airport. This was the beginning of a two week adventure in Africa filled with wildlife sightings from silverback mountain gorilla treks in Rwanda to Serengeti game drives in Tanzania afterwards.</p>
        
        <p>Mike Davidson, a former colleague from Twitter, and his wife Chelan were the ones behind the entire trip. Mike had been planning a trip.</p>
      </div>
      <div class="text-divider"></div>
    </div>

    <!-- Two portrait images -->
    <div class="photo-layout-portrait-2">
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="@/portfolio/people/people-wolfpackretreat2017.jpg" 
          image-alt="Portrait" 
        />
      </div>
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="@/portfolio/people/people-wolfpackretreat2017.jpg" 
          image-alt="Portrait" 
        />
      </div>
    </div>

    <!-- Grid layout 3x4 -->
    <!-- <div class="photo-layout-grid-3x4">
      <div class="photo-item photo-landscape">
        <img src="@/portfolio/places/places-summerjourneystetonstrip.jpg" alt="Grand Teton National Park" />
      </div>
      <div class="photo-item photo-landscape">
        <img src="@/portfolio/places/places-summerjourneystetonstrip.jpg" alt="Grand Teton National Park" />
      </div>
      <div class="photo-item photo-portrait">
        <img src="@/portfolio/people/people-wolfpackretreat2017.jpg" alt="Portrait" />
      </div>
      <div class="photo-item photo-portrait">
        <img src="@/portfolio/people/people-wolfpackretreat2017.jpg" alt="Portrait" />
      </div>
      <div class="photo-item photo-portrait">
        <img src="@/portfolio/people/people-wolfpackretreat2017.jpg" alt="Portrait" />
      </div>
    </div> -->

    <!-- Two landscape images -->
    <div class="photo-layout-landscape-2">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
    </div>

    <!-- Three landscape images -->
    <div class="photo-layout-landscape-3">
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
      <div class="photo-item photo-landscape">
        <PhotoMetadata 
          image-src="@/portfolio/places/places-summerjourneystetonstrip.jpg" 
          image-alt="Grand Teton National Park" 
        />
      </div>
    </div>

    <!-- Three portrait images -->
    <div class="photo-layout-portrait-3">
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="@/portfolio/people/people-wolfpackretreat2017.jpg" 
          image-alt="Portrait" 
        />
      </div>
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="@/portfolio/people/people-wolfpackretreat2017.jpg" 
          image-alt="Portrait" 
        />
      </div>
      <div class="photo-item photo-portrait">
        <PhotoMetadata 
          image-src="@/portfolio/people/people-wolfpackretreat2017.jpg" 
          image-alt="Portrait" 
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

