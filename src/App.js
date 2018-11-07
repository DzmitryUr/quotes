import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import quotes from './quotes.js';

class App extends Component {
  constructor(props) {
    super(props);   
    let index =Math.floor(Math.random() * 9); 
    this.state = {       
       quote: quotes[index].quote,
       author: quotes[index].author,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {    
    this.index = Math.floor(Math.random() * 9);    
    this.setState({
      quote: quotes[this.index].quote,
      author: quotes[this.index].author
    });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">
          {this.state.quote}
        </div>          
        <div id="author">
          {this.state.author}
        </div>
          <Button bsStyle="success" id="new-quote" onClick={this.handleClick}>
            New Quote1
          </Button>
      </div>
    );
  }
}

export default App;
