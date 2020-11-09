<template>
  <div :id="$route.params.slug" class="smooth-scroll">
    <div class="top-section">
      <img
        :src="`/docs/${$route.params.slug.split('_')[0]}.jpg`"
        alt="case study"
        v-shared-element:[$route.params.slug]="{
          includeChildren: true
        }"
        srcset=""
      />
      <div class="content ic-container">
        <div class="px-20 w-2/6 flex flex-col">
          <PlayButton class="self-end" />
        </div>
        <h1
          class="text-11xl font-bold font-display top-title text-white leading-none w-4/6"
        >
          J’ai habité L’absence deux fois
        </h1>
      </div>
    </div>
    <div class="ic-container text-center my-24 p-4 secondSection">
      <h1 class="text-11xl font-bold font-display leading-none second-title">
        J’ai habité l’absence deux fois
      </h1>
    </div>

    <div class="ic-container">
      <div class="info-section">
        <div class="tags">
          <hr class="mt-5" />
          <div class="desc-block">
            <p class="title">Durée</p>
            <p class="label">32 min</p>
          </div>
          <div class="desc-block">
            <p class="title">Keywords</p>
            <p class="label">
              Movie, documentaries, slice of life, shunen, Isekei
            </p>
          </div>
        </div>
        <div class="desc">
          <h2 class="leading-text">
            Drifa questionne sont exil intérieur versus l’exil de son frère qui
            est parti vivre en angleterre juste avant que n’eclate la querre
            civil.
          </h2>
          <p class="sub-text">
            Drifa est interpréte et graphiste de formation. Aujourd’hui elle
            aime la platforme web professionelle “ Tahya cinéma”.
          </p>
        </div>
      </div>
    </div>

    <div class="ic-container my-24">
      <WorkshopDoc />
    </div>

    <div class="next-case-section" ref="next_case">
      <div class="next_case_img">
        <img
          :src="`/docs/${nextDoc.split('_')[0]}.jpg`"
          alt="case study"
          srcset=""
          v-shared-element:[`${nextDoc}`]
          data-scroll
          data-scroll-speed="-4"
        />
      </div>
      <div class="content">
        <div
          class="flex flex-col next_case_text"
          data-scroll
          data-scroll-speed="-7"
          data-scroll-offset="-50%, 50%"
        >
          <h2 class="text-7xl font-bold text-white">The lost Architecture</h2>

          <div
            class="flex flex-row items-center justify-between gap-6 md:gap-16"
          >
            <hr class="case-loader" ref="case_loader" />
            <nuxt-link
              tag="p"
              :to="`${nextDoc}`"
              class="text-5xl font-bold text-white"
              >Next
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkshopDoc from '@/components/card/WorkshopDoc'
import PlayButton from '@/components/utilities/PlayButton'
import locomotive from '~/mixins/locomotive.js'

export default {
  mixins: [locomotive],
  layout: 'nofooter',
  components: {
    WorkshopDoc,
    PlayButton
  },
  data() {
    return {
      nextProgress: 0,
      tween: null
    }
  },
  computed: {
    nextDoc() {
      if (this.$route.params.slug.split('_')[0] === 'toplane') {
        return 'bottomlane_' + this.$route.params.slug.split('_')[1] + 1
      } else {
        return 'toplane_' + this.$route.params.slug.split('_')[1] + 1
      }
    }
  },
  watch: {
    $route() {
      console.log('update from cases page')
    }
  },
  methods: {
    startAnimation() {
      if (!process.client) {
        return
      }

      this.tween = this.Gsap.from('.case-loader', {
        scrollTrigger: {
          trigger: '.next-case-section',
          scroller: '.smooth-scroll',
          scrub: true,
          start: 'top bottom',
          end: 'top top'
        },
        width: '0%',
        transformOrigin: 'left center',
        ease: 'none'
      })
    }
  },
  mounted() {
    this.$nextTick(function () {
      console.log('nextTick from cases page')
      this.initScrollerProxy()

      // const vm = this

      this.gsapMix.from('.case-loader', {
        scrollTrigger: {
          trigger: '.next-case-section',
          scroller: '.smooth-scroll',
          scrub: true,
          start: 'top bottom',
          end: 'top top'
        },
        width: '0%',
        transformOrigin: 'left center',
        ease: 'none'
      })

      // this.gsapMix.from('.second-title', {
      //   scrollTrigger: {
      //     trigger: '.secondSection',
      //     scroller: '.smooth-scroll',
      //     scrub: true,
      //     pin: true,
      //     start: 'top top',
      //     end: '+=100%'
      //   },
      //   onStart: () => {
      //     vm.lmS.update()
      //     console.log('on start')
      //   },
      //   transformOrigin: 'left center',
      //   ease: 'none'
      // })

      this.gsapMix.from(
        '.top-title',
        {
          opacity: 0,
          y: 50,
          duration: 1
        }
      )
    })
  },
  destroyed() {
    console.log('before destroy')
    // this.Gsap.killTweensOf('.case-loader')
    // this.tween.kill()
  }
}
</script>

<style lang="postcss" scoped>
.top-section {
  @apply flex relative;
  @apply w-full h-screen;
  @apply bg-gray-500;
}

.top-section img {
  @apply w-full min-h-full overflow-x-hidden;
  object-fit: cover;
  transform-origin: center center;
  transform: scale(1);
  /* transition: all 500ms ease; */
}

.top-section .content {
  @apply absolute top-0 right-0 bottom-0 left-0;
  @apply flex flex-col justify-center items-center;
}

@screen md {
  .top-section .content {
    @apply flex-row;
  }
}

.info-section {
  @apply grid grid-cols-4 gap-12;
}

.info-section .tags {
  @apply flex flex-col col-span-1 pr-12;
}

.info-section .desc {
  @apply col-span-3;
}

.info-section .desc .leading-text {
  @apply text-3xl font-bold leading-snug;
}

.info-section .desc .sub-text {
  @apply text-lg leading-snug mt-16 text-dark-grey;
  font-feature-settings: 'liga' off;
}

.info-section .tags .desc-block {
  @apply flex flex-col gap-3 my-5;
}

.info-section .tags .desc-block .title {
  @apply text-base font-light leading-snug text-dark-grey;
}
.info-section .tags .desc-block .label {
  @apply text-sm font-light leading-snug;
  color: #1e1e1e;
}

.next-case-section {
  @apply flex relative mt-64 overflow-hidden;
  @apply w-full h-screen;
  @apply bg-gray-500;
}

.next-case-section .next_case_img {
  @apply absolute top-0 right-0 bottom-0 left-0;
  transform-origin: center center;
  transform: scale(1);
}

.next-case-section .next_case_img img {
  @apply w-auto min-w-full min-h-full overflow-x-hidden;
  object-fit: cover;
}

.next-case-section .content {
  @apply absolute top-0 right-0 bottom-0 left-0;
  @apply flex flex-col justify-end items-end pb-56 pt-5;
  padding-left: 10vmax;
  padding-right: 10vmax;
}

.next-case-section .content .case-loader {
  @apply block h-0 mr-auto bg-white;
  width: 100%;
  border: 2px solid #ffffff;
}
</style>
