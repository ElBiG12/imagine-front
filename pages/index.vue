<template>
  <div class="push-from-header">
    <div class="ic-container">
      <HomeCarousel />
    </div>
    <div class="ic-container grid grid-cols-1 lg:grid-cols-9 gap-x-20 mt-64">
      <div class="flex flex-col lg:col-span-4">
        <h1 class="sm:text-3xl md:text-5xl font-bold font-display mb-16">
          Le projet Imagine
        </h1>
        <p class="text-lg font-bold mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          elementum tellus egestas aliquam.
        </p>
        <p class="mb-12 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          eleifend erat sed tincidunt velit tortor ut. In egestas cras integer
          neque, ornare volutpat et ut cursus. Diam nisl id est, cras non
          placerat ac vitae. Egestas at tortor nec tempor tristique varius nam
          at. Placerat amet leo ac ut. Sed vestibulum mollis fermentum dictumst
          facilisis. Gravida habitasse sagittis ultrices sagittis montes natoque
          turpis.
        </p>
        <p class="mb-24 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          eleifend erat sed tincidunt velit tortor ut. In egestas cras integer
          neque, ornare volutpat et ut cursus. Diam nisl id est, cras non
          placerat ac vitae. Egestas at tortor nec tempor tristique varius nam
          at. Placerat amet leo ac ut. Sed vestibulum mollis fermentum dictumst
          facilisis. Gravida habitasse sagittis ultrices sagittis montes natoque
          turpis.
        </p>

        <NuxtLink to="/imagine">
          <MoreButton />
        </NuxtLink>
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
    <div class="ic-container mt-64 overflow-x-hidden">
      <div>
        <h1 class="sm:text-3xl md:text-5xl font-bold font-display mb-8">
          Actualités
        </h1>
      </div>
      <div
        class="flex flex-col flex-no-wrap overflow-x-hidden md:flex-row gap-12 sm:gap-10 lg:gap-20 relative"
      >
        <HomeNewsCard />
        <HomeNewsCard />
        <HomeNewsCard
          class="right-0 origin-right transformtranslate-x-1/2"
          isReadMore
        />
      </div>
    </div>

    <div class="ic-container mt-64 mb-8">
      <div
        class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-4 align-middle"
      >
        <div class="sm:col-span-5 md:col-span-4">
          <h1 class="sm:text-3xl md:text-5xl font-bold font-display">
            Nos films documentaires
          </h1>
        </div>
        <div class="sm:col-span-5 md:col-span-1">
          <NuxtLink to="/imagine">
            <MoreButton />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="article-cn">
      <div class="grid grid-cols-1 gap-y-10">
        <ul ref="gsaplyScroller" class="grid grid-flow-col gap-10">
          <li v-for="(doc, i) in 2" :key="i">
            <DocCard :index="'toplane_' + i" :item="top" />
          </li>
        </ul>
        <ul ref="gsaplyScrollerTwo" class="grid grid-flow-col gap-10">
          <li v-for="(doc2, i2) in 9" :key="i2">
            <DocCard :index="'bottomlane_' + i2" :item="bottom" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from '@/components/sliders/carousel'
import HomeNewsCard from '@/components/card/HomeNewsCard'
import DocCard from '@/components/card/DocCard'
import MoreButton from '@/components/card/MoreButton'
import SmoothScroll from '~/mixins/SmoothScroll.js'
import InfiniteHorzScroll from '~/utils/infiniteHorzScroll'

export default {
  components: {
    HomeCarousel,
    HomeNewsCard,
    DocCard,
    MoreButton
  },
  mixins: [SmoothScroll],
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
      infinitScrollOne: null,
      infinitScrollTwo: null
    }
  },
  destroyed() {
    this.infinitScrollOne.kill()
    this.infinitScrollTwo.kill()
  },
  mounted() {
    this.$nextTick(function () {
      this.infinitScrollOne = new InfiniteHorzScroll(
        this.$refs.gsaplyScroller,
        4
      )
      this.infinitScrollOne.init()
      this.infinitScrollTwo = new InfiniteHorzScroll(
        this.$refs.gsaplyScrollerTwo,
        -8
      )
      this.infinitScrollTwo.init()
    })
  }
}
</script>

<style lang="postcss" scoped>
.article-cn {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
}
</style>
