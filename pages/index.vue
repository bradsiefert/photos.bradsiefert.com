<template>
  <div class="portfolio">
    <section class="slider" aria-label="Portfolio photo carousel">
      <div class="flexslider loading" role="region" aria-roledescription="carousel" aria-label="Portfolio photos">
        <ul class="slides" aria-live="polite">
          <li><img src="@/portfolio/people/people-triptotulum1.jpg" alt="Man sitting on the side of the street in Tulum, Mexico" /></li>
          <li><img src="@/portfolio/people/people-ourhoneymoon.jpg" alt="Man prays at church in Granada, Nicaragua" /></li>
          <li><img src="@/portfolio/people/people-gtrain.jpg" alt="People waiting for the G train at the Hoyt Schermerhorn stop in NYC" /></li>
          <li><img src="@/portfolio/people/people-rabbitislandschool2016.jpg" alt="Five men in silhouette at Rabbit Island in Torch Lake Township, Michigan" /></li>
          <li><img src="@/portfolio/people/people-triptotulum2.jpg" alt="Woman swimming underwater in Grand Cenote in Tulum, Mexico" /></li>
          <li><img src="@/portfolio/people/people-triptomaine.jpg" alt="Man sleeping in a boat in BoothBay Harbor, Maine" /></li>
          <li><img src="@/portfolio/people/people-navypiertripledate.jpg" alt="People enjoying the swings at Navy Pier in Chicago, IL" /></li>
          <li><img src="@/portfolio/people/people-applevscophotowalk1.jpg" alt="Apple + VSCO photo walk" /></li>
          <li><img src="@/portfolio/people/people-lawrence.jpg" alt="Portrait of Lawrence Agyei" /></li>
          <li><img src="@/portfolio/people/people-jimmyspencerjr.jpg" alt="Portrait of Jimmy Spencer Jr." /></li>
          <li><img src="@/portfolio/people/people-gerard-moorer.jpg" alt="Portrait of Gerard Moorer politician" /></li>
          <li><img src="@/portfolio/people/people-joshua-willis.jpg" alt="Portrait of Joshua Willis" /></li>
          <li><img src="@/portfolio/people/people-the83rd.jpg" alt="Portrait of Will" /></li>
          <li><img src="@/portfolio/people/people-djslugodocumentary1.jpg" alt="Portrait of Will and DJ Slugo" /></li>
          <li><img src="@/portfolio/people/people-djslugodocumentary2.jpg" alt="Portrait of Will and DJ Slugo" /></li>
          <li><img src="@/portfolio/people/people-triptosedona.jpg" alt="Portrait of Nicole Siefert" /></li>
          <li><img src="@/portfolio/people/people-applepicking.jpg" alt="Portrait of Charity Luce" /></li>
          <li><img src="@/portfolio/people/people-samanthiamassage.jpg" alt="Portrait of Samanthia Omega" /></li>
          <li><img src="@/portfolio/people/people-triptodenver.jpg" alt="Portrait of Matt Siefert" /></li>
          <li><img src="@/portfolio/people/people-wolfpackretreat2017.jpg" alt="Portrait of Jon Colon" /></li>
          <li><img src="@/portfolio/people/people-theliturgistsgatheringboston.jpg" alt="Portrait of The Liturgists, Michael Gungor and Science Mike Mchargue" /></li>
          <li><img src="@/portfolio/people/people-sciencemike.jpg" alt="Portrait of Science Mike Mchargue" /></li>
          <li><img src="@/portfolio/people/people-lindlawfirmphotoshoot.jpg" alt="Portrait of Lind Law Firm, Jeff Lind" /></li>
        </ul>
      </div>
    </section>
  </div><!-- /portfolio -->

  <!-- /portfolio-mobile -->
  <div class="container-fluid portfolio-mobile">
    <div class="row">
      <ul class="list-unstyled">
        <li><img src="@/portfolio/people/people-triptotulum1.jpg" alt="Man sitting on the side of the street in Tulum, Mexico" /></li>
        <li><img src="@/portfolio/people/people-ourhoneymoon.jpg" alt="Man prays at church in Granada, Nicaragua" /></li>
        <li><img src="@/portfolio/people/people-gtrain.jpg" alt="People waiting for the G train at the Hoyt Schermerhorn stop in NYC" /></li>
        <li><img src="@/portfolio/people/people-rabbitislandschool2016.jpg" alt="Five men in silhouette at Rabbit Island in Torch Lake Township, Michigan" /></li>
        <li><img src="@/portfolio/people/people-triptotulum2.jpg" alt="Woman swimming underwater in Grand Cenote in Tulum, Mexico" /></li>
        <li><img src="@/portfolio/people/people-triptomaine.jpg" alt="Man sleeping in a boat in BoothBay Harbor, Maine" /></li>
        <li><img src="@/portfolio/people/people-navypiertripledate.jpg" alt="People enjoying the swings at Navy Pier in Chicago, IL" /></li>
        <li><img src="@/portfolio/people/people-applevscophotowalk1.jpg" alt="Apple + VSCO photo walk" /></li>
        <li><img src="@/portfolio/people/people-lawrence.jpg" alt="Portrait of Lawrence Agyei" /></li>
        <li><img src="@/portfolio/people/people-jimmyspencerjr.jpg" alt="Portrait of Jimmy Spencer Jr." /></li>
        <li><img src="@/portfolio/people/people-gerard-moorer.jpg" alt="Portrait of Gerard Moorer politician" /></li>
        <li><img src="@/portfolio/people/people-joshua-willis.jpg" alt="Portrait of Joshua Willis" /></li>
        <li><img src="@/portfolio/people/people-the83rd.jpg" alt="Portrait of Will" /></li>
        <li><img src="@/portfolio/people/people-djslugodocumentary1.jpg" alt="Portrait of Will and DJ Slugo" /></li>
        <li><img src="@/portfolio/people/people-djslugodocumentary2.jpg" alt="Portrait of Will and DJ Slugo" /></li>
        <li><img src="@/portfolio/people/people-triptosedona.jpg" alt="Portrait of Nicole Siefert" /></li>
        <li><img src="@/portfolio/people/people-applepicking.jpg" alt="Portrait of Charity Luce" /></li>
        <li><img src="@/portfolio/people/people-samanthiamassage.jpg" alt="Portrait of Samanthia Omega" /></li>
        <li><img src="@/portfolio/people/people-triptodenver.jpg" alt="Portrait of Matt Siefert" /></li>
        <li><img src="@/portfolio/people/people-wolfpackretreat2017.jpg" alt="Portrait of Jon Colon" /></li>
        <li><img src="@/portfolio/people/people-theliturgistsgatheringboston.jpg" alt="Portrait of The Liturgists, Michael Gungor and Science Mike Mchargue" /></li>
        <li><img src="@/portfolio/people/people-sciencemike.jpg" alt="Portrait of Science Mike Mchargue" /></li>
        <li><img src="@/portfolio/people/people-lindlawfirmphotoshoot.jpg" alt="Portrait of Lind Law Firm, Jeff Lind" /></li>
      </ul>
    </div>
  </div>
  <!-- /portfolio-mobile -->
</template>

<script>
export default {
  mounted() {
    function updateAriaHidden(slider) {
      const slides = slider.find('.slides > li');
      const currentIndex = slider.currentSlide || 0;
      slides.each(function(index) {
        const slide = $(this);
        if (index === currentIndex) {
          slide.attr('aria-hidden', 'false');
        } else {
          slide.attr('aria-hidden', 'true');
        }
      });
    }

    // Wait for all images in the slider to load before initializing
    const flexslider = $('.flexslider');
    const images = flexslider.find('img');
    
    // Create promises for all image loads
    const imageLoadPromises = Array.from(images).map(img => {
      return new Promise((resolve) => {
        if (img.complete && img.naturalHeight !== 0) {
          // Image already loaded
          resolve();
        } else {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true }); // Resolve even on error to not block
        }
      });
    });

    // Wait for all images to load, then initialize FlexSlider
    Promise.all(imageLoadPromises).then(() => {
      flexslider.flexslider({
        animation: "slide",
        start: function(slider) {
          slider.removeClass('loading');
          // Set initial aria-hidden states
          updateAriaHidden(slider);
        },
        after: function(slider) {
          // Update aria-hidden when slide changes
          updateAriaHidden(slider);
        }
      });
    });
  }
}
</script>