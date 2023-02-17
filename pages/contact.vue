<template>
  <div class="content">
    <div class="col-lg-7">
      <h1>Contact</h1>

      <p>
        Thanks for checking out my work. If you'd like to reach out to me, please use the form below. I'll do my best to get back to you shortly.
      </p>

      <form name="Brad Siefert Photography Contact Form" method="POST" action="/success" data-netlify="true">
        <div class="mb-4">
          <h2><label for="message">Name</label></h2>
          <input class="form-control input-sm" type="text" name="name" placeholder="Your Name"/>
        </div>

        <div class="mb-4">
          <h2><label for="message">Email</label></h2>
          <input class="form-control input-sm" type="email" name="email" placeholder="name@email.com" />
        </div>

        <div class="mb-4">
          <h2><label for="message">Message</label></h2>
          <textarea
            class="form-control input-sm"
            name="message"
            style="min-height: 160px;"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div class="mb-4">
          <button type="submit" class="btn btn-default btn-rounded btn-sm">Send Message&nbsp;📨</button>
        </div>
      </form>

    </div>
  </div>
</template>