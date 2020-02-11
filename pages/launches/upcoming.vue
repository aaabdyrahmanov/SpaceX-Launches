<template>
  <div>
    <Header />
    <div class="title-icon">
      <v-alert
        color="rgb(87, 99, 102)"
        elevation="20"
        class="mt-8"
        dark
        icon="mdi-firework"
        dense
      >
        <span class="font-italic font-weight-thin">Upcoming</span>
      </v-alert>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

import Header from "../../components/Header"

export default {
  components: { Header },
  data: () => ({
    bottomNav: "Next",
    recentLaunchDate: "",
    remainingTime: []
  }),
  computed: {
    ...mapState({
      latestSpaceX: state => state.sources.latestSpaceX,
      nextSpaceX: state => state.sources.nextSpaceX
    })
  },
  async fetch({ store }) {
    await store.dispatch("sources/getLaunchesSpaceX")
  }
}
</script>

<style scoped>
.title-icon {
  width: 185px;
  letter-spacing: 5px;
  margin-left: 44%;
  transform: rotate(-7deg);
}
</style>
