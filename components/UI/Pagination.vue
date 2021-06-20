<template>
  <div>
    <div v-if="data">
      <Timeline :data="paginatedData" />
    </div>
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
import Timeline from './Timeline'

export default {
  name: 'Pagination',
  components: {
    Timeline
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      pageNumber: 1,
      size: 10
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    pageCount () {
      if (this.data) {
        const l = this.data.length
        const s = this.size
        return Math.ceil(l / s)
      }
    },
    paginatedData () {
      const start = (this.pageNumber - 1) * this.size
      const end = start + this.size
      return this.data.slice(start, end)
    }
  }
}
</script>
