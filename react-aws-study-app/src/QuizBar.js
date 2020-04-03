import React, { Component } from 'react';
import './QuizBar.css';
import QuizType from  './QuizType' 


class QuizBar extends Component {
 render () {
    return (
      <div className="quiz-bar">
        <h1>Choose Your Quiz Type</h1>
        <ul className="nav nav-pills nav-fill">
            <QuizType icon="dice" quizType="Random" userChoice={this.props.userChoice}/>
            <QuizType icon="file-alt" quizType="Regular" userChoice={this.props.userChoice}/>
            <QuizType icon="dumbbell" quizType="Weighted" userChoice={this.props.userChoice}/>
            <QuizType icon="font" quizType="Multi" userChoice={this.props.userChoice}/>    
        </ul>
      </div>
    );
  }
}

export default QuizBar;