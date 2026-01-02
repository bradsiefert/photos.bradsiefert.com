<template>
  <nav class="journal-detail-nav">
    <div class="nav-back">
      <NuxtLink to="/journal" class="nav-link">
        ← Back to Journal
      </NuxtLink>
    </div>
    <div class="nav-logo">
      <NuxtLink to="/" class="logo-link">
        <img src="@/images/logo-icon.svg" alt="Brad Siefert Logo" class="logo-icon" />
        <span class="logo-text">Brad Siefert / Photography</span>
      </NuxtLink>
    </div>
    <div class="nav-darkmode">
      <Darkmode />
    </div>
  </nav>
  
</template>

<script setup>
</script>

<style scoped>
.journal-detail-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 96px;
  padding: 16px 0;
  gap: 16px;
}

.nav-back,
.nav-darkmode {
  flex: 1;
  display: flex;
  align-items: center;
}

.nav-back {
  justify-content: flex-start;
}

.nav-darkmode {
  justify-content: flex-end;
}

.nav-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11.375px;
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  gap: 12px;
}

.logo-icon {
  width: 50px;
  height: 28px;
  display: block;
}

.logo-text {
  font-family: 'SFM';
  font-weight: 700;
  font-size: 15px;
  line-height: 18.75px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-neutral-darkest);
}

body[dark-mode] .logo-text {
  color: var(--color-neutral-lightest);
}

.nav-link {
  font-family: 'SFM';
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
  text-decoration: none;
}

body[dark-mode] .nav-link {
  color: var(--color-neutral-lightest);
}

.nav-link:hover {
  color: var(--color-neutral-darkest);
  text-decoration: none;
}

.nav-link:focus-visible {
  outline: 2px solid var(--color-highlight-400) !important;
  outline-offset: 2px !important;
  border-radius: 2px !important;
}

body[dark-mode] .nav-link:hover {
  color: var(--color-neutral-lightest);
}

.nav-darkmode :deep(a),
.nav-darkmode :deep(button) {
  font-family: 'SFM';
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: -0.25px;
  color: var(--color-neutral-darkest);
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

body[dark-mode] .nav-darkmode :deep(a),
body[dark-mode] .nav-darkmode :deep(button) {
  color: var(--color-neutral-lightest);
}

.nav-darkmode :deep(a:hover),
.nav-darkmode :deep(button:hover) {
  color: var(--color-neutral-darkest);
  text-decoration: none;
}

.nav-darkmode :deep(a:focus-visible),
.nav-darkmode :deep(button:focus-visible) {
  outline: 2px solid var(--color-highlight-400) !important;
  outline-offset: 2px !important;
  border-radius: 2px !important;
}

body[dark-mode] .nav-darkmode :deep(a:hover),
body[dark-mode] .nav-darkmode :deep(button:hover) {
  color: var(--color-neutral-lightest);
}

@media (max-width: 1023px) {
  .journal-detail-nav {
    flex-wrap: wrap;
    padding: 16px;
  }

  .nav-back,
  .nav-darkmode {
    flex: 0 0 auto;
  }

  .nav-logo {
    order: -1;
    width: 100%;
  }
}
</style>

