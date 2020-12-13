<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-16 card cursor-pointer">
    <div class="" data-scroll data-scroll-speed="1">
      <img
        class="img-wrapper"
        src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxtaW5pbWFsaXN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt="title"
      />
    </div>
    <div class="marge">
      <div data-scroll data-scroll-speed="3">
        <h2 class="card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p class="discreption mt-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          inventore vitae hic earum provident.
        </p>
      </div>
      <!-- <div class="pt-10" data-scroll data-scroll-speed="3">
      </div> -->
      <div
        class="grid grid-cols-3 gap-2 mt-10"
        data-scroll
        data-scroll-speed="2"
      >
        <div class="parent-rect col-span-1">
          <div class="child-rect"></div>
        </div>
        <div class="col-span-2">
          <span class="esp"> En savoir plus </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="postcss" scoped>
.img-wrapper {
  width: 100%;
  height: auto;
  transition: all 0.3s ease-in-out;
}
.parent-rect {
  width: 100%;
  display: flex;
}

.discreption {
  overflow: hidden;
  color: black;
}
.child-rect {
  opacity: 0%;
  width: 0%;
  height: 2px;
  background-color: black;
  align-self: center;
}
.card:hover .child-rect {
  opacity: 100%;
  width: 80%;
  height: 2px;
  background-color: black;
  align-self: center;
  -webkit-transition: opacity 0.5s ease-out;
  -webkit-transition: width 0.5s ease-out;
}
.esp {
  @apply text-xl font-light leading-none;
  padding-left: 10px;
  color: black;
  opacity: 0%;
  transition: opacity 0.5s ease-in-out;
  letter-spacing: 10px;
  transition: letter-spacing 0.5s;
}
.card:hover .esp {
  opacity: 100%;
  letter-spacing: 3px;
}

@-webkit-keyframes in {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@-webkit-keyframes out {
  0% {
    -webkit-transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}

.card:hover .img-wrapper {
  transform: scale(0.98);
}
.card-title {
  position: relative;
  background: #f1f1f1 !important;
  @apply text-6xl font-medium leading-none mt-4;
  /* transform: translateX(-10vw); */
  color: black;
  text-shadow: 0px 4px 10px rgba(238, 238, 238, 0.25);
}
.marge {
  margin-top: 4rem;
}

@media only screen and (max-width: 1000px) {
  .card-title {
    position: relative;
    @apply text-3xl font-extrabold leading-none mt-4;
    /* transform: translateX(0); */
    color: black;
  }
  .marge {
    margin-top: 0;
  }
}
</style>
