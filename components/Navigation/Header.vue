<template>
  <div>
    <nuxt-link to="/">
      <div class="title mt-8 text-center">
        <h1>
          SpaceX Launches
        </h1>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    data: {
      type: Object,
      required: false
    },
    duration: {
      type: Array,
      required: false
    }
  },
  data: () => ({
    names: ['Seconds', 'Minutes', 'Hours', 'Days']
  })
}
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 140;
  font-size: 200px;
  letter-spacing: 5px;
  text-align: center;
  color: #35495e;
  text-decoration: none;
}
</style>
