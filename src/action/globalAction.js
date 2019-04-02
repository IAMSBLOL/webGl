import * as types from './actionTypes';
import { actionCreator } from 'yf-helper';
export const TEST = actionCreator(types.HOME_TEST, 'HOME_TEST');
export const SAGATEST = actionCreator(types.TEST_SAGA, 'TODO_SOMETHING');
