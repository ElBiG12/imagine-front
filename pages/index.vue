<template>
  <div>
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
      <div class="ic-container flex flex-row justify-between mb-12 items-center">
        <h1 class="text-3xl font-bold font-display">Films Documentaires</h1>
        <a href="#" class="link link-primary">
          Voir tous les films
          <ion-icon name="chevron-forward-outline" class="link-icon" />
        </a>
      </div>
      <div class="flex flex-row w-full relative gap-12">
          <HomeDocCard />
          <HomeDocCard />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from '@/components/sliders/carousel'
import HomeNewsCard from '@/components/card/HomeNewsCard'
import HomeDocCard from '@/components/card/HomeDocCard'

export default {
  components: {
    HomeCarousel,
    HomeNewsCard,
    HomeDocCard
  }
}
</script>

<style>
</style>
