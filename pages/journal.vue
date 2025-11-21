<template>
  <div class="journal-page page-fade">
    <div style="margin-bottom: 32px;">
      <h1>Journal</h1>
      <p class="journal-subtitle">My favorite trips and photo projects.</p>
    </div>

    <!-- Ongoing Section -->
    <div style="margin-top: 16px;">
      <div class="section-divider">
        <span class="section-label">Ongoing</span>
        <div class="divider-line"></div>
      </div>
      <div class="journal-grid journal-grid-ongoing">
        <div v-for="post in ongoingPosts" :key="post.id" class="journal-card">
          <NuxtLink :to="post.slug" class="journal-link">
            <div class="journal-image-wrapper">
              <img :src="post.imageUrl" :alt="post.title" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">{{ post.title }}</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Year Sections -->
    <div v-for="year in years" :key="year" style="margin-top: 16px;">
      <div class="section-divider">
        <span class="section-label">{{ year }}</span>
        <div class="divider-line"></div>
      </div>
      <div class="journal-grid journal-grid-year">
        <div v-for="post in getPostsByYear(year)" :key="post.id" class="journal-card">
          <NuxtLink :to="post.slug" class="journal-link">
            <div class="journal-image-wrapper">
              <img :src="post.imageUrl" :alt="post.title" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">{{ post.title }}</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ongoingPosts: [
        {
          id: 1,
          title: 'Faceless',
          slug: '/journal/ongoing/faceless',
          imageUrl: 'https://picsum.photos/1600/1067?random=1'
        },
        {
          id: 2,
          title: 'East Garfield Park',
          slug: '/journal/ongoing/east-garfield-park',
          imageUrl: 'https://picsum.photos/1600/1067?random=2'
        },
        {
          id: 3,
          title: 'Logan Square',
          slug: '/journal/ongoing/logan-square',
          imageUrl: 'https://picsum.photos/1600/1067?random=3'
        }
      ],
      yearPosts: [
        {
          id: 4,
          title: 'Grand Teton National Park',
          year: 2025,
          slug: '/journal/2025/grand-teton',
          imageUrl: 'https://picsum.photos/1600/1067?random=4'
        },
        {
          id: 5,
          title: 'The 12th Wolfpack Retreat',
          year: 2025,
          slug: '/journal/2025/wolfpack-retreat-12',
          imageUrl: 'https://picsum.photos/1600/1067?random=5'
        },
        {
          id: 6,
          title: "NYE '24",
          year: 2024,
          slug: '/journal/2024/nye-24',
          imageUrl: 'https://picsum.photos/1600/1067?random=6'
        },
        {
          id: 7,
          title: '4th of July',
          year: 2024,
          slug: '/journal/2024/july-4th',
          imageUrl: 'https://picsum.photos/1600/1067?random=7'
        },
        {
          id: 8,
          title: 'The 11th Wolfpack Retreat',
          year: 2024,
          slug: '/journal/2024/wolfpack-retreat-11',
          imageUrl: 'https://picsum.photos/1600/1067?random=8'
        },
        {
          id: 9,
          title: 'Summer in Chicago',
          year: 2023,
          slug: '/journal/2023/summer-chicago',
          imageUrl: 'https://picsum.photos/1600/1067?random=9'
        },
        {
          id: 10,
          title: 'The 10th Wolfpack Retreat',
          year: 2023,
          slug: '/journal/2023/wolfpack-retreat-10',
          imageUrl: 'https://picsum.photos/1600/1067?random=10'
        },
        {
          id: 11,
          title: 'Spring Photography Walk',
          year: 2023,
          slug: '/journal/2023/spring-walk',
          imageUrl: 'https://picsum.photos/1600/1067?random=11'
        },
        {
          id: 12,
          title: 'Winter in the City',
          year: 2022,
          slug: '/journal/2022/winter-city',
          imageUrl: 'https://picsum.photos/1600/1067?random=12'
        },
        {
          id: 13,
          title: 'The 9th Wolfpack Retreat',
          year: 2022,
          slug: '/journal/2022/wolfpack-retreat-9',
          imageUrl: 'https://picsum.photos/1600/1067?random=13'
        },
        {
          id: 14,
          title: 'Fall Colors',
          year: 2022,
          slug: '/journal/2022/fall-colors',
          imageUrl: 'https://picsum.photos/1600/1067?random=14'
        }
      ]
    }
  },
  computed: {
    years() {
      const uniqueYears = [...new Set(this.yearPosts.map(post => post.year))];
      return uniqueYears.sort((a, b) => b - a);
    }
  },
  methods: {
    getPostsByYear(year) {
      return this.yearPosts.filter(post => post.year === year);
    }
  }
}
</script>

<style scoped>
.journal-page {
  flex: 1;
  padding: 64px 0 64px;
  background-color: var(--color-neutral-lightest);
  color: var(--color-neutral-darkest);
  min-height: 100vh;
}

@media (max-width: 1023px) {
  .journal-page {
    padding: 48px 24px 48px !important;
  }
}

.journal-page h1 {
  line-height: 1;
  margin: 0 0 8px;
}

.journal-subtitle {
  font-size: 16px;
  line-height: 1.75;
  margin: 0;
  color: var(--color-neutral-darkest);
}

.section-divider {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 16px;
}

.section-label {
  font-size: 14px;
  line-height: 1.75;
  color: var(--color-neutral-darkest);
  white-space: nowrap;
}

.divider-line {
  flex: 1;
  height: 1px;
  background-image: repeating-linear-gradient(90deg, var(--color-neutral-400), var(--color-neutral-400) 6px, transparent 6px, transparent 12px);
  /* background-size: 100% 1px; */
  /* background-position: 0 0; */
  /* background-repeat: no-repeat; */
}

.journal-grid {
  display: grid;
  gap: 16px;
  margin-bottom: 16px;
}

.journal-grid-ongoing {
  grid-template-columns: repeat(3, 1fr);
}

.journal-grid-year {
  grid-template-columns: repeat(2, 1fr);
}

.journal-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.journal-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.journal-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1600 / 1067;
  overflow: visible;
  border-radius: 8px;
  transition: box-shadow 0.5s ease-out;
}

.journal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
  transition: filter 0.5s ease, opacity 0.5s ease;
}

.journal-card:hover .journal-image {
  filter: brightness(0.64);
  opacity: 1;
}

.journal-card:hover .journal-image-wrapper {
  box-shadow: 0 0 20px 4px var(--color-highlight-300);
}

.image-scrim {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 128px;
  background: linear-gradient(to top, var(--color-neutral-darkest), transparent);
  pointer-events: none;
}

.image-title {
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.75;
  color: var(--color-neutral-lightest);
  text-align: center;
  white-space: nowrap;
  pointer-events: none;
}

@media (max-width: 1023px) {
  .journal-page {
    padding: 64px 16px 32px;
  }

  .journal-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>

