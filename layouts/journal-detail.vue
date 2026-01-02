<template>
  <div id="journal-detail-wrapper">
    <div id="journal-detail-centered">
      <header>
        <JournalNavbar />
      </header>
      <main class="journal-detail-page">
        <div class="nav-divider">
          <div class="divider-line"></div>
          <span class="divider-label">Photoset</span>
          <div class="divider-line"></div>
        </div>
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
#journal-detail-wrapper {
  padding: 16px;
  background-color: var(--color-neutral-lightest);
}

body[dark-mode] #journal-detail-wrapper {
  background-color: var(--color-neutral-darkest);
}

#journal-detail-centered {
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 1023px) {
  #journal-detail-wrapper {
    margin-top: -80px; /* Offset to account for the negative margin on body */
    padding: 0;
  }
}

/* ---------- Journal Detail Page Image Layouts --------- */

/* Base photo container */
.photo-container {
  display: flex;
  gap: 16px;
  width: 100%;
  /* margin-bottom: 64px; */
  max-height: 960px;
}

.photo-item {
  flex: 1;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
}

.photo-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Landscape photo aspect ratio */
.photo-landscape {
  aspect-ratio: 1600 / 1067;
}

/* Portrait photo aspect ratio */
.photo-portrait {
  aspect-ratio: 716 / 1073.66;
}

/* Single horizontal image */
.photo-layout-single {
  display: flex;
  width: 100%;
  /* margin-bottom: 64px; */
  max-height: 960px;
}

.photo-layout-single .photo-item {
  width: 100%;
}

/* Two horizontal images side by side */
.photo-layout-landscape-2 {
  display: flex;
  gap: 16px;
  width: 100%;
  /* margin-bottom: 64px; */
  max-height: 960px;
}

.photo-layout-landscape-2 .photo-item {
  flex: 1;
}

/* Three horizontal images side by side */
.photo-layout-landscape-3 {
  display: flex;
  gap: 16px;
  width: 100%;
  /* margin-bottom: 64px; */
  max-height: 960px;
}

.photo-layout-landscape-3 .photo-item {
  flex: 1;
}

/* Two portrait images side by side */
.photo-layout-portrait-2 {
  display: flex;
  gap: 16px;
  width: 100%;
  /* margin-bottom: 64px; */
  max-height: 960px;
}

.photo-layout-portrait-2 .photo-item {
  flex: 1;
}

/* Three portrait images side by side */
.photo-layout-portrait-3 {
  display: flex;
  gap: 16px;
  width: 100%;
  /* margin-bottom: 64px; */
  max-height: 960px;
}

.photo-layout-portrait-3 .photo-item {
  flex: 1;
}

/* Grid layout: 2x2 (4 images) */
.photo-layout-grid-2x2 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  height: 640px;
  /* margin-bottom: 64px; */
  overflow: hidden;
}

.photo-layout-grid-2x2 .photo-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.photo-layout-grid-2x2 .photo-item:nth-child(1) {
  grid-column: 1 / span 2;
  grid-row: 1;
}

.photo-layout-grid-2x2 .photo-item:nth-child(2) {
  grid-column: 3 / span 2;
  grid-row: 1 / span 2;
}

.photo-layout-grid-2x2 .photo-item:nth-child(3) {
  grid-column: 1 / span 2;
  grid-row: 2;
}

.photo-layout-grid-2x2 .photo-item img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Grid layout: 3x4 (mixed) */
.photo-layout-grid-3x4 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
  height: 1296px;
  margin-bottom: 64px;
  overflow: hidden;
}

.photo-layout-grid-3x4 .photo-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.photo-layout-grid-3x4 .photo-item:nth-child(1) {
  grid-column: 1 / span 3;
  grid-row: 1;
}

.photo-layout-grid-3x4 .photo-item:nth-child(2) {
  grid-column: 1 / span 2;
  grid-row: 2 / span 3;
}

.photo-layout-grid-3x4 .photo-item:nth-child(3) {
  grid-column: 3;
  grid-row: 2;
}

.photo-layout-grid-3x4 .photo-item:nth-child(4) {
  grid-column: 3;
  grid-row: 3;
}

.photo-layout-grid-3x4 .photo-item:nth-child(5) {
  grid-column: 3;
  grid-row: 4;
}

