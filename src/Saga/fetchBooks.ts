//Author-Tejasvi Raj Pant

import {ROOT_URL} from './config';

import axios from 'axios';

export const fetchBooks = (searchString: string | null) => {
    return axios.get(`${ROOT_URL}?q=${searchString}`);
}