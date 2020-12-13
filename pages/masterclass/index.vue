<template>
  <div class="push-from-header">
    <div class="ic-container">
      <div class="grid grid-cols-1">
        <div class="">
          <h1 class="sm:text-3xl md:text-6xl font-bold font-display mb-5">
            <span class="text-secondary">MasterClass</span>
            Le resumé.
          </h1>
          <p class="text-2xl font-light font-display">
            Le projet Imagine propose un parcours de trois masters class qui
            permettront de développer réflexion et connaissance dans le domaine
            vaste qui est celui du cinéma du réel.
            <br />
            <br />
            Au cœur de ce parcours l’expérience et les pratiques des
            professionnels du cinéma documentaire (réalisateurs/réalisatrices,
            techniciens/techniciennes, critiques). Ces moments seront dédiés à
            la rencontre, la réflexion, le partage d’expérience et la maturation
            de nouveaux projets de films documentaire en cours d’écriture.
          </p>
        </div>
      </div>
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 gap-16 hero overflow-hidden mt-24"
      >
        <div class="grid grid-cols-1 place-items-center">
          <div class="w-3/4">
            <h2 class="sm:text-2xl md:text-8xl font-bold sm:pt-6 md:pt-6">
              02.2021
            </h2>
            <h2 class="sm:text-xl md:text-4xl font-bold mt-8">
              The MasterClass
            </h2>
            <h2 class="sm:text-base md:text-base font-bold">
              Inscriptions bientôt ouvertes
            </h2>
            <p class="discreption mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi inventore vitae hic earum provident.
            </p>
            <div class="pt-8">
              <NuxtLink to="/imagine">
                <MoreButton />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="grid grid-flow-col gap-4 overflow-hidden">
          <div
            class="grid grid-flow-row gap-4"
            data-scroll
            data-scroll-speed="3"
            data-scroll-position="top"
          >
            <div class="master-picture">
              <img
                class="img-fit"
                src="/img/Cinematography-fil-camera.jpeg"
                alt=""
              />
            </div>

            <div class="master-picture">
              <img class="img-fit" src="/img/microphone-shot.jpeg" alt="" />
            </div>
            <div class="master-picture">
              <img class="img-fit" src="/img/masterclass-city.jpeg" alt="" />
            </div>
            <div class="master-picture">
              <img class="img-fit" src="/img/Documentary-shot.jpeg" alt="" />
            </div>
          </div>
          <div
            class="grid grid-flow-row gap-4"
            data-scroll
            data-scroll-speed="-4"
          >
            <div class="master-picture">
              <img class="img-fit" src="/img/cinema-lens.jpeg" alt="" />
            </div>
            <div class="master-picture">
              <img class="img-fit" src="/img/Documentary-shot.jpeg" alt="" />
            </div>
            <div class="master-picture">
              <img class="img-fit" src="/img/Documentary-shot.jpeg" alt="" />
            </div>
            <div class="master-picture">
              <img class="img-fit" src="/img/Documentary-shot.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ic-container mt-48">
      <h1 class="sm:text-3xl md:text-5xl font-bold font-display">
        Nos MasterClasses
      </h1>
    </div>
    <div class="ic-container flex flex-col gap-y-64 mt-24">
      <Collectioncard />
      <Collectioncard />
    </div>
    <div class="ic-container mt-24">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-24 mt-64">
        <div class="">
          <h1 class="sm:text-3xl md:text-3xl font-bold font-display mb-8">
            Remarques*
          </h1>
          <p class="text-base font-regular font-display leading-7">
            Le but de ce parcours n’est pas l’écriture des films que les
            candidat portent, mais de vivre une expérience qui permet
            l’émergence de projets de films. Nous souhaitons offrir un espace de
            liberté de réflexion et de création. Pour les personnes qui
            souhaitent apprendre à écrire une note d’intention et un synopsis,
            ce cadre ne conviendra pas.
          </p>
          <br />
          <br />
          <p class="text-base font-regular font-display leading-7 mb-8">
            Pour l’inscription à ce parcours nous mettrons en ligne un
            formulaire de candidature à remplir.
            <br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import gsap from 'gsap'
import SmoothScroll from '~/mixins/SmoothScroll.js'
export default {
  mixins: [SmoothScroll],
  mounted() {}
}
</script>

<style lang="postcss" scoped>
.img-fit {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.pictures-flow {
  background-color: bisque;
}
.master-picture {
  height: 50vh;
  width: 100%;
  background-color: burlywood;
  overflow: hidden;
}
.hero {
  width: 100%;
  height: 80vh;
  background-color: #efd5d4;
}
.esp {
  @apply text-xl font-medium leading-none;
  padding-left: 10px;
  color: #f39200;
}
.parent-rect {
  width: 100%;
  display: flex;
}
.child-rect {
  opacity: 0%;
  width: 0%;
  height: 2px;
  background-color: #f39200;
  align-self: center;
}
.discreption {
  overflow: hidden;
  color: black;
}
.head-title-block {
  @apply w-full flex flex-col mx-auto;
}

@screen lg {
  .head-title-block {
    @apply w-8/12;
  }
}

.card-title {
  position: absolute;
  @apply text-3xl font-extrabold leading-none mt-4;
  transform: translateX(-10vw);
  color: black;
  text-shadow: 0px 4px 10px rgba(238, 238, 238, 0.25);
}

.card-title-rev {
  position: absolute;
  @apply text-3xl font-extrabold leading-none mt-4;
  transform: translateX(200px);
  z-index: 10;
  text-shadow: 0px 4px 10px rgba(238, 238, 238, 0.25);
}
.title-cn {
  z-index: 100;
}

.marge {
  margin-top: 6rem;
}

@media only screen and (max-width: 600px) {
  .card-title {
    position: absolute;
    @apply text-2xl font-extrabold leading-none mt-4;
    transform: translateX(0);
    color: black;
  }
  .card-title-rev {
    position: absolute;
    @apply text-3xl font-extrabold leading-none mt-4;
    transform: translateX(0);
    text-align: left;
    z-index: 10;
  }
  .marge {
    margin-top: 0;
  }
}
</style>
