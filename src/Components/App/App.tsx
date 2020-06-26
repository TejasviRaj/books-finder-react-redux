//Author- Tejasvi Raj Pant

import React, { useState, SyntheticEvent } from 'react';
import { Col } from 'react-bootstrap';
import Books from '../BookDetail/BookDetail';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import BookList from '../BookList/BookList';

import {useDispatch } from 'react-redux';
import { fetchBooks } from '../../Actions/actionCreators';
import {
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(fetchBooks(searchText));
  };

  return (
    <div className="App">

      <Col xs={12} md={12} lg={12}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} handleSubmit={handleSubmit} />

        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"}
            component={BookList} />
          <Route exact path={process.env.PUBLIC_URL + "/description"}
            component={Books} />
        </Switch>
      </Col>

    </div>
  );
}

export default App;
