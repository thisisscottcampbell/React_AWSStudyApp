import React, { Component } from 'react';
import './App.css';
import QuizBar from './QuizBar';
import FlashCard from './FlashCard'

class App extends Component {
  state = { 
          cardStyle: "Random",
          ready: false,
          }

  userChoice = (userChoice) => {
    this.setState({
      cardStyle: userChoice,
      ready: false
      })
    }
  
  nowReady = () => {
    this.setState({
      ready: true
    })
  }

  render() {
    return (
      <div className="App align-items-center d-flex">
        <div className="container">
          <QuizBar userChoice={this.userChoice} />
          <FlashCard cardStyle={this.state.cardStyle} nowReady={this.nowReady} ready={this.state.ready}/>
        </div>
      </div>
    );
  }
}

export default App;