<template>
  <div class="">
    <div class="actu-header">
      <img src="/actus/act-1.jpg" alt="actu" />
    </div>
    <div class="ic-container">
      <h1 class="act-title">Planning your next documentary</h1>
    </div>

    <div class="ic-container">
      <div id="info-section" class="info-section">
        <div class="desc">
          <h2 class="leading-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien enim
            semper.
          </h2>
          <p class="sub-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            venenatis, fames eget bibendum aliquam et interdum porttitor.
            Convallis aenean amet orci purus. Parturient et in hac tempus,
            semper consequat, semper et. In elit porta suspendisse donec nisl
            blandit in est nulla. Vitae commodo faucibus dolor vulputate enim
            sagittis.
            <br />
            <br />
            Commodo porttitor felis, pellentesque suscipit. Cras non sed
            tristique pellentesque cras eget placerat. Velit amet placerat amet
            est sed tortor, eu. A in mauris tempor in. Lobortis auctor semper
            aliquam cursus in tortor.
            <br />
            <br />
            In diam auctor lectus enim urna, et. Donec turpis dolor scelerisque
            egestas vitae tortor aenean in sed. Eu at vestibulum magna aenean
            felis. Semper at sed duis velit velit quis.
          </p>
        </div>
        <div id="tags" class="tags">
          <hr class="mt-5 w-full" />
          <div id="tags-container" class="tags-container">
            <div class="desc-block">
              <p class="title">Auteur</p>
              <p class="label">John Doe</p>
            </div>
            <div class="desc-block">
              <p class="title">Date</p>
              <p class="label">2020</p>
            </div>
            <div class="desc-block">
              <p class="title">Theme</p>
              <p class="label">Social endever</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ic-container content-block">
      <img src="/actus/actu-media-1.jpg" alt="actu-1" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget venenatis,
        fames eget bibendum aliquam et interdum porttitor. Convallis aenean amet
        orci purus. Parturient et in hac tempus, semper consequat, semper et. In
        elit porta suspendisse donec nisl blandit in est nulla. Vitae commodo
        faucibus dolor vulputate enim sagittis.
        <br />
        <br />
        Commodo porttitor felis, pellentesque suscipit. Cras non sed tristique
        pellentesque cras eget placerat. Velit amet placerat amet est sed
        tortor, eu. A in mauris tempor in. Lobortis auctor semper aliquam cursus
        in tortor.
        <br />
        <br />
        In diam auctor lectus enim urna, et. Donec turpis dolor scelerisque
        egestas vitae tortor aenean in sed. Eu at vestibulum magna aenean felis.
        Semper at sed duis velit velit quis.
      </p>
    </div>

    <MorePost class="ic-container my-48" withMoreButton />
  </div>
</template>

<script>
import MorePost from '@/components/partials/MorePost'
import SmoothScroll from '~/mixins/SmoothScroll.js'

export default {
  layout: 'headerWhite',
  mixins: [SmoothScroll],
  components: {
    MorePost
  }
}
</script>

<style lang="postcss" scoped>
.actu-header {
  @apply w-full h-auto;
}
.actu-header img {
  @apply w-full;
}

.act-title {
  @apply text-9xl font-bold mt-24 mb-16 w-full leading-none font-display;
}

.content-block {
  @apply flex flex-col gap-y-24 text-base;
}

.content-block img {
  @apply my-12 w-full h-auto;
}

.more-news-block {
  @apply grid grid-cols-1 gap-x-24 px-0;
}

.more-news-block .card-col-container {
  @apply flex flex-col gap-y-16;
}

@screen sm {
  .more-news-block {
    @apply grid-cols-2 gap-x-16;
  }
}

@screen md {
  .more-news-block {
    @apply grid-cols-2 gap-x-24;
  }
}

@screen lg {
  .act-title {
    @apply w-8/12;
  }

  .content-block {
    @apply text-lg;
  }

  .more-news-block {
    @apply grid gap-x-32;
  }

  .more-news-block .card-col-container {
    @apply flex flex-col gap-y-24;
  }
}

@screen xl {
  .more-news-block {
    @apply grid gap-x-64;
  }

  .more-news-block .card-col-container {
    @apply flex flex-col gap-y-32;
  }
}

/* Info section */

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
    @apply text-4xl font-bold leading-snug;
  }

  .info-section .desc .sub-text {
    @apply text-lg leading-snug mt-16 text-dark-grey;
    font-feature-settings: 'liga' off;
  }
}
</style>
