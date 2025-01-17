//Author-Tejasvi Raj Pant

import booksReducer from './booksReducer';
import { combineReducers } from 'redux';

const rootReducer  = combineReducers({
	books: booksReducer,
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer