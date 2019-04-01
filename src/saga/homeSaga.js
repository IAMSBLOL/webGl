import { takeLatest, put } from 'redux-saga/effects'
export default function* homeSaga () {
    yield takeLatest('TODO_SOMETHING', home)
}

function* home () {
    yield put({
        type: 'HOME_TEST',
        payload: 'clsInfo'
    })
}
