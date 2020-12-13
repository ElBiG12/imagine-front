<template>
  <div class="push-from-header">
    <div class="ic-container">
      <div class="grid grid-cols-1">
        <div class="">
          <h1 class="sm:text-2xl md:text-6xl font-bold font-display mb-5">
            <span class="text-secondary">Collections Thématiques,</span>
            Le resumé.
          </h1>
          <p class="text-2xl font-light font-display">
            Dans le cadre du projet Imagine nous nous proposons de réfléchir à
            la meilleure manière d’exploiter l’archive du collectif Cinéma
            Mémoire. Cette archive, le produit de seize années de travail, est
            un fond riche en termes de contenu et de contenant.
          </p>
        </div>
      </div>
    </div>
    <section class="section pt-24 ic-container">
      <div
        class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-40"
      >
        <div class="">
          <p class="text-base font-regular font-display leading-7">
            Riche en termes de contenant, car il y a divers supports, les films
            documentaires réalisés dans le cadre de l’atelier de formation, des
            rushes de films inachevés, des débats filmés, des séances de
            ciné-clubs filmées, des contributions de différents experts dans
            différentes disciplines en rapport avec le cinéma du réel, qui se
            sont soldés par des écrits sous différentes formes.
          </p>
          <p class="text-base font-regular font-display leading-7 pt-6">
            Riche en termes de contenu, par les divers sujets, thématiques,
            formes et problématiques abordées à partir de l’accumulation d’un
            travail de création mené par des cinéastes débutants, accompagnés
            par des formateurs/formatrices et intervenant.e.s spécialisé.e.s.
          </p>
        </div>
        <div>
          <div>
            <p class="text-base font-regular font-display leading-7">
              Afin de rendre le contenu d'une matière encore plus lisible pour
              les uns et les autres, nous proposons de le mettre en valeur en
              créant des collections thématiques. Cette mission, qui va être
              menée de façon collaborative par des spécialistes, chacun dans son
              domaine, va permettre la création d’objets nouveaux à partir d’une
              matière déjà existante.
            </p>
            <div class="pt-16">
              <NuxtLink to="/imagine">
                <MoreButton />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="ic-container mt-24">
      <!-- <h1 class="sm:text-3xl md:text-5xl font-bold font-display">
        Nos collections thématiques
      </h1> -->
    </div>
    <div class="ic-container flex flex-col gap-y-64 mt-24">
      <Collectioncard />
      <Collectioncard />
    </div>
    <div class="ic-container mt-24">
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-24 mt-64">
        <div class="">
          <h1 class="sm:text-3xl md:text-3xl font-bold font-display mb-8">
            Nos objectifs a long termes
          </h1>
          <p class="text-base font-regular font-display leading-7">
            L’objectif à long terme, consiste à mettre à disposition de
            différents publics ces travaux, susceptibles de les aider dans leur
            réflexion. D’autres collectifs et organismes vont également
            exploiter cette matière et suivre ce modèle. Cela pourrait être des
            festivals qui proposent des ateliers pendant l’événement ou hors les
            murs, des centres de recherche coutumiers d’effectuer des travaux
            sur les mêmes thématiques.
            <br />
            <br />
            Cette matière peut également permettre la création de passerelles et
            donc des synergies avec certains de ces collectifs, afin de mener
            collectivement des réflexions autour de l’image, son impact et
            comment la créer. Cette réflexion Projet Imagine 5 commune, pourrait
            aboutir à d’autres objets exploitables par les mêmes acteurs ou
            d’autres, de par le monde.
            <br />
            <br />
            La collection thématique pourra servir de support pédagogique lors
            des futurs ateliers de création de films documentaires ou
            d’éducation à l’image organisés par Cinéma Mémoire ou d’autres
            collectifs Ce travail innovant et créatif sera modélisé sous forme
            de guide pour capitaliser les méthodes mises en place et refléter le
            processus qui a été mis en place pour permettre cette production.
          </p>
        </div>
        <div class="">
          <h1 class="sm:text-3xl md:text-3xl font-bold font-display mb-8">
            Nos objectifs a court terme
          </h1>
          <p class="text-base font-regular font-display leading-7 mb-8">
            L’objectif à court terme, consiste à créer une collection thématique
            sous forme d’un objet image et texte. Cet objet sera mis en ligne
            sur la plate-forme numérique IMAGINE de Cinéma &amp; Mémoire.
            <br />
            <br />
            Il s’agit d’exposer et de dévoiler le raisonnement de ce collectif
            autour de la place de l’image dans la société et le rôle qu’elle
            peut jouer dans sa transformation et son évolution. Il s’agit
            également de montrer le processus de création, pas uniquement sur le
            plan technique, mais également sur le plan artistique.
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
  mounted() {
  }
}
</script>

<style lang="postcss" scoped>
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
