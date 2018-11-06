import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import quotes from './quotes.js';

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
       index: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
    this.setState({
      index: 1
    });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">
          {quotes[this.state.index].quote}
        </div>          
        <div id="author">
          {quotes[this.state.index].author}
        </div>
          <Button bsStyle="success" id="new-quote">
            New Quote
          </Button>
      </div>
    );
  }
}

export default App;
