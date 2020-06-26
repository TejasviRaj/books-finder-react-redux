//Author-Tejasvi Raj Pant

import { all } from 'redux-saga/effects';
import {fetchBookWatcher} from './booksSaga';

export function* rootSaga() {
  yield all([
    fetchBookWatcher(),
  ]);
}

export default rootSaga;