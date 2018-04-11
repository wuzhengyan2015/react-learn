export const GET_ARCHIVE = 'GET_ARCHIVE'
export const GET_ARCHIVE_PENDING = 'GET_ARCHIVE_PENDING'
export const GET_ARCHIVE_FULFILLED = 'GET_ARCHIVE_FULFILLED'
export const GET_ARCHIVE_REJECTED = 'GET_ARCHIVE_REJECTED'

export const GET_CATEGORY = 'GET_CATEGORY'
export const GET_CATEGORY_PENDING = 'GET_CATEGORY_PENDING'
export const GET_CATEGORY_FULFILLED = 'GET_CATEGORY_FULFILLED'
export const GET_CATEGORY_REJECTED = 'GET_CATEGORY_REJECTED'

export const getArchiveList = (category = '') => ({
    type: GET_ARCHIVE,
    payload: new Promise(resolve => {
        fetch(`/api/archive?category_like=${pagcategorye}`).then(response => {
            resolve(response.json())
        })
    })
})

export const getCategoryList = () => ({
    type: GET_CATEGORY,
    payload: new Promise(resolve => {
        fetch(`/api/categories`).then(response => {
            resolve(response.json())
        })
    })
})