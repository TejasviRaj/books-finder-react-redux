//Author-Tejasvi Raj Pant

import { put, call, takeLatest } from 'redux-saga/effects'
import { fetchBooksRequested, fetchBooksSucceeded, fetchBooksFail } from '../Actions/actionCreators'
import { FETCH_BOOKS } from '../Actions/ActionTypes'
import {fetchBooks} from './fetchBooks';
import IFetchBooks from '../Actions/IFetchBooks';

export function* fetchBookWatcher() {
	yield takeLatest(FETCH_BOOKS, fetchBookWorker)
}

function* fetchBookWorker(props: IFetchBooks) {
	try {
		yield put(fetchBooksRequested())
		const response = yield call(fetchBooks, props.searchString);
		yield put(fetchBooksSucceeded(response.data))
	} catch (error) {
		yield put(fetchBooksFail())
	}
}
