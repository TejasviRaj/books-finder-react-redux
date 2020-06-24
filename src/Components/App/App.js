//Author- Tejasvi Raj Pant

import React, {useState, useEffect } from 'react';
import {Col} from 'react-bootstrap';
import Books from '../BookDetail/BookDetail';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import BookList from '../BookList/BookList';
import bookArray from './bookList';

 const App = (props) => {

  const [bookList, setBookList] = useState(null);


  useEffect(() => {
    setBookList(bookArray);
  }, [])

    return (
      <div className="App">

            <Col xs={12} md={12} lg={12}>
              <SearchBar />
              {/* <Books /> */}
              <BookList
              books={bookList}
       />
            </Col>

      </div>
    );
  }

export default App;
