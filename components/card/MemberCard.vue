<template>
  <div class="mb-container">
    <img
      class="mb-picture z-0"
      src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <span class="text-white p-6 z-10">
      <h2 class="text-xl font-bold">Ali Benabbes</h2>
      <h3 class="font-regular text-sm pb-5">Cinéaste et producteur</h3>
      <p class="text-sm font-light">Membre du comité de pilotage et monteur</p>
    </span>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.mb-container {
  width: 320px;
  height: 405px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: burlywood;
}
.mb-picture {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center center;
}
@media only screen and (max-width: 600px) {
  .mb-container {
    width: 220px;
    height: 305px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: burlywood;
  }
}
</style>
