<template>
  <div class="mx-auto">
    <Header />
    <v-row class="mt-6">
      <v-col>
        <v-bottom-navigation v-model="bottomNav" width="180px" class="mx-auto">
          <v-btn value="Next">
            <v-card-text v-mutate="() => onMutate('Next')">
              <span>Next</span>
            </v-card-text>
          </v-btn>
          <v-btn @click="executePast()" value="Past">
            <v-card-text v-mutate="() => onMutate('Past')">
              <span>Past</span>
            </v-card-text>
          </v-btn>
        </v-bottom-navigation>
      </v-col>
    </v-row>
    <div v-if="bottomNavBoolean">
      <div v-if="nextSpaceX">
        <base-next :data="nextSpaceX" :duration="remainingTime"></base-next>
      </div>
    </div>
    <div v-else>
      <base-latest
        :duration="recentLaunchDate"
        :data="latestSpaceX"
      ></base-latest>
    </div>
    <div class="click_options mx-auto mt-6">
      <nuxt-link :to="'/launches/upcoming'">
        <v-btn class="ma-2" outlined rounded color="indigo">
          Click to See Upcoming Launches
        </v-btn>
      </nuxt-link>
      <nuxt-link :to="'/launches/past'">
        <v-btn class="ma-2" outlined rounded color="indigo">
          Click to See Past Launches
        </v-btn></nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"

import Moment from "moment/moment"
import "moment-duration-format"

import BaseLatest from "@/components/BaseLatest"
import BaseNext from "@/components/BaseNext"
import Header from "@/components/Header"

export default {
  components: {
    Header,
    BaseNext,
    BaseLatest
  },
  data: () => ({
    bottomNav: "Next",
    recentLaunchDate: "",
    remainingTime: []
  }),
  head: () => ({
    title: "SpaceX Launches",
    meta: [
      {
        hid: `description`,
        name: "description",
        content: "Recent and upcoming launches of SpaceX"
      }
    ]
  }),
  computed: {
    ...mapState({
      latestSpaceX: state => state.sources.latestSpaceX,
      nextSpaceX: state => state.sources.nextSpaceX
    }),
    ...mapGetters({
      nextLaunchDate: "sources/nextLaunchDate"
    }),
    bottomNavBoolean() {
      if (this.bottomNav === "Next") {
        return true
      }
      return false
    }
  },
  async fetch({ store }) {
    await store.dispatch("sources/getLatestSpaceX")
    await store.dispatch("sources/getNextSpaceX")
  },
  mounted() {
    this.parseDate()
  },
  methods: {
    parseDate() {
      setInterval(() => {
        const x = new Moment(this.nextLaunchDate)
        const y = new Moment(new Date())
        const milliSeconds = Moment.duration(x.diff(y), "milliseconds")
        const formatted = Moment.duration(milliSeconds, "hours").format(
          "D H mm ss"
        )
        const resultDate = formatted.split(" ")
        this.remainingTime = resultDate.reverse()
      }, 1000)
    },
    getTimePrevious() {
      if (this.latestSpaceX) {
        const s = this.latestSpaceX.launch_date_utc
        const a = Moment(s)
        this.recentLaunchDate = a.format("Do MMM YYYY, HH:mm:ss (UTCZ)")
      }
    },
    executePast() {
      if (!this.recentLaunchDate) {
        this.getTimePrevious()
      }
    },
    onMutate(value) {
      this.bottomNav = value
    }
  }
}
</script>

<style scoped>
.click_options {
  display: flex;
  flex-direction: row;
}
@media (max-width: 639px) {
  .click_options {
    display: flex;
    text-align: center;
    flex-direction: column;
  }
}
</style>
