export const state = () => ({
  launchedRockets: '',
  upcomingRockets: '',
  latestSpaceX: '',
  nextSpaceX: ''
})
export const mutations = {
  setLaunched  (state, launchedRockets) {
    state.launchedRockets = launchedRockets
  },
  setUpcoming (state, upcomingRockets) {
    state.upcomingRockets = upcomingRockets
  },
  setLatest (state, spaceX) {
    state.latestSpaceX = spaceX
  },
  setNext (state, spaceX) {
    state.nextSpaceX = spaceX
  }
}
export const actions = {
  async fetchLatest ({ commit }) {
    try {
      const response = await this.$axios.get('/latest')
      commit('setLatest', response)
    } catch (error) {
      console.error(error)
    }
  },
  async fetchNext ({ commit }) {
    try {
      const response = await this.$axios.get('/next')
      commit('setNext', response)
    } catch (error) {
      console.error(error)
    }
  },
  async fetchLaunched ({ commit }) {
    try {
      const response = await this.$axios.get('/')
      commit('setLaunched', response)
    } catch (error) {
      console.error(error)
    }
  },
  async fetchUpcoming ({ commit }) {
    try {
      const response = await this.$axios.get('/upcoming')
      commit('setUpcoming', response)
    } catch (error) {
      console.error(error)
    }
  }
}
export const getters = {
  getLaunchedData: (state) => {
    if (state.launchedRockets) {
      const flightNumber = state.launchedRockets.map(
        rocket => rocket.flight_number
      )
      const rocketIcon = state.launchedRockets.map(
        rocket => rocket.links.mission_patch_small
      )
      const rocketNationality = state.launchedRockets.map(
        rocket => rocket.rocket.second_stage.payloads[0].nationality
      )
      const missionName = state.launchedRockets.map(
        rocket => rocket.mission_name
      )
      const launchSuccess = state.launchedRockets.map(
        rocket => rocket.launch_success
      )
      const launchDate = state.launchedRockets.map(
        rocket => rocket.launch_date_utc
      )
      const launchDetails = state.launchedRockets.map(rocket => rocket.details)
      const arrayData = []
      for (let i = 0; i < flightNumber.length; i++) {
        const objectData = {
          flightNumber: flightNumber[i],
          launchDetail: launchDetails[i],
          missionName: missionName[i],
          rocketIcon: rocketIcon[i],
          rocketNationality: rocketNationality[i],
          launchSuccess: launchSuccess[i],
          launchDate: launchDate[i]
        }
        arrayData.push(objectData)
      }
      return arrayData
    }
  },
  getNextLaunchDate: (state) => {
    return state.nextSpaceX.launch_date_utc
  },
  getUpcomingData: (state) => {
    if (state.upcomingRockets) {
      const flightNumber = state.upcomingRockets.map(
        rocket => rocket.flight_number
      )
      const rocketIcon = state.upcomingRockets.map(
        rocket => rocket.links.mission_patch_small
      )
      const rocketNationality = state.upcomingRockets.map(
        rocket => rocket.rocket.second_stage.payloads[0].nationality
      )
      const missionName = state.upcomingRockets.map(
        rocket => rocket.mission_name
      )
      const launchSuccess = state.upcomingRockets.map(
        rocket => rocket.launch_success
      )
      const launchDate = state.upcomingRockets.map(
        rocket => rocket.launch_date_utc
      )
      const launchDetails = state.upcomingRockets.map(rocket => rocket.details)
      const arrayData = []
      for (let i = 0; i < flightNumber.length; i++) {
        const objectData = {
          flightNumber: flightNumber[i],
          launchDetail: launchDetails[i],
          missionName: missionName[i],
          rocketIcon: rocketIcon[i],
          rocketNationality: rocketNationality[i],
          launchSuccess: launchSuccess[i],
          launchDate: launchDate[i]
        }
        arrayData.push(objectData)
      }
      return arrayData
    }
  }
}
