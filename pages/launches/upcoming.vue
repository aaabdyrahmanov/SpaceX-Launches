<template>
  <div class="mb-6">
    <Header />
    <title-icon :title="'Upcoming'" />
    <Pagination :data="upcomingRocketsData"></Pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

import Header from "@/components/Header"
import TitleIcon from "@/components/TitleIcon"
import Pagination from "@/components/Pagination"

export default {
  components: { Header, TitleIcon, Pagination },

  computed: {
    ...mapGetters({
      upcomingRocketsData: "sources/upcomingRocketsData"
    })
  },
  async fetch({ store }) {
    await store.dispatch("sources/getUpcomingSpaceX")
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
