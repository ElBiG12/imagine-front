<template>
  <div :key="$route.params.slug + '_page'">
    <div class="top-section">
      <img
        :src="`/docs/${$route.params.slug.split('_')[0]}.jpg`"
        alt="case study"
        v-shared-element:[$route.params.slug]="{
          ignoreTransparency: true
        }"
        srcset=""
      />
      <div class="content ic-container">
        <div class="top-play-btn">
          <PlayButton />
        </div>
        <h1 class="top-case-title">J’ai habité L’absence deux fois</h1>
      </div>
    </div>
    <div class="ic-container secondSection">
      <h1 class="second-title secondTitle">J’ai habité l’absence deux fois</h1>
    </div>

    <div class="ic-container">
      <div id="info-section" class="info-section">
        <div id="tags" class="tags">
          <hr class="mt-5 w-full" />
          <div id="tags-container" class="tags-container">
            <div class="desc-block">
              <p class="title">Durée</p>
              <p class="label">32 min</p>
            </div>
            <div class="desc-block">
              <p class="title">Realisé par</p>
              <p class="label">Drifa mezner</p>
            </div>
            <div class="desc-block">
              <p class="title">Year</p>
              <p class="label">2010</p>
            </div>
            <div class="desc-block">
              <p class="title">Filming place</p>
              <p class="label">Algiers</p>
            </div>
            <div class="desc-block">
              <p class="title">Category</p>
              <p class="label">Documentary</p>
            </div>
            <div class="desc-block">
              <p class="title">Keywords</p>
              <p class="label">
                Movie, documentaries, slice of life, shunen, Isekei
              </p>
            </div>
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
          class="next_case_img_bg"
          :key="$route.params.slug"
          :src="`/docs/${nextDoc.split('_')[0]}.jpg`"
          alt="case study"
          srcset=""
          v-shared-element:[`${nextDoc}`]
        />
        <div class="next_case_img_layer" />
      </div>
      <div class="content next-case-content">
        <div class="flex flex-col next_case_text">
          <h2 class="next-title">The lost Architecture</h2>

          <div class="flex flex-row items-center justify-end gap-6 md:gap-16">
            <div class="loader-wrapper">
              <div class="case-loader" ref="case_loader" />
            </div>
            <!-- <nuxt-link
              tag="p"
              :to="`${nextDoc}`"
              class="text-5xl font-bold text-white"
              >Next
            </nuxt-link> -->
            <p @click="nextCase" class="next-text">Next</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkshopDoc from '@/components/card/WorkshopDoc'
import PlayButton from '@/components/utilities/PlayButton'
// import { Draggable } from 'gsap/Draggable.js'
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
// import _ from 'lodash'
import SmoothScroll from '~/mixins/SmoothScroll.js'

