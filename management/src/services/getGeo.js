function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.warn('用户拒绝对获取地理位置的请求。')
      break;
    case error.POSITION_UNAVAILABLE:
      console.warn('位置信息是不可用的。')
      break;
    case error.TIMEOUT:
      console.warn('请求用户地理位置超时。')
      break;
    case error.UNKNOWN_ERROR:
      console.warn('未知错误。')
      break;
    default:
      break
  }
}

function getLocation() {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position.coords)
      }, (error) => {
        showError(error)
        reject()
      })
    })
  }
  return Promise.reject()
}

export default getLocation
