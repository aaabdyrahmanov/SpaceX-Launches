<template>
  <div class="detail_option mx-auto mt-6">
    <nuxt-link
      v-for="(heading, index) in launchHeadings"
      :key="index"
      :to="heading.path"
    >
      <v-btn
        class="ma-2"
        outlined
        rounded
        color="indigo"
      >
        {{ heading.name }}
      </v-btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar',
  data: () => ({
    launchHeadings: [
      {
        name: 'Past Launches',
        path: '/launches/past'
      },
      {
        name: 'Upcoming Launches',
        path: '/launches/upcoming'
      }
    ]
  })
}
</script>

<style scoped>
.detail_option {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
