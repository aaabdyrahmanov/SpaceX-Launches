<template>
  <div>
    <nuxt-link to="/">
      <div class="title mt-8 text-center">
        <h1>
          {{ title }}
        </h1>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data: () => ({
    title: 'SpaceX Launches'
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
