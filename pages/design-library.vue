<template>
  <div class="ic-container">
    <div class="flex flex-col gap-y-8 mb-24">
      <div class="flex flex-col">
        <h1 class="text-4xl font-bold">Colors (Custom)</h1>
        <hr />
      </div>
      <div class="flex p-2 flex-row gap-y-2 gap-x-2 bg-secondary">
        <p class="font-bold">secondary</p>
      </div>
      <div class="flex p-2 text-white flex-row gap-y-2 gap-x-2 bg-dark">
        <p class="font-bold">dark</p>
      </div>
      <div class="flex p-2 text-white flex-row gap-y-2 gap-x-2 bg-dark-grey">
        <p class="font-bold">dark-grey</p>
      </div>
      <div class="flex p-2 flex-row gap-y-2 gap-x-2 bg-light">
        <p class="font-bold">light</p>
      </div>
      <div class="flex p-2 flex-row gap-y-2 gap-x-2 bg-light-grey">
        <p class="font-bold">light-grey</p>
      </div>
      <div class="flex p-2 flex-row gap-y-2 gap-x-2 bg-alt-light-grey">
        <p class="font-bold">alt-light-grey</p>
      </div>
      <div class="flex p-2 flex-row gap-y-2 gap-x-2 bg-danger">
        <p class="font-bold">danger</p>
      </div>
    </div>
    <div class="flex flex-col gap-y-8">
      <div class="flex flex-col">
        <h1 class="text-4xl font-bold">Typography</h1>
        <hr />
      </div>
      <div class="flex flex-col gap-y-2">
        <div>
          <code lang="css"> .text-xs </code>
          <p class="text-xs">Text XS</p>
        </div>
        <div>
          <code lang="css"> .text-sm </code>
          <p class="text-sm">Text SM</p>
        </div>
        <div>
          <code lang="css"> .text-base </code>
          <p class="text-base">Text BASE</p>
        </div>
        <div>
          <code lang="css"> .text-lg </code>
          <p class="text-lg">Text LG</p>
        </div>
        <div>
          <code lang="css"> .text-xl </code>
          <p class="text-xl">Text XL</p>
        </div>
        <div>
          <code lang="css"> .text-2xl </code>
          <p class="text-2xl">Text 2XL</p>
        </div>
        <div>
          <code lang="css"> .text-2xl </code>
          <p class="text-2xl">Text 2XL</p>
        </div>
        <div>
          <code lang="css"> .text-2xl </code>
          <p class="text-2xl">Text 2XL</p>
        </div>
        <div>
          <code lang="css"> .text-3xl </code>
          <p class="text-3xl">Text 3XL</p>
        </div>
        <div>
          <code lang="css"> .text-4xl </code>
          <p class="text-4xl">Text 4XL</p>
        </div>
        <div>
          <code lang="css"> .text-5xl </code>
          <p class="text-5xl">Text 5XL</p>
        </div>
        <div>
          <code lang="css"> .text-6xl </code>
          <p class="text-6xl">Text 6XL</p>
        </div>
        <div>
          <code lang="css"> .text-7xl </code>
          <p class="text-7xl">Text 7XL</p>
        </div>
        <div>
          <code lang="css"> .text-8-1xl </code>
          <p class="text-8-1xl">Text 8-1XL</p>
        </div>
        <div>
          <code lang="css"> .text-8xl </code>
          <p class="text-8xl">Text 8XL</p>
        </div>
        <div>
          <code lang="css"> .text-9xl </code>
          <p class="text-9xl">Text 9XL</p>
        </div>
        <div>
          <code lang="css"> .text-10xl </code>
          <p class="text-10xl">Text 10XL</p>
        </div>
        <div>
          <code lang="css"> .text-11xl </code>
          <p class="text-11xl">Text 11XL</p>
        </div>
        <div>
          <code lang="css"> .text-12xl </code>
          <p class="text-12xl">Text 12XL</p>
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <p>
          <strong>P# </strong>Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Consequuntur doloribus eveniet officia perferendis
          et accusamus. Illo ut laborum amet autem eaque, quia qui, deleniti
          quisquam voluptas dolorem corporis, aliquid quasi.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-y-8 mt-24">
      <div class="flex flex-col">
        <h1 class="text-4xl font-bold">Buttons</h1>
        <hr />
      </div>
      <div class="flex flex-row gap-y-2 gap-x-2">
        <button class="btn">Default Button</button>
        <button class="btn btn-alt">Alt Button</button>
      </div>
    </div>
    <div class="flex flex-col gap-y-8 mt-24">
      <div class="flex flex-col">
        <h1 class="text-4xl font-bold">input</h1>
        <hr />
      </div>
      <div class="flex flex-row gap-y-2 gap-x-2">
        <input
          id="default"
          type="text"
          name="default"
          placeholder="Enter your name"
        />
      </div>
      <div class="flex flex-row gap-y-2 gap-x-2">
        <div class="ic-checkbox">
          <input type="checkbox" id="filter1" name="filter1" value="Bike" />
          <label for="filter1">Aliquet nisl.</label><br />
        </div>
        <div class="ic-checkbox">
          <input type="checkbox" id="filter2" name="filter2" value="Bike" />
          <label for="filter2">Tellus nunc.</label><br />
        </div>
        <div class="ic-checkbox">
          <input type="checkbox" id="filter3" name="filter3" value="Bike" />
          <label for="filter3">Auctor.</label><br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmoothScroll from '~/mixins/SmoothScroll.js'

export default {
  mixins: [SmoothScroll]
}
</script>

<style>
</style>
