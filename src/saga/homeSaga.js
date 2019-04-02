import { takeLatest, put } from 'redux-saga/effects'
export default function* homeSaga () {
    yield takeLatest('TEST_SAGA_REQ', home)
}

function* home (action) {
    console.log(action, 7)
    yield put({
        type: 'TEST_SAGA_SUCCESS',
        payload: 'YES I CAN WORK'
    })
}
