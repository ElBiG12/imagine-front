<template>
  <div class="push-from-header">
    <div class="ic-container bg-dark">
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
          <img src="/img/home-rect-1.png" alt="" />
          <img src="/img/home-rect-3.png" class="pr-10" alt="" />
        </div>
        <div class="flex flex-col justify-end gap-10">
          <img src="/img/home-rect-2.png" alt="" />
          <img src="/img/home-rect-1.png" alt="" />
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
    <div class="poster-cn">
      <div class="grid grid-cols-1 place-items-center">
        <div class="simply-scroll simply-scroll-container">
          <ul
            id="scroller"
            class="simply-scroll-list grid grid-flow-col gap-10"
          >
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
          </ul>
        </div>
        <div class="simply-scroll simply-scroll-container">
          <ul
            id="scroller2"
            class="simply-scroll-list grid grid-flow-col gap-10"
          >
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
            <li>
              <DocCard />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from '@/components/sliders/carousel'
import HomeNewsCard from '@/components/card/HomeNewsCard'
import DocCard from '@/components/card/DocCard'
import $ from 'jquery'

if (typeof window !== 'undefined') {
  require('jquery-simplyscroll')
}

export default {
  components: {
    HomeCarousel,
    HomeNewsCard,
    DocCard
  },
  mounted () {
    $('#scroller').simplyScroll({
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
    $('#scroller2').simplyScroll({
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
  }
}
</script>

<style>
.poster-cn {
  position: relative;
  overflow: hidden;
  width: 100%;
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
  padding: 0;
  list-style: none;
}
/* Custom class modifications - adds to / overrides above
.simply-scroll is default base class */

/* Container DIV */
.simply-scroll {
  width: 100%;
  margin-bottom: 1em;
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
