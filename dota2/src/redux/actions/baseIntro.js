export const GET_BASE_INTRO = 'GET_BASE_INTRO';
export const GET_BASE_INTRO_PENDING = 'GET_BASE_INTRO_PENDING';
export const GET_BASE_INTRO_FULFILLED = 'GET_BASE_INTRO_FULFILLED';
export const GET_BASE_INTRO_REJECTED = 'GET_BASE_INTRO_REJECTED';

export const getBaseIntro = () => ({
  type: GET_BASE_INTRO,
  payload: new Promise(resolve => {
    fetch('/api/homeData').then(response => {
      resolve(response.json());
    });
  })
});
