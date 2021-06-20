<template>
  <div class="mx-auto">
    <Header />
    <v-row class="mt-6">
      <v-col>
        <v-bottom-navigation
          v-model="bottomNav"
          width="180px"
          class="mx-auto"
        >
          <v-btn value="Next">
            <v-card-text
              v-mutate="() => onMutate('Next')"
            >
              <span>Next </span>
            </v-card-text>
          </v-btn>
          <v-btn
            value="Past"
            @click="executePast()"
          >
            <v-card-text
              v-mutate="()=> onMutate('Past')"
            >
              <span> Past </span>
            </v-card-text>
          </v-btn>
        </v-bottom-navigation>
      </v-col>
    </v-row>
    <div v-if="bottomNavBoolean">
      <div v-if="nextSpaceX">
        <base-next
          :data="nextSpaceX"
          :duration="remainingTime"
        />
      </div>
    </div>
    <div v-else>
      <base-latest
        :duration="recentLaunchDate"
        :data="latestSpaceX"
      />
    </div>
    <div class="detail_option mx-auto mt-6">
      <nuxt-link :to="'/launches/past'">
        <v-btn
          class="ma-2"
          outlined
          rounded
          color="indigo"
        >
          Past Launches
        </v-btn>
      </nuxt-link>
      <nuxt-link :to="'/launches/upcoming'">
        <v-btn
          class="ma-2"
          outlined
          rounded
          color="indigo"
        >
          Upcoming Launches
        </v-btn>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import Moment from 'moment/moment'
import 'moment-duration-format'

import BaseLatest from '@/components/BaseLatest'
import BaseNext from '@/components/BaseNext'
import Header from '@/components/Navigation/Header'

export default {
  components: {
    Header,
    BaseNext,
    BaseLatest
  },
  async fetch ({ store }) {
    await store.dispatch('sources/fetchLatest')
    await store.dispatch('sources/fetchNext')
  },
  data: () => ({
    bottomNav: 'Next',
    recentLaunchDate: '',
    remainingTime: []
  }),
  computed: {
    ...mapState({
      latestSpaceX: state => state.sources.latestSpaceX,
      nextSpaceX: state => state.sources.nextSpaceX
    }),
    ...mapGetters({
      nextLaunchDate: 'sources/getNextLaunchDate'
    }),
    bottomNavBoolean () {
      return this.bottomNav === 'Next'
    }
  },
  mounted () {
    this.parseDate()
  },
  beforeDestroy () {
    clearInterval(this.parseDate())
  },
  methods: {
    parseDate () {
      return setInterval(() => {
        const nextLaunchDate = new Moment(this.nextLaunchDate)
        const currentDate = new Moment(new Date())

        const milliSeconds = Moment.duration(nextLaunchDate.diff(currentDate), 'milliseconds')
        const formatted = Moment.duration(milliSeconds, 'hours').format(
          'D H mm ss'
        )
        this.remainingTime = formatted.split(' ').reverse()
      }, 1000)
    },
    executePast () {
      const a = Moment(this.latestSpaceX.date_utc)
      this.recentLaunchDate = a.format('Do MMM YYYY, HH:mm:ss (UTCZ)')
    },
    onMutate (value) {
      this.bottomNav = value
    }
  },
  head: () => ({
    title: 'SpaceX Launches',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Recent and upcoming launches of SpaceX'
      }
    ]
  })
}
</script>

<style scoped>
.detail_option {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
