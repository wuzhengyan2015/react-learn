export const GET_ITEMS = 'GET_ITEMS'
export const GET_ITEMS_PENDING = 'GET_ITEMS_PENDING'
export const GET_ITEMS_FULFILLED = 'GET_ITEMS_FULFILLED'
export const GET_ITEMS_REJECTED = 'GET_ITEMS_REJECTED'

export const getItems = () => ({
  type: GET_ITEMS,
  payload: new Promise((resolve) => {
    fetch('/api/items').then((res) => {
      resolve(res.json())
    })
  })
})