.photo-layout-grid-3x4 .photo-item img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .photo-container,
  .photo-layout-single,
  .photo-layout-landscape-2,
  .photo-layout-landscape-3,
  .photo-layout-portrait-2,
  .photo-layout-portrait-3 {
    flex-direction: column;
    gap: 16px;
  }

  .photo-layout-grid-2x2 {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }

  .photo-layout-grid-2x2 .photo-item {
    aspect-ratio: 1600 / 1067;
    position: relative;
    min-height: 0;
  }

  .photo-layout-grid-2x2 .photo-item:nth-child(1),
  .photo-layout-grid-2x2 .photo-item:nth-child(2),
  .photo-layout-grid-2x2 .photo-item:nth-child(3) {
    grid-column: 1;
    grid-row: auto;
  }

  .photo-layout-grid-2x2 .photo-item img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .photo-layout-grid-3x4 {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    height: auto;
  }

  .photo-layout-grid-3x4 .photo-item {
    aspect-ratio: 1600 / 1067;
    position: relative;
    min-height: 0;
  }

  .photo-layout-grid-3x4 .photo-item:nth-child(1),
  .photo-layout-grid-3x4 .photo-item:nth-child(2),
  .photo-layout-grid-3x4 .photo-item:nth-child(3),
  .photo-layout-grid-3x4 .photo-item:nth-child(4),
  .photo-layout-grid-3x4 .photo-item:nth-child(5) {
    grid-column: 1;
    grid-row: auto;
  }

  .photo-layout-grid-3x4 .photo-item img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .photo-layout-grid-3x4 .photo-item:nth-child(1),
  .photo-layout-grid-3x4 .photo-item:nth-child(2),
  .photo-layout-grid-3x4 .photo-item:nth-child(3),
  .photo-layout-grid-3x4 .photo-item:nth-child(4),
  .photo-layout-grid-3x4 .photo-item:nth-child(5) {
    grid-column: 1;
    grid-row: auto;
  }
}

/* Journal Detail Page Styles */
.journal-detail-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 32px 0 64px;
  color: var(--color-neutral-darkest);
}

.journal-detail-page > div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
}

body[dark-mode] .journal-detail-page {
  color: var(--color-neutral-lightest);
}

.journal-detail-page .nav-divider {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  height: 24px;
}

.journal-title {
  text-align: center;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 8px;
  margin-bottom: 8px;
}

.journal-title h1 {
  font-family: 'SFM';
  font-weight: 700;
  font-size: 44px;
  line-height: 44.8px;
  letter-spacing: -0.25px;
  margin: 0;
  color: var(--color-neutral-darkest);
}

body[dark-mode] .journal-title h1 {
  color: var(--color-neutral-lightest);
}

.journal-metadata {
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  margin-top: 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, var(--color-neutral-200) 0%, var(--color-neutral-100) 72%);
  border: 1px solid var(--color-neutral-300);
  width: fit-content;
}

body[dark-mode] .journal-metadata {
  background: linear-gradient(180deg, var(--color-neutral-1000) 0%, rgba(25, 27, 34, 0.32) 72.12%);
  border: 1px solid var(--color-neutral-800);
}

.metadata-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  flex-shrink: 0;
}

.metadata-header {
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
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
}

.metadata-value {
  font-family: 'SFM';
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
}

body[dark-mode] .metadata-header :deep(svg) {
  color: var(--color-neutral-lightest);
}

body[dark-mode] .metadata-label {
  color: var(--color-neutral-lightest);
}

body[dark-mode] .metadata-value {
  color: var(--color-neutral-lightest);
}

.journal-text-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
  max-width: 512px;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 48px;
  margin-left: 0;
  margin-right: 0;
}

.section-divider {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.journal-detail-page .section-label {
  font-family: 'SFM';
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
  white-space: nowrap;
}

body[dark-mode] .journal-detail-page .section-label {
  color: var(--color-neutral-lightest);
}

.text-content {
  font-family: 'SFM';
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
  width: 100%;
  padding-bottom: 8px;
}

body[dark-mode] .text-content {
  color: var(--color-neutral-lightest);
}

.text-content p {
  margin: 0 0 26px;
}

.text-content p:last-child {
  margin-bottom: 0;
}

.text-divider {
  height: 1px;
  width: 100%;
  background: var(--divider-pattern-light);
}

body[dark-mode] .text-divider {
  background: var(--divider-pattern-dark);
}

.location-divider {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
}

.location-link {
  font-family: 'SFM';
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
  text-decoration: none;
  white-space: nowrap;
}

body[dark-mode] .location-link {
  color: var(--color-neutral-lightest);
}

.location-link:hover {
  text-decoration: none;
}

.location-label {
  font-family: 'SFM';
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
  white-space: nowrap;
}

body[dark-mode] .location-label {
  color: var(--color-neutral-lightest);
}

.journal-footer {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
  width: 100%;
}

.footer-link {
  font-family: 'SFM';
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
  text-decoration: none;
  white-space: nowrap;
}

body[dark-mode] .footer-link {
  color: var(--color-neutral-lightest);
}

.footer-link:hover {
  text-decoration: none;
}

.footer-text {
  font-family: 'SFM';
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
  white-space: nowrap;
}

body[dark-mode] .footer-text {
  color: var(--color-neutral-lightest);
}

@media (max-width: 1023px) {
  .journal-detail-page {
    padding: 0 16px;
  }

  .journal-title h1 {
    font-size: 32px;
    line-height: 36px;
  }

  .journal-metadata {
    gap: 32px;
    padding: 16px;
  }

  .journal-text-section {
    width: 100%;
    padding: 0;
    margin: 16px 0;
  }

  .location-divider,
  .journal-footer {
    flex-direction: column;
    gap: 16px;
  }

  .location-divider .divider-line,
  .journal-footer .divider-line {
    width: 100%;
  }
}
</style>

