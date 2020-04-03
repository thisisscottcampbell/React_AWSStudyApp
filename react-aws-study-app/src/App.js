import React, { Component } from 'react';
import './App.css';
import QuizBar from './QuizBar';

class App extends Component {
  state = { cardStyle: "Random" }

  userChoice = (userChoice) => {
    this.setState({
      cardStyle: userChoice
      })
    }

  render() {
    return (
      <div className="QuizBar">
        <QuizBar userChoice={this.userChoice} />
      </div>
    );
  }
}

export default App;