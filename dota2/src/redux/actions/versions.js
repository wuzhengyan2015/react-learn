export const GET_VERSIONS = 'GET_VERSIONS'
export const GET_VERSIONS_PENDING = 'GET_VERSIONS_PENDING'
export const GET_VERSIONS_FULFILLED = 'GET_VERSIONS_FULFILLED'
export const GET_VERSIONS_REJECTED = 'GET_VERSIONS_REJECTED'

export const getVersions = () => ({
  type: GET_VERSIONS,
  payload: new Promise((resolve) => {
    fetch('/api/version').then((res) => {
      resolve(res.json())
    })
  })
})