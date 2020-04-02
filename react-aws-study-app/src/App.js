import React, { Component } from 'react';
import './App.css';
import QuizBar from './QuizBar';

class App extends Component {
  state = { }

  render() {
    return (
      <div className="QuizBar">
        <QuizBar />
      </div>
    );
  }
}

export default App;