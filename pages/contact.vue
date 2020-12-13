<template>
  <div class="ic-container-fluid push-from-header">
    <div class="grid grid-cols-5 gap-24 my-4">
      <div class="col-start-1 lg:col-start-3 col-end-6">
        <h1 class="text-8xl font-display font-bold leading-none">
          Lets create progress
          <br />
          together !
        </h1>
      </div>
    </div>
    <div class="contact-page-layout">
      <div class="col-span-1 hidden md:block md:col-span-2">
        <img
          src="/img/contact.jpg"
          class="w-full sm:w-2/3 md:w-full h-full object-cover"
          alt=""
        />
      </div>
      <div class="col-span-1 md:col-span-3 py-12 flex flex-col">
        <h3 class="text-lg font-light leading-none mb-12">
          Ask us anything or just say hello.
        </h3>
        <div class="flex flex-wrap flex-row gap-y-8">
          <div class="w-full md:w-1/2 pr-8">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              class="w-full"
            />
          </div>
          <div class="w-full md:w-1/2 pr-8">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              class="w-full"
            />
          </div>
          <div class="w-full pr-8">
            <input
              id="message"
              type="text"
              name="message"
              placeholder="Enter your message"
              class="w-full"
            />
          </div>
          <div class="w-full pr-8">
            <button class="btn">Send</button>
          </div>
        </div>
        <div class="mt-12 flex flex-col">
          <h4 class="text-2xl leading-none font-normal">Follow us on</h4>
          <div class="flex flex-wrap flex-row gap-6 py-8">
            <a href="#" class="w-12 h-12">
              <img
                src="/icons/instagram-sketched.png"
                alt=""
                class="h-full w-auto"
              />
            </a>
            <a href="#" class="w-12 h-12">
              <img
                src="/icons/instagram-sketched.png"
                alt=""
                class="h-full w-auto"
              />
            </a>
            <a href="#" class="w-12 h-12">
              <img
                src="/icons/instagram-sketched.png"
                alt=""
                class="h-full w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="partners">
      <div class="ic-container flex flex-col gap-y-12 lg:flex-row">
        <div class="partners-logos">
          <h5 class="title">Our Partner</h5>
          <a href="#" class="w-24 h-24" v-for="item in 4" :key="item">
            <img src="/icons/partner.png" alt="" class="h-full w-auto" />
          </a>
        </div>
        <div class="network-logos">
          <h5 class="title">Our Network</h5>
          <a href="#" class="w-24 h-24" v-for="item in 8" :key="item">
            <img src="/icons/partner.png" alt="" class="h-full w-auto" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmoothScroll from '~/mixins/SmoothScroll.js'

export default {
  mixins: [SmoothScroll],
  layout: 'nofooter'
}
</script>

<style lang="postcss" scoped>
.contact-page-layout {
  @apply grid grid-rows-1 grid-cols-none gap-12 mt-4;
}

@screen md {
  .contact-page-layout {
    @apply gap-24 grid-cols-5 grid-rows-none;
  }
}

.partners {
  @apply py-40 bg-darker-grey w-full;
}

.partners .title {
  @apply text-white text-lg leading-none mr-10;
}

.partners .partners-logos {
  @apply w-full flex flex-row flex-wrap gap-6;
}

@screen lg {
  .partners .partners-logos {
    @apply w-2/5;
  }
}

.partners .network-logos {
  @apply w-full flex flex-row flex-wrap gap-6;
}

@screen lg {
  .partners .network-logos {
    @apply w-3/5;
  }
}
</style>
