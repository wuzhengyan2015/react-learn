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
  }
}

export default api
