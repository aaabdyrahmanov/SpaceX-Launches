<template>
  <div>
    <Header />
    <title-icon :title="'Past'" />
    <div v-if="launchedRocketsData">
      <Timeline :data="launchedRocketsData" />
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex"

import Header from "../../components/Header"
import TitleIcon from "../../components/TitleIcon"
import Timeline from "../../components/Timeline"

export default {
  components: { Header, TitleIcon, Timeline },
  data: () => ({
    allRockets: 32
  }),
  computed: {
    ...mapState({
      launchedRockets: state => state.sources.launchedRockets
    }),
    ...mapGetters({
      launchedRocketsData: "sources/launchedRocketsData"
    })
  },
  async fetch({ store }) {
    await store.dispatch("sources/getLaunchesSpaceX")
  }
}
</script>
