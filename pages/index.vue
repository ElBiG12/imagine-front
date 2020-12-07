<template>
  <div class="push-from-header">
    <div class="ic-container">
      <HomeCarousel />
    </div>
    <div class="ic-container grid grid-cols-1 lg:grid-cols-9 gap-x-20 mt-64">
      <div class="flex flex-col lg:col-span-4">
        <h1 class="text-3xl font-bold font-display mb-16">Le projet Imagine</h1>
        <p class="text-lg font-bold mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          elementum tellus egestas aliquam.
        </p>
        <p class="mb-12 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          eleifend erat sed tincidunt velit tortor ut. In egestas cras integer
          neque, ornare volutpat et ut cursus. Diam nisl id est, cras non
          placerat ac vitae. Egestas at tortor nec tempor tristique varius nam
          at. Placerat amet leo ac ut. Sed vestibulum mollis fermentum dictumst
          facilisis. Gravida habitasse sagittis ultrices sagittis montes natoque
          turpis.
        </p>
        <p class="mb-24 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          eleifend erat sed tincidunt velit tortor ut. In egestas cras integer
          neque, ornare volutpat et ut cursus. Diam nisl id est, cras non
          placerat ac vitae. Egestas at tortor nec tempor tristique varius nam
          at. Placerat amet leo ac ut. Sed vestibulum mollis fermentum dictumst
          facilisis. Gravida habitasse sagittis ultrices sagittis montes natoque
          turpis.
        </p>

        <a href="#" class="link link-primary">
          En savoir plus
          <client-only placeholder=">">
            <ion-icon name="chevron-forward-outline" class="link-icon" />
          </client-only>
        </a>
      </div>
      <div
        class="flex flex-row items-center justify-center gap-10 lg:col-span-5 mt-24 lg:mt-0"
      >
        <div class="flex flex-col justify-start gap-10">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            data-scroll
            data-scroll-speed="1"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1582499519937-2a37d225f9bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            class="pr-10"
            data-scroll
            data-scroll-speed="3"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-end gap-10">
          <img src="/img/test.png" data-scroll data-scroll-speed="2" alt="" />
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1533577344265-69c4873b22aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            data-scroll
            data-scroll-speed="4"
            alt=""
          />
        </div>
      </div>
    </div>
    <div
      class="w-full lg:w-11/12 ml-auto px-4 lg:px-0 grid grid-row-2 mt-64 overflow-x-hidden"
    >
      <div>
        <h1 class="text-3xl font-bold font-display mb-16">Actualités</h1>
      </div>
      <div
        class="flex flex-col flex-no-wrap overflow-x-hidden md:flex-row gap-12 sm:gap-10 lg:gap-20 relative md:-mr-20"
      >
        <HomeNewsCard />
        <HomeNewsCard />
        <HomeNewsCard
          class="right-0 origin-right transformtranslate-x-1/2"
          isReadMore
        />
      </div>
    </div>

    <div class="ic-container-fluid grid grid-row-2 mt-64">
      <div
        class="ic-container flex flex-row justify-between mb-12 items-center"
      >
        <h1 class="text-3xl font-bold font-display">Films Documentaires</h1>
        <a href="#" class="link link-primary">
          Voir tous les films
          <ion-icon name="chevron-forward-outline" class="link-icon" />
        </a>
      </div>
    </div>
    <!-- <ClientOnly> -->
      <div class="article-cn">
        <div class="grid grid-cols-1 gap-y-10">
          <div class="simply-scroll simply-scroll-container">
            <ul
              id="simply-scroller"
              ref="gsaplyScroller"
              class="grid grid-flow-col gap-10"
            >
              <li v-for="(doc, i) in 1" :key="i">
                <DocCard :index="'toplane_' + i" :item="top" />
              </li>
            </ul>
          </div>
          <div class="simply-scroll simply-scroll-container">
            <ul
              id="simply-scroller2"
              ref="gsaplyScrollerTwo"
              class="grid grid-flow-col gap-10"
            >
              <li v-for="(doc2, i2) in 9" :key="i2">
                <DocCard :index="'bottomlane_' + i2" :item="bottom" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    <!-- </ClientOnly> -->
  </div>
</template>

<script>
import HomeCarousel from '@/components/sliders/carousel'
import HomeNewsCard from '@/components/card/HomeNewsCard'
import DocCard from '@/components/card/DocCard'
import $ from 'jquery'
import SmoothScroll from '~/mixins/SmoothScroll.js'
import GsaplyScroll from '~/mixins/GsaplyScroll.js'

if (process.client) {
  require('jquery-simplyscroll')
}

export default {
  components: {
    HomeCarousel,
    HomeNewsCard,
    DocCard
  },
  mixins: [SmoothScroll, GsaplyScroll],
  data() {
    return {
      top: {
        title: 'An auto biography',
        img: '/docs/toplane.jpg',
        slug: 'toplane',
        short_desc: 'This is the descreption for the imagine & memoire movies.'
      },
      bottom: {
        title: 'An auto biography',
        img: '/docs/bottomlane.jpg',
        slug: 'bottomlane',
        short_desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et augue mauris a vulputate.'
      },
      simplyStart: false
    }
  },
  mounted() {
    this.$nextTick(function () {
      // this.gsaplyScroll(this.$refs.gsaplyScroller, 4)
      // this.gsaplyScroll(this.$refs.gsaplyScrollerTwo, 0.25)
      $('#simply-scroller').simplyScroll({
        auto: true,
        autoMode: 'loop',
        customClass: 'simply-scroll',
        direction: 'backward',
        frameRate: 60,
        initialOffset: 0,
        manualMode: 'end',
        orientation: 'horizontal',
        pauseButton: false,
        pauseOnHover: false,
        pauseOnTouch: false,
        speed: 4,
        startOnLoad: false
      })

      $('#simply-scroller2').simplyScroll({
        auto: true,
        autoMode: 'loop',
        customClass: 'simply-scroll',
        direction: 'forwards',
        frameRate: 60,
        initialOffset: 0,
        manualMode: 'end',
        orientation: 'horizontal',
        pauseButton: false,
        pauseOnHover: false,
        pauseOnTouch: false,
        speed: 8,
        startOnLoad: false
      })
    })
  }
}
</script>

<style lang="postcss">
.article-cn {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
}
/* Container DIV - automatically generated */
.simply-scroll-container {
  position: relative;
}

/* Clip DIV - automatically generated */
.simply-scroll-clip {
  position: relative;
  overflow: hidden;
}

/* UL/OL/DIV - the element that simplyScroll is inited on
Class name automatically added to element */
.simply-scroll-list {
  overflow: hidden;
  margin: 0;
  list-style: none;
}
/* Custom class modifications - adds to / overrides above
.simply-scroll is default base class */

/* Container DIV */
.simply-scroll {
  width: 100%;
}

/* Clip DIV */
.simply-scroll .simply-scroll-clip {
  width: 100%;
}

/* Explicitly set height/width of each list item */
.simply-scroll .simply-scroll-list li {
  float: left; /* Horizontal scroll only */
  width: 435px;
  height: 260px;
}
</style>
