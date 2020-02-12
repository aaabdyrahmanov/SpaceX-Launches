import SpaceXServices from "@/services/SpaceXServices.js"

export const state = () => ({
  launchedRockets: "",
  latestSpaceX: "",
  nextSpaceX: ""
})
export const mutations = {
  SET_LAUNCHES_SPACEX(state, launchedRockets) {
    state.launchedRockets = launchedRockets
  },
  SET_LATEST_SPACEX(state, spaceX) {
    state.latestSpaceX = spaceX
  },
  SET_NEXT_SPACEX(state, spaceX) {
    state.nextSpaceX = spaceX
  }
}
export const actions = {
  getLatestSpaceX({ commit }) {
    SpaceXServices.latestSpaceX()
      .then(response => {
        commit("SET_LATEST_SPACEX", response)
      })
      .catch(error => {
        alert("There was an error:", error.response)
      })
  },
  getNextSpaceX({ commit }) {
    SpaceXServices.nextSpaceX()
      .then(response => {
        commit("SET_NEXT_SPACEX", response)
      })
      .catch(error => {
        alert("There was an error:", error.response)
      })
  },
  getLaunchesSpaceX({ commit }) {
    SpaceXServices.launchesSpaceX()
      .then(response => {
        commit("SET_LAUNCHES_SPACEX", response)
      })
      .catch(error => {
        alert("There was an error", error.response)
      })
  }
}
export const getters = {
  launchedRocketsData: state => {
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
      // eslint-disable-next-line no-console
      console.log(launchDate)
      const launchDetails = state.launchedRockets.map(rocket => rocket.details)
      const arrayData = []
      for (let i = 0; i < flightNumber.length; i++) {
        const objectData = {
          flightNumber: flightNumber[i],
          launchDetail: launchDetails[i],
          missionName: missionName[i],
          rocketIcon: rocketIcon[i],
          rocketNationality: rocketNationality[i],
          launchSuccess: launchSuccess[i]
        }
        arrayData.push(objectData)
      }
      // eslint-disable-next-line no-console
      console.log(arrayData)
      return arrayData
    }
  },
  nextLaunchDate: state => {
    return state.nextSpaceX.launch_date_utc
  }
}
