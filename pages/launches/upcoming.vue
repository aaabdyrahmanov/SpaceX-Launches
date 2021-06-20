<template>
  <div class="mb-6">
    <Header />
    <title-icon :title="'Upcoming'" />
    <Pagination :data="upcomingRocketsData" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Header from '@/components/Navigation/Header'
import TitleIcon from '@/components/UI/TitleIcon'
import Pagination from '@/components/UI/Pagination'

export default {
  components: {
    Header, TitleIcon, Pagination
  },
  async fetch ({ store }) {
    await store.dispatch('sources/fetchUpcoming')
  },
  computed: {
    ...mapGetters({
      upcomingRocketsData: 'sources/getUpcomingData'
    })
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
