<template>
  <div>
    <Header />
    <title-icon :title="'Upcoming'" />
  </div>
</template>

<script>
import { mapState } from "vuex"

import Header from "../../components/Header"
import TitleIcon from "../../components/TitleIcon"

export default {
  components: { Header, TitleIcon },
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
