import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div id="quote-box">
        <div id="text">
          test text
        </div>          
        <div id="author">
          test author
        </div>
          <Button bsStyle="success" id="new-quote">
            New Quote
          </Button>
      </div>
    );
  }
}

export default App;
