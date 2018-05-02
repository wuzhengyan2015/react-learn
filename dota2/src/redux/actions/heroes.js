export const GET_HEROES = 'GET_HEROES'
export const GET_HEROES_PENDING = 'GET_HEROES_PENDING'
export const GET_HEROES_FULFILLED = 'GET_HEROES_FULFILLED'
export const GET_HEROES_REJECTED = 'GET_HEROES_REJECTED'

export const getHeroes = () => ({
  type: GET_HEROES,
  payload: new Promise((resovle) => {
    fetch('/api/heroes').then((response) => {
      resovle(response.json())
    })
  })
})