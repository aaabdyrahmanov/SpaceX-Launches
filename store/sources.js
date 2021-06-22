const mutations = {
  SET_LAUNCHED: 'setLaunched',
  SET_UPCOMING: 'setUpcoming',
  SET_LATEST: 'setLatest',
  SET_NEXT: 'setNext'
}

const data = {
  namespaced: true,
  state: () => ({
    launchedRockets: null,
    upcomingRockets: null,
    latestSpaceX: null,
    nextSpaceX: null
  }),
  mutations: {
    [mutations.SET_LAUNCHED]: (state, launchedRockets) => {
      state.launchedRockets = launchedRockets
    },
    [mutations.SET_UPCOMING]: (state, upcomingRockets) => {
      state.upcomingRockets = upcomingRockets
    },
    [mutations.SET_LATEST]: (state, spaceX) => {
      state.latestSpaceX = spaceX
    },
    [mutations.SET_NEXT]: (state, spaceX) => {
      state.nextSpaceX = spaceX
    }
  },
  actions: {
    async fetchLatest ({ commit }) {
      try {
        const response = await this.$axios.get('/latest')

        commit(mutations.SET_LATEST, response.data)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async fetchNext ({ commit }) {
      try {
        const response = await this.$axios.get('/next')

        commit(mutations.SET_NEXT, response.data)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async fetchLaunched ({ commit }) {
      try {
        const response = await this.$axios.get('/')

        commit(mutations.SET_LAUNCHED, response.data)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async fetchUpcoming ({ commit }) {
      try {
        const response = await this.$axios.get('/upcoming')

        commit(mutations.SET_UPCOMING, response.data)
      } catch (error) {
        console.error(error)
        throw error
      }
    }
  },
  getters: {
    getLaunchedData: (state) => {
      return state.launchedRockets
    },
    getUpcomingData: (state) => {
      return state.upcomingRockets
    },
    getNextLaunchDate: (state) => {
      return state.nextSpaceX.date_utc
    }
  }
}

export default data
