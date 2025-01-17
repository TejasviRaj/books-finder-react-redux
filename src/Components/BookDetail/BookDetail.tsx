//Author- Tejasvi Raj Pant

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BookDetail.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import Book from '../../Models/book'
import { Redirect } from 'react-router-dom';

interface PropTypes {
  location: {
    pathname: string
    state: {
      bookId: string
    }
  }
}

const BookDetail = (props: PropTypes) => {
  const books: Book[] = useSelector((state: RootState) => state.books);
  const book = books.filter(book => book.id === props.location.state?.bookId)[0];

  if (book) {
    let bookTitle = book.volumeInfo?.title;
    let thumbnail = book.volumeInfo?.title && book.volumeInfo?.imageLinks?.thumbnail;
    let categories = book.volumeInfo?.title && book.volumeInfo?.title[0];
    let authors = book.volumeInfo?.authors?.join(',');
    let publisher = book.volumeInfo?.publisher;
    let description = book.volumeInfo?.description;
    let pageCount = book.volumeInfo?.pageCount;
    let publishedDate = book.volumeInfo?.publishedDate;
    let averageRating = book.volumeInfo?.averageRating;
      return (    <div className="bookDetail">
      <Container style={{ marginTop: '1rem' }}>

        <Row>
          <Col xs={5} sm={4} md={3} lg={3} xl={2}>
            <img src={thumbnail} alt="" style={{ height: '19rem', width: '16rem' }} />
          </Col>
          <Col xs={7} sm={8} md={9} lg={9} xl={10} >
            <h3 className="bookTitle">{bookTitle}</h3>

            <div>
              <div style={{ backgroundColor: 'white' }}>
                <span className="tita">Categories: </span>
                <span className="value"> {categories}</span>
              </div>
              <div style={{ backgroundColor: 'white' }}>
                <span className="tita">Authors: </span>
                <span className="value"> {authors}</span>
              </div>
              <div style={{ backgroundColor: 'white' }}>
                <span className="tita">Publisher: </span>
                <span className="value"> {publisher}</span>
              </div>
              <div style={{ backgroundColor: 'white' }}>
                <span className="tita">Publish Date: </span>
                <span className="value"> {publishedDate}</span>
              </div>
              <div style={{ backgroundColor: 'white' }}>
                <span className="tita">Page Count: </span>
                <span className="value"> {pageCount}</span>
              </div>
              <div style={{ backgroundColor: 'white' }}>
                <span className="tita">Average Rating: </span>
                {
                  averageRating ?
                <>
                {
                  Array(Math.floor(averageRating ?? 0)).fill(0).map((_, index) => <span className="rate" key={index}>
                    <i className="fa fa-star"></i>
                  </span>)
                }

                {
                  ((averageRating ?? 0) % 1) ? <span className="rate">
                    <i className="fa fa-star-half-alt"></i>
                  </span> : null
                }

                {
                  Array(Math.floor(5 - (averageRating ?? 0))).fill(0).map((_, index) => <span className="rate" key={index}>
                    <i className="far fa-star"></i>
                  </span>)
                }
                </> : <span className="value">Not Available</span>
                }

              </div>
              {/* <Button href={buyLink} bsStyle="primary">Buy Now</Button> */}

            </div>
          </Col>
        </Row>
        <Row >
          <Col xs={11} md={11} lg={11}>
            <span style={{ color: 'black' }} className="descriptionTitle">
              Book Description</span> <br />
            <span className="description">
              {description}
            </span>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
  }
  else {
    return <Redirect to = "/" />
  }
    

};

export default BookDetail;
