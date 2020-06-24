//Author-Tejasvi Raj Pant

import {
	FETCH_BOOKS,
	FETCH_BOOKS_REQUESTED,
	FETCH_BOOKS_SUCCEEDED,
	FETCH_BOOKS_FAIL,
} from './ActionTypes';

import IFetchWeatherSucceeded from './IFetchBooksSucceeded';
import IFetchWeatherFail from './IFetchBooksFail';
import IFetchWeatherRequested from './IFetchBooksRequested';
import IFetchWeather from './IFetchBooks';
import IBooksResponse from '../Models/IBooksResponse';


export const fetchWeather = (searchString: string): IFetchWeather => ({
	type: FETCH_BOOKS,
	searchString: searchString
})
export const fetchWeatherRequested = (): IFetchWeatherRequested => ({ type: FETCH_BOOKS_REQUESTED })

export const fetchWeatherFail = (): IFetchWeatherFail => ({
	type: FETCH_BOOKS_FAIL
});

export const fetchWeatherSucceeded = (payload: IBooksResponse): IFetchWeatherSucceeded => {
	return ({
	type: FETCH_BOOKS_SUCCEEDED,
	payload
})};
