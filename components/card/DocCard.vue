<template>
  <div class="card-container">
    <img
      class="doc-picture z-0"
      src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      alt=""
    />
    <span class="text-white p-10 z-10">
      <h2 class="text-2xl font-bold">A movie made by Imagine </h2>
      <p class="font-light">This is the descreption for the imagine & memoire movies</p>
    </span>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.card-container {
  width: 435px;
  height: 260px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: burlywood;
}
.doc-picture {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center center;
}
</style>
