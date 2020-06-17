import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Books from './Components/BookDetail/BookDetail';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Books />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
