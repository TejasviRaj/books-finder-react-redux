//Author-Tejasvi Raj Pant

import { FETCH_BOOKS_REQUESTED, FETCH_BOOKS_SUCCEEDED, FETCH_BOOKS_FAIL } from '../Actions/ActionTypes';
import Books from '../Models/book';
import {IActionCreator} from '../Actions/IActionCreator';
import initialState from '../Store/initialState'

const bookReducer = (state: Books[] = [...initialState] , action: IActionCreator): Books[] => {

	switch (action.type) {
		case FETCH_BOOKS_REQUESTED:
			return [...state]
		case FETCH_BOOKS_SUCCEEDED:
			console.log("response");
			console.log([...action.payload.items])
			return [...action.payload.items]
			
		case FETCH_BOOKS_FAIL:
			return [...state]
		default:
			return state

	}
};

export default bookReducer;


