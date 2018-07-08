import {delay} from 'redux-saga'
import {put, takeEvery, all, call} from 'redux-saga/effects'
import {INCREMENT, INCREMENT_ASYNC, counterActions} from './actions'

export function* SagaPlayground() {
    console.log('welcome saga playground')
}

export function* incrementAsync () {
    yield call(delay, 1000)
    yield put(counterActions.increment())
}

export function* watchIncrementAsync () {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

export default function* rootSaga () {
    yield all([
        SagaPlayground(),
        watchIncrementAsync()
    ])
}