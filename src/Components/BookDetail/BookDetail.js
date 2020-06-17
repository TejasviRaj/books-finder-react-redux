import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BookDetail.css';
class Books extends Component {
  render() {
    let bookTitle = 'Game of Thrones'
    let thumbnail = 'http://books.google.com/books/content?id=JPDOSzE7Bo0C&printsec=frontcover&img=1&zoom=1&source=gbs_api';
    let categories = 'Fiction';
    let authors = 'George R.R. Martin';
    let publisher = 'HarperCollins UK';
    let description = 'HBO’s hit series A GAME OF THRONES is based on George R. R. Martin’s internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A GAME OF THRONES is the first volume in the series.';
    let pageCount = '912';
    return (
      <div>
        <Container style={{ marginTop: '1rem' }}>
          <h3 className="bookTitle">{bookTitle}</h3>

          <Row>
            <Col xs={2} md={2} lg={2}>
              <img src = {thumbnail} alt = "" style={{ height: '19rem', width: '16rem' }} />
            </Col>
            <Col xs={10} md={10} lg={10} >
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
                  <span className="value"> 2010-12-23</span>
                </div>
                <div style={{ backgroundColor: 'white' }}>
                  <span className="tita">Page Count: </span>
                  <span className="value"> {pageCount}</span>
                </div>
                <div style={{ backgroundColor: 'white' }}>
                  <span className="tita">Average Rating: </span>
                  <span className="rate">
                    <i className="fa fa-star"></i>
                  </span>
                  <span className="rate">
                    <i className="fa fa-star"></i>
                  </span>
                  <span className="rate">
                    <i className="fa fa-star-half-alt"></i>
                  </span>
                  <span className="rate">
                    <i className="far fa-star"></i>
                  </span>
                  <span className="rate">
                    <i className="far fa-star"></i>
                  </span>

                </div>
                <i className="fa fa-star"></i>

                <span className="fa fa-star" data-rating="1"></span>
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
}

export default Books;
