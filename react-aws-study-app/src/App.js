import React, { Component } from 'react';
import './App.css';
import QuizBar from './QuizBar';
import FlashCard from './FlashCard'

class App extends Component {
  state = { cardStyle: "Random" }

  userChoice = (userChoice) => {
    this.setState({
      cardStyle: userChoice
      })
    }

  render() {
    return (
      <div className="App align-items-center d-flex">
        <div className="container">
          <QuizBar userChoice={this.userChoice} />
          <FlashCard cardStyle={this.state.cardStyle}/>
        </div>
      </div>
    );
  }
}

export default App;