<template>
  <div id="app">
    <v-app id="inspire">
      <div class="title mt-8 text-center">
        <h1>
          SpaceX Launches
        </h1>
      </div>
      <nuxt />
      <v-footer fixed class="text-center">
        <v-spacer>
          Developed by Atamyrat Abdyrahmanov
        </v-spacer>
      </v-footer>
    </v-app>
  </div>
</template>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 140;
  font-size: 200px;
  text-align: center;
  color: #35495e;
}
</style>
