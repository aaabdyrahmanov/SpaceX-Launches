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

import Header from '@/components/Navigation/Header'
import TitleIcon from '@/components/UI/TitleIcon'
import Pagination from '@/components/UI/Pagination'

export default {
  components: {
    Header, TitleIcon, Pagination
  },
  async fetch ({ store }) {
    await store.dispatch('sources/fetchLaunched')
  },
  data () {
    return {
      pageNumber: 1,
      size: 10
    }
  },
  computed: {
    ...mapGetters({
      launchedRocketsData: 'sources/getLaunchedData'
    })
  }
}
</script>
