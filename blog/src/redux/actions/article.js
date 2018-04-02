export const GET_ARTICLES = 'GET_ARTICLES'
export const GET_ARTICLES_PENDING = 'GET_ARTICLES_PENDING'
export const GET_ARTICLES_FULFILLED = 'GET_ARTICLES_FULFILLED'
export const GET_ARTICLES_REJECTED = 'GET_ARTICLES_REJECTED'

export const getArticleList = () => ({
    type: 'GET_ARTICLES',
    payload: new Promise(resolve => {
        fetch(`api/articles`).then(response => {
            resolve(response.json())
        })
    })
})