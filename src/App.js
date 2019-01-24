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
      <div>
        <div id="text">
          <h2>{this.state.quote}</h2>
        </div>          
        <div id="author" className="pull-right">
          - <i>{this.state.author}</i>
        </div>
      </div>
      <br/>
      <div>  
        <div className="pull-left">
          <a href="http://twitter.com/intent/tweet" id="tweet-quote">Twit</a>
        </div>
        <div className="pull-right">
          <Button bsStyle="success" id="new-quote" onClick={this.handleClick}>
            New Quote
          </Button>
        </div>  
      </div>  
      </div>
    );
  }
}

export default App;
