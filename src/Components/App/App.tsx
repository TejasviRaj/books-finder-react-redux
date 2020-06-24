//Author- Tejasvi Raj Pant

import React, {useState, useEffect, SyntheticEvent } from 'react';
import {Col} from 'react-bootstrap';
import Books from '../BookDetail/BookDetail';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import BookList from '../BookList/BookList';
import bookArray from './bookList';
import Book from '../../Models/book'

 const App = () => {

  const [bookList, setBookList] = useState<Book[] | null>(null);
  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  //  dispatch(fetchLocation(searchText));
  };

  useEffect(() => {
    setBookList(bookArray);
  }, [])

    return (
      <div className="App">

            <Col xs={12} md={12} lg={12}>
            <SearchBar searchText = {searchText} setSearchText = {setSearchText} handleSubmit = {handleSubmit} />
              {/* <Books /> */}
              <BookList
              books={bookList}
       />
            </Col>

      </div>
    );
  }

export default App;
