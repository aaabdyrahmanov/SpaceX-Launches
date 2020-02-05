import SpaceXServices from "@/services/SpaceXServices.js"

export const state = () => ({
  latestSpaceX: "",
  nextSpaceX: ""
})
export const mutations = {
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
        /* eslint-disable no-console */
        console.log("There was an error:", error.response)
      })
  },
  getNextSpaceX({ commit }) {
    SpaceXServices.nextSpaceX()
      .then(response => {
        commit("SET_NEXT_SPACEX", response)
      })
      .catch(error => {
        /* eslint-disable no-console */
        console.log("There was an error:", error.response)
      })
  }
}
export const getters = {
  nextLaunchDate: state => {
    return state.nextSpaceX.launch_date_utc
  }
}
