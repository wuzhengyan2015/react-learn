export const GET_DROPS = "GET_DROPS"
export const GET_DROPS_PENDING = "GET_DROPS_PENDING"
export const GET_DROPS_FULFILLED = "GET_DROPS_FULFILLED"
export const GET_DROPS_REJECTED = "GET_DROPS_REJECTED"

export const getDropList = (page = 1, limit = 8) => ({
    type: GET_DROPS,
    payload: new Promise(resolve => {
        fetch(`/api/drops?_page=${page}&_limit=${limit}`).then((response) => {
            resolve(response.json())
        })
    })
})