<template>
  <div class="mb-6">
    <Header />
    <title-icon
      :title="'Past'"
    />
    <div
      v-if="launchedRocketsData"
    >
      <Pagination
        :data="launchedRocketsData"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Header from '@/components/Header'
import TitleIcon from '@/components/TitleIcon'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Header, TitleIcon, Pagination
  },
  data () {
    return {
      pageNumber: 1,
      size: 10
    }
  },
  async fetch ({ store }) {
    await store.dispatch('sources/getLaunchesSpaceX')
  },
  computed: {
    ...mapGetters({
      launchedRocketsData: 'sources/launchedRocketsData'
    })
  }
}
</script>
