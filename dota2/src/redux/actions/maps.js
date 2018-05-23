export const GET_MAPS = 'GET_MAPS'
export const GET_MAPS_PENDING = 'GET_MAPS_PENDING'
export const GET_MAPS_FULFILLED = 'GET_MAPS_FULFILLED'
export const GET_MAPS_REJECTED = 'GET_MAPS_REJECTED'

export const getMaps = () => ({
  type: GET_MAPS,
  payload: new Promise((resolve) => {
    fetch('/api/maps').then((res) => {
      resolve(res.json())
    })
  })
})