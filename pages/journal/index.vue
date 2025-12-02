<template>
  <div class="journal-page page-fade">
    <div style="margin-bottom: 32px;">
      <h1>Journal</h1>
      <p class="journal-subtitle">My favorite trips and photo projects.</p>
    </div>

    <!-- Ongoing Section -->
    <div class="journal-section" style="margin-top: 16px;">
      <div class="section-divider">
        <span class="section-label">Ongoing</span>
        <div class="divider-line"></div>
      </div>
      <div class="journal-grid journal-grid-ongoing">
        <div class="journal-card">
          <NuxtLink to="/journal/ongoing/faceless" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/people/people-the83rd.jpg" alt="Faceless" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">Faceless</div>
            </div>
          </NuxtLink>
        </div>
        <div class="journal-card">
          <NuxtLink to="/journal/ongoing/east-garfield-park" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-theloopchicago1.jpg" alt="East Garfield Park" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">East Garfield Park</div>
            </div>
          </NuxtLink>
        </div>
        <div class="journal-card">
          <NuxtLink to="/journal/ongoing/logan-square" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-goodbyelogansquare1.jpg" alt="Logan Square" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">Logan Square</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 2025 Section -->
    <div class="journal-section" style="margin-top: 16px;">
      <div class="section-divider">
        <span class="section-label">2025</span>
        <div class="divider-line"></div>
      </div>
      <div class="journal-grid journal-grid-year">
        <div class="journal-card">
          <NuxtLink to="/journal/2025/grand-teton" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-summerjourneystetonstrip.jpg" alt="Grand Teton" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">Grand Teton</div>
            </div>
          </NuxtLink>
        </div>
        <div class="journal-card">
          <NuxtLink to="/journal/2025/the-12th-wolfpack-retreat" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-2016wolfpackretreat1.jpg" alt="The 12th Wolfpack Retreat" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">The 12th Wolfpack Retreat</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 2024 Section -->
    <div class="journal-section" style="margin-top: 16px;">
      <div class="section-divider">
        <span class="section-label">2024</span>
        <div class="divider-line"></div>
      </div>
      <div class="journal-grid journal-grid-year">
        <div class="journal-card">
          <NuxtLink to="/journal/2024/nye-24" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-nyetriptothestunkelfarm.jpg" alt="NYE 24" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">NYE 24</div>
            </div>
          </NuxtLink>
        </div>
        <div class="journal-card">
          <NuxtLink to="/journal/2024/july-4th" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-summerjourneys2013-yellowstonefalls.jpg" alt="July 4th" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">July 4th</div>
            </div>
          </NuxtLink>
        </div>
        <div class="journal-card">
          <NuxtLink to="/journal/2024/the-11th-wolfpack-retreat" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-2016wolfpackretreat2.jpg" alt="The 11th Wolfpack Retreat" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">The 11th Wolfpack Retreat</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 2023 Section -->
    <div class="journal-section" style="margin-top: 16px;">
      <div class="section-divider">
        <span class="section-label">2023</span>
        <div class="divider-line"></div>
      </div>
      <div class="journal-grid journal-grid-year">
        <div class="journal-card">
          <NuxtLink to="/journal/2023/summer-chicago" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-theloopchicago2.jpg" alt="Summer Chicago" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">Summer Chicago</div>
            </div>
          </NuxtLink>
        </div>
        <div class="journal-card">
          <NuxtLink to="/journal/2023/the-10th-wolfpack-retreat" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/people/people-wolfpackretreat2017.jpg" alt="The 10th Wolfpack Retreat" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">The 10th Wolfpack Retreat</div>
            </div>
          </NuxtLink>
        </div>
        <div class="journal-card">
          <NuxtLink to="/journal/2023/spring-walk" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-mortonarboretum.jpg" alt="Spring Walk" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">Spring Walk</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 2022 Section -->
    <div class="journal-section" style="margin-top: 16px;">
      <div class="section-divider">
        <span class="section-label">2022</span>
        <div class="divider-line"></div>
      </div>
      <div class="journal-grid journal-grid-year">
        <div class="journal-card">
          <NuxtLink to="/journal/2022/winter-city" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-goodbyelogansquare2.jpg" alt="Winter City" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">Winter City</div>
            </div>
          </NuxtLink>
        </div>
        <div class="journal-card">
          <NuxtLink to="/journal/2022/the-9th-wolfpack-retreat" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-rabbitislandschool2016-1.jpg" alt="The 9th Wolfpack Retreat" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">The 9th Wolfpack Retreat</div>
            </div>
          </NuxtLink>
        </div>
        <div class="journal-card">
          <NuxtLink to="/journal/2022/fall-colors" class="journal-link">
            <div class="journal-image-wrapper">
              <img src="@/portfolio/places/places-applepickingwithfriends.jpg" alt="Fall Colors" class="journal-image" />
              <div class="image-scrim"></div>
              <div class="image-title">Fall Colors</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

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

.journal-section {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.2s ease-out forwards;
}

/* Each section starts 0.05s after the previous one finishes (0.2s animation + 0.05s stagger) */
.journal-section:nth-child(2) {
  animation-delay: 0s;
}

.journal-section:nth-child(3) {
  animation-delay: calc((0.2s + 0.05s) * 1);
}

.journal-section:nth-child(4) {
  animation-delay: calc((0.2s + 0.05s) * 2);
}

.journal-section:nth-child(5) {
  animation-delay: calc((0.2s + 0.05s) * 3);
}

.journal-section:nth-child(6) {
  animation-delay: calc((0.2s + 0.05s) * 4);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
