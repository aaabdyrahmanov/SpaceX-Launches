<template>
  <div>
    <Header />
    <title-icon :title="'Past'" />
    <div v-if="launchedRocketsData">
      <Timeline :data="paginatedData" />
    </div>
    <v-pagination
      v-model="pageNumber"
      :length="pageCount - 1"
      class="mt-5 mb-5"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>
<script>
import { mapGetters } from "vuex"

import Header from "../../components/Header"
import TitleIcon from "../../components/TitleIcon"
import Timeline from "../../components/Timeline"

export default {
  components: { Header, TitleIcon, Timeline },
  data() {
    return {
      pageNumber: 1,
      size: 10
    }
  },
  computed: {
    ...mapGetters({
      launchedRocketsData: "sources/launchedRocketsData"
    }),
    // eslint-disable-next-line vue/return-in-computed-property
    pageCount() {
      if (this.launchedRocketsData) {
        const l = this.launchedRocketsData.length
        const s = this.size
        return Math.ceil(l / s)
      }
    },
    paginatedData() {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.launchedRocketsData.slice(start, end)
    }
  },
  async fetch({ store }) {
    await store.dispatch("sources/getLaunchesSpaceX")
  },
  methods: {
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    }
  }
}
</script>
