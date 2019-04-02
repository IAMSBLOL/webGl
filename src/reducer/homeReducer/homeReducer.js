import { createReducer } from 'yf-helper';
import * as fn from './fn';

const initState = {
    home: 'home',
    saga: 'test'
};

const handle = {
    // 初始化
    'HOME_INITSTATE': (state, action) => initState,
    'HOME_TEST': fn.test,
    'TEST_SAGA_SUCCESS': fn.sagaFn
};

const homeReducer = createReducer(initState, handle);

export default homeReducer;
