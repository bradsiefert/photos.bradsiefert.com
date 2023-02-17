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
          <img src="@/logo-icon.svg" alt="Brad Siefert Logo"/><NuxtLink to="/">Brad Siefert
          Photography</NuxtLink>
        </div>
      </div>

      <div class="navbar-collapse collapse sidebar-navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><NuxtLink target="_blank" href="https://10years.photos.bradsiefert.com">10 Years Photobook</NuxtLink></li>
          <li><NuxtLink to="/">People</NuxtLink></li>
          <li><NuxtLink to="/places">Places</NuxtLink></li>
          <li><NuxtLink to="/instantfilm">Instant Film</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <a rel="me" href="https://mas.to/@bradsiefert">&nbsp;</a>
        </ul>
      </div>
      </div>
    </div><!-- /sidebar-nav -->

    <NuxtPage />

  </div><!-- /centered -->
</template>