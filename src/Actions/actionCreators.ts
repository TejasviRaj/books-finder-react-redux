//Author-Tejasvi Raj Pant

import {
	FETCH_BOOKS,
	FETCH_BOOKS_REQUESTED,
	FETCH_BOOKS_SUCCEEDED,
	FETCH_BOOKS_FAIL,
} from './ActionTypes';

import IFetchBooksSucceeded from './IFetchBooksSucceeded';
import IFetchBooksFail from './IFetchBooksFail';
import IFetchBooksRequested from './IFetchBooksRequested';
import IFetchBooks from './IFetchBooks';
import IBooksResponse from '../Models/IBooksResponse';


export const fetchBooks = (searchString: string): IFetchBooks => ({
	type: FETCH_BOOKS,
	searchString: searchString
})
export const fetchBooksRequested = (): IFetchBooksRequested => ({ type: FETCH_BOOKS_REQUESTED })

export const fetchBooksFail = (): IFetchBooksFail => ({
	type: FETCH_BOOKS_FAIL
});

export const fetchBooksSucceeded = (payload: IBooksResponse): IFetchBooksSucceeded => {
	return ({
	type: FETCH_BOOKS_SUCCEEDED,
	payload
})};