export default {
  mixins: [SmoothScroll],
  layout: 'case',
  components: {
    WorkshopDoc,
    PlayButton
  },
  data() {
    return {
      nextProgress: 0,
      tween: null,
      lmS: null
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
  methods: {
    nextCase() {
      this.fromToCase++
      this.$router.push(this.nextDoc + '?next=true')
    },
    loadNextCase() {
      const vm = this
      this.Gsap.to('.loader-wrapper', {
        width: '0',
        transformOrigin: 'right center',
        onStart() {
          vm.lmS.stop()
        }
      })
      this.Gsap.to('.next-case-content', {
        opacity: 0,
        y: -50,
        delay: 0.5,
        onComplete() {
          vm.nextCase()
        }
      })
    },
    initAnimations() {
      const vm = this

      this.Gsap.from('.top-case-title, .top-play-btn', {
        opacity: 0,
        y: 50,
        duration: 1
      })

      this.Gsap.from('.next_case_text', {
        scrollTrigger: {
          trigger: this.$refs.next_case,
          scrub: true,
          start: 'top bottom',
          end: 'top top'
        },
        y: -innerHeight * 0.75,
        opacity: 0,
        ease: 'none'
      })

      this.Gsap.from('.next_case_img', {
        scrollTrigger: {
          trigger: this.$refs.next_case,
          scrub: true,
          start: 'top bottom',
          end: 'top top'
        },
        y: -innerHeight * 0.5,
        ease: 'none'
      })

      this.Gsap.to('.next_case_img_layer', {
        scrollTrigger: {
          trigger: this.$refs.next_case,
          scrub: true,
          start: 'top bottom',
          end: 'top top'
        },
        opacity: 0.2,
        ease: 'none'
      })

      this.Gsap.to('.case-loader', {
        id: 'case_loader',
        scrollTrigger: {
          id: 'case_loader',
          trigger: this.$refs.next_case,
          scrub: true,
          start: 'top bottom',
          end: 'top top'
        },
        onComplete() {
          vm.loadNextCase()
        },
        right: '0%',
        transformOrigin: 'left center',
        ease: 'none'
      })
    }
  },
  mounted() {
    this.$nextTick(function () {
      // this.asscroll.onResize()
      this.initAnimations()
    })
  }
}
</script>

<style lang="postcss" scoped>
.top-section {
  @apply flex relative overflow-hidden;
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

.top-section .content .top-play-btn {
  @apply px-12 w-full flex flex-col items-center;
}

.top-section .content .top-case-title {
  @apply text-4xl font-bold font-display text-white leading-none w-full text-center mt-24;
}

@screen sm {
  .top-section .content .top-case-title {
    @apply text-6xl;
  }
}

@screen md {
  .top-section .content {
    @apply flex-row;
  }
  .top-section .content .top-play-btn {
    @apply px-16 w-2/6 items-end;
  }
  .top-section .content .top-case-title {
    @apply text-9xl w-4/6 text-left mt-0;
  }
}

@screen xl {
  .top-section .content .top-play-btn {
    @apply px-20;
  }
  .top-section .content .top-case-title {
    @apply text-11xl;
  }
}

.secondSection {
  @apply text-center my-12 p-4;
}

.secondSection .secondTitle {
  @apply text-4xl font-bold font-display leading-none;
}

@screen sm {
  .secondSection {
    @apply my-16;
  }
  .secondSection .secondTitle {
    @apply text-6xl;
  }
}
@screen md {
  .secondSection {
    @apply my-20;
  }
  .secondSection .secondTitle {
    @apply text-9xl;
  }
}
@screen xl {
  .secondSection {
    @apply my-24;
  }
  .secondSection .secondTitle {
    @apply text-11xl;
  }
}

.info-section {
  @apply grid gap-12;
  grid-template-rows: auto auto;
}

.info-section .tags {
  @apply flex flex-col max-w-full overflow-x-scroll;
}

.info-section .tags .tags-container {
  @apply flex flex-row flex-no-wrap pr-12;
}

.info-section .tags .tags-container .desc-block {
  @apply flex flex-col my-4 mx-3 flex-1 gap-y-3;
}

.info-section .desc {
}

.info-section .desc .leading-text {
  @apply text-xl font-bold leading-snug;
}

.info-section .desc .sub-text {
  @apply text-base leading-snug mt-16 text-dark-grey;
  font-feature-settings: 'liga' off;
}

.info-section .tags .desc-block .title {
  @apply text-base font-light leading-snug text-dark-grey;
}
.info-section .tags .desc-block .label {
  @apply text-sm leading-snug;
  color: #1e1e1e;
}

@screen md {
  .info-section {
    @apply grid grid-cols-4 gap-12;
  }

  .info-section .tags {
    @apply overflow-x-hidden;
  }
  .info-section .tags .tags-container {
    @apply col-span-1;
  }

  .info-section .tags .tags-container {
    @apply flex flex-col;
  }

  .info-section .tags .tags-container .desc-block {
    @apply flex flex-col mx-0;
    max-width: 100%;
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
}

.next-case-section {
  @apply flex relative mt-64 overflow-hidden;
  @apply w-full h-screen;
  @apply bg-gray-500;
}

.next-case-section .next_case_img {
  /* @apply absolute top-0 right-0 bottom-0 left-0; */
  @apply w-full min-h-full overflow-hidden;
  transform-origin: center center;
}

.next-case-section .next_case_img .next_case_img_layer {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 0.8;
}

.next-case-section .next_case_img img {
  /* @apply w-auto min-w-full min-h-full overflow-x-hidden; */
  @apply w-full min-h-full overflow-x-hidden origin-center;
  object-fit: cover;
  /* transform: scale(1.2); */
}
.next-case-section .content .next_case_text {
  transform-style: preserve-3d;
}

.next-case-section .content {
  @apply absolute top-0 right-0 bottom-0 left-0 overflow-hidden;
  @apply flex flex-col justify-end items-end pb-56 pt-5;
  padding-left: 2vmax;
  padding-right: 2vmax;
}

.next-case-section .content .next-title {
  @apply text-5xl font-bold text-white max-w-full;
}

.next-case-section .content .loader-wrapper {
  @apply flex bg-darker-grey relative;
  width: 100%;
  height: 2px;
}
.next-case-section .content .case-loader {
  @apply block bg-white;
  position: absolute;
  top: 0;
  left: 0;
  right: 100%;
  height: 2px;
  transform-style: preserve-3d;
}

.next-case-section .content .next-text {
  @apply text-3xl font-bold text-white hidden;
}

@screen md {
  .next-case-section .content {
    padding-left: 10vmax;
    padding-right: 10vmax;
  }

  .next-case-section .content .next-title {
    @apply text-7xl;
  }

  .next-case-section .content .next-text {
    @apply text-5xl inline-block;
  }
}
</style>
