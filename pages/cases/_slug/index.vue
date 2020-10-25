<template>
  <div>
    <div class="top-section">
      <img src="/img/case-study-1.jpg" alt="case study" srcset="" />
      <div class="content">
        <div class="px-24">PlayBtn</div>
        <h1 class="text-11xl font-bold font-display text-white leading-none">
          J’ai habité L’absence deux fois
        </h1>
      </div>
    </div>
    <div class="ic-container text-center my-24 p-4">
      <h1 class="text-11xl font-bold font-display leading-none">
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

    <div class="next-case-section">
      <img src="/img/case-study-2.jpg" alt="case study" srcset="" />
      <div class="content">
        <div class="flex flex-col">
          <h2 class="text-7xl font-bold text-white">The lost Architecture</h2>

          <div class="flex flex-row items-center gap-6 md:gap-16">
            <hr class="case-loader" />
            <p class="text-5xl font-bold text-white">Next</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkshopDoc from '@/components/card/WorkshopDoc'
export default {
  layout: 'nofooter',
  components: {
    WorkshopDoc
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
  @apply flex relative mt-64;
  @apply w-full h-screen;
  @apply bg-gray-500;
}

.next-case-section img {
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
  @apply block w-full h-0 mr-auto bg-white;
  border: 2px solid #ffffff;
}
</style>
