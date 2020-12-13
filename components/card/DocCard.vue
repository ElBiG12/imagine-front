<template>
  <nuxt-link :to="'/cases/' + index" class="card-container">
    <img
      v-shared-element:[index]="{ restrictToViewport: true }"
      class="doc-picture z-0"
      :src="item.img"
      alt=""
    >
    <span class="text-white p-10 z-10">
      <h2 class="text-2xl font-bold" v-text="item.title" />
      <p class="font-light" v-text="item.short_desc" />
    </span>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    index: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  mounted() {}
}
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
  cursor: pointer;
}
.doc-picture {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center center;
}
</style>
