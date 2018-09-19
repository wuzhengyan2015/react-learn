import axios from 'axios'
import getLocation from './getGeo'

const prefix = '/api'
axios.interceptors.response.use(response => response.data);

const api = {
  login(params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (params.username === 'admin' && params.password === 'admin') {
          resolve({ nickname: 'wzy66' })
        } else {
          reject(new Error('用户名或密码错误'))
        }
      }, 500)
    })
  },
  logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 100)
    })
  },
  async getWeather() {
    const userCoords = await getLocation()
    let city = '福州市'
    if (userCoords) {
      const output = await axios.get(`https://restapi.amap.com/v3/geocode/regeo?location=${userCoords.longitude},${userCoords.latitude}&key=e7493502e110ecbf28f88d78e7ee3d4a`)
      city = output.data.regeocode.addressComponent.city
    }
    return axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=e7493502e110ecbf28f88d78e7ee3d4a`)
  },
  getLeagues(page = 1, limit = 99, query = '') {
    // return axios.get(`${prefix}/leagues?_page=${page}&_limit=${limit}&name_like=${query}`)
    return axios.all([axios.get(`${prefix}/leagues?_page=${page}&_limit=${limit}&name_like=${query}`),
      axios.get(`${prefix}/leagues?_page=1&_limit=99&name_like=${query}`)]).then(axios.spread((items, total) => [items, total]))
  },
  addLeague(params) {
    params.id = 100 + Math.floor(Math.random() * 200)
    return axios.post(`${prefix}/leagues`, params)
  },
  putLeague(id, params) {
    return axios.put(`${prefix}/leagues/${id}`, params)
  },
  deleteLeague(id) {
    return axios.delete(`${prefix}/leagues/${id}`)
  },
  getTeams(page = 1, limit = 99, query = '') {
    return axios.all([axios.get(`${prefix}/teams?_page=${page}&_limit=${limit}&name_like=${query}`),
      axios.get(`${prefix}/teams?_page=1&_limit=99&name_like=${query}`)]).then(axios.spread((items, total) => [items, total]))
  }
}

export default api
