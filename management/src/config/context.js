import CryptoJS from 'crypto-js'

const key = 'BOTWAVEE';
// CBC模式加密
function encryptByDESModeCBC(message) {
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  const ivHex = CryptoJS.enc.Utf8.parse(key);
  const encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}
// CBC模式解密
function decryptByDESModeCBC(ciphertext2) {
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  const ivHex = CryptoJS.enc.Utf8.parse(key);
  // direct decrypt ciphertext
  const decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Hex.parse(ciphertext2)
  }, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

const context = {
  getUserInfo() {
    const encryptUesr = localStorage.getItem('user')
    if (!encryptUesr) return null
    const user = decryptByDESModeCBC(encryptUesr)
    return user && JSON.parse(user)
  },
  setUserInfo(user) {
    const encryptUesr = encryptByDESModeCBC(JSON.stringify(user))
    localStorage.setItem('user', encryptUesr)
  },
  resetUserInfo() {
    localStorage.removeItem('user')
  },
  isLogin() {
    return !!this.getUserInfo()
  }
}

export default context
