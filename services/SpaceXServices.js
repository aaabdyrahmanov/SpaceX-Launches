import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v2/launches',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async nextSpaceX () {
    const response = await api.get('/next')
    return response.data
  },
  async latestSpaceX () {
    const response = await api.get('/latest')
    return response.data
  },
  async launchesSpaceXs () {
    const response = await api.get()
    return response.data
  },
  async upcomingSpaceXs () {
    const response = await api.get('/upcoming')
    return response.data
  }
}
