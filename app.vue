<template>
  <div id="floater"></div>
  <div id="centered">
    <div class="sidebar-nav">
      <div class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="navbar-brand">
          <a href="/">
            <img src="@/images/logo-icon.svg" alt="Brad Siefert Logo"/>Brad Siefert Photography
          </a>
        </div>
      </div>

      <div class="navbar-collapse collapse sidebar-navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><NuxtLink target="_blank" href="https://10years.photos.bradsiefert.com">10 Years</NuxtLink></li>
          <li><NuxtLink to="/">People</NuxtLink></li>
          <li><NuxtLink to="/places">Places</NuxtLink></li>
          <li><NuxtLink to="/instantfilm">Instant Film</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </div>
      </div>
    </div><!-- /sidebar-nav -->

    <NuxtPage />

  </div><!-- /centered -->
</template>