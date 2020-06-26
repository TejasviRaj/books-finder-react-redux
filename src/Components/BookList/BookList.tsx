//Author- Tejasvi Raj Pant

import React from 'react';
import NoBook from './nobook.png';
import './BookList.css';
import Book from '../../Models/book'
import {
  Link
} from "react-router-dom";
import { useSelector} from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';

const BookList = () => {
  const books: Book[] = useSelector((state: RootState) => state.books);

  return (
    <div>
      <div className="bookCardContainer">
        {
          books && books.map((book) => {

            let { imageLinks, title, authors, publisher, previewLink } = book.volumeInfo ?? {};

            return (
              <div key={book.id} className="bookCard">
                <div className="bookCardOuterFlex">
                  <div className="bookCardInnerFlex">
                    <img
                      className="bookCover"
                      src={imageLinks
                        ? imageLinks.thumbnail
                        : NoBook}
                      alt={title}
                    />
                      <div className="bookInfo">
                        <div>
                          <h2 className = "bookHeading">{title}</h2>
                          <p className = "bookText">by {authors
                            ? authors.join(", ")
                            : 'Unknown'}</p>
                          <p className = "bookText">Published by {publisher
                            ? publisher
                            : 'Unknown'}</p>
                        </div>
                          <Link to={{
                                pathname: '/description',
                                state: {
                                  bookId: book.id
                                }
                              }}
                                 className="butto">
                            <button className="descriptionButton" >View Description</button>
                          </Link>
                      </div>

                  </div>
                  <a href={previewLink}>
                      <button className="buyBookButton" >Buy Book</button>
                    </a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default BookList;