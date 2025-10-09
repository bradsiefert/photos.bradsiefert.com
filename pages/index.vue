<template>
  <div class="portfolio">
    <section class="slider">
      <div class="flexslider loading">
        <ul class="slides">
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
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
        slider.removeClass('loading');
      }
    });
  }
}
</script>