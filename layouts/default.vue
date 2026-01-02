<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <div id="app-wrapper" :class="{ 'sticky-nav-wrapper': isStickyPage }">
    <div id="centered">
      <header class="sidebar-nav">
        <nav class="navbar navbar-default" role="navigation">
          <div class="navbar-header">
            <button 
              type="button" 
              class="navbar-toggle" 
              data-toggle="collapse" 
              data-target=".navbar-collapse"
              :aria-label="isMenuExpanded ? 'Close navigation menu' : 'Open navigation menu'"
              :aria-expanded="isMenuExpanded"
              aria-controls="navbar-collapse"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <div class="navbar-brand">
              <NuxtLink to="/">
                <img src="@/images/logo-icon.svg" alt="Brad Siefert Logo"/>Brad Siefert / Photo<span class="hidden-xs">graphy</span>
              </NuxtLink>
            </div>
          </div>

          <div id="navbar-collapse" class="navbar-collapse collapse sidebar-navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li><NuxtLink target="_blank" rel="noopener noreferrer" href="https://10years.photos.bradsiefert.com">10 Years</NuxtLink></li>
              <li><NuxtLink to="/">People</NuxtLink></li>
              <li><NuxtLink to="/places">Places</NuxtLink></li>
              <li><NuxtLink to="/instantfilm">Instant Film</NuxtLink></li>
              <!-- <li><NuxtLink to="/journal">Journal</NuxtLink></li> -->
              <li><NuxtLink to="/about">About</NuxtLink></li>
              <li><darkmode /></li>
            </ul>
          </div>
        </nav>
      </header><!-- /sidebar-nav -->

      <main id="main-content">
        <slot />
      </main>

    </div><!-- /centered -->
  </div><!-- /app-wrapper -->
</template>

<script setup>
const route = useRoute()
const isMenuExpanded = ref(false)

const isStickyPage = computed(() => {
  return route.path.startsWith('/journal') || route.path.startsWith('/familyandfriends')
})

onMounted(() => {
  if (process.client) {
    const navbarCollapse = document.querySelector('.navbar-collapse')
    if (navbarCollapse) {
      // Listen to Bootstrap collapse events
      navbarCollapse.addEventListener('shown.bs.collapse', () => {
        isMenuExpanded.value = true
      })
      navbarCollapse.addEventListener('hidden.bs.collapse', () => {
        isMenuExpanded.value = false
      })
    }
  }
})
</script>

