//Author-Tejasvi Raj Pant

import IWeatherRequestedSucceeded from './IFetchBooksSucceeded';
import IFetchWeatherFail from './IFetchBooksFail';
import IFetchWeatherRequested from './IFetchBooksRequested';
import IFetchWeather from './IFetchBooks';

export type IActionCreator =
	 IFetchWeather
	| IFetchWeatherRequested
	| IWeatherRequestedSucceeded
	| IFetchWeatherFail
