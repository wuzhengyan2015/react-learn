export const GET_LIFES = 'GET_LIFES'
export const GET_LIFES_PENDING = 'GET_LIFES_PENDING'
export const GET_LIFES_FULFILLED = 'GET_LIFES_FULFILLED'
export const GET_LIFES_REJECTED = 'GET_LIFES_REJECTED'

export const getLifeList = (page = 1, limit = 10) => ({
    type: GET_LIFES,
    payload: new Promise(resolve => {
        fetch(`/api/lifes?_page=${page}&_limit=${limit}`).then(response => {
            resolve(response.json())
        })
    })
})