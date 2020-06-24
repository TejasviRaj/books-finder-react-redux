//Author-Tejasvi Raj Pant

import {
	FETCH_BOOKS,
} from './ActionTypes';

export default interface IFetchBooks {
	type: FETCH_BOOKS
	searchString: string | null,
}