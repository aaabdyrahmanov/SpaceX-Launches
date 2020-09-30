export const state = () => ({
  launchedRockets: '',
  upcomingRockets: '',
  latestSpaceX: '',
  nextSpaceX: ''
})
export const mutations = {
  SET_LAUNCHES_SPACEXS (state, launchedRockets) {
    state.launchedRockets = launchedRockets
  },
  SET_UPCOMING_SPACEXS (state, upcomingRockets) {
    state.upcomingRockets = upcomingRockets
  },
  SET_LATEST_SPACEX (state, spaceX) {
    state.latestSpaceX = spaceX
  },
  SET_NEXT_SPACEX (state, spaceX) {
    state.nextSpaceX = spaceX
  }
}
export const actions = {
  async getLatestSpaceX ({ commit }) {
    try {
      const response = await this.$axios.get('/latest')
      commit('SET_LATEST_SPACEX', response)
    } catch (error) {
      console.error(error)
    }
  },
  async getNextSpaceX ({ commit }) {
    try {
      const response = await this.$axios.get('/next')
      commit('SET_NEXT_SPACEX', response)
    } catch (error) {
      console.error(error)
    }
  },
  async getLaunchesSpaceX ({ commit }) {
    try {
      const response = await this.$axios.get('/')
      commit('SET_LAUNCHES_SPACEXS', response)
    } catch (error) {
      console.error(error)
    }
  },
  async getUpcomingSpaceX ({ commit }) {
    try {
      const response = await this.$axios.get('/upcoming')
      commit('SET_UPCOMING_SPACEXS', response)
    } catch (error) {
      console.error(error)
    }
  }
}
export const getters = {
  launchedRocketsData: (state) => {
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
  nextLaunchDate: (state) => {
    return state.nextSpaceX.launch_date_utc
  },
  upcomingRocketsData: (state) => {
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
