//Author-Tejasvi Raj Pant

import {FETCH_BOOKS_SUCCEEDED} from './ActionTypes'
import IBooksResponse from '../Models/IBooksResponse';

export default interface IFetchBooksSucceeded {
	type: FETCH_BOOKS_SUCCEEDED
	payload: IBooksResponse
}