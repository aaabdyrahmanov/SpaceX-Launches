<template>
  <div class="mb-6">
    <title-icon
      :title="'Upcoming'"
    />
    <Timeline
      :data="paginatedData"
    />
    <v-pagination
      v-model="pageNumber"
      :length="pageCount"
      class="mt-5 mb-6"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import TitleIcon from '@/components/UI/TitleIcon'
import Timeline from '@/components/UI/Timeline'

export default {
  components: {
    TitleIcon,
    Timeline
  },
  async fetch ({ store }) {
    await store.dispatch('sources/fetchUpcoming')
  },
  data () {
    return {
      pageNumber: 1,
      size: 10
    }
  },
  computed: {
    ...mapGetters({
      data: 'sources/getUpcomingData'
    }),
    pageCount () {
      return Math.ceil(this.data.length / this.size)
    },
    paginatedData () {
      const start = (this.pageNumber - 1) * this.size
      const end = start + this.size

      return this.data.slice(start, end)
    }
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
