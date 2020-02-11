import axios from "axios"

const api = axios.create({
  baseURL: "https://api.spacexdata.com/v3/launches",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  async nextSpaceX() {
    const response = await api.get("/next")
    return response.data
  },
  async latestSpaceX() {
    const response = await api.get("/latest")
    return response.data
  },
  async launchesSpaceX() {
    const response = await api.get()
    // eslint-disable-next-line no-console
    console.log(response.data[22])
    return response.data
  }
}
