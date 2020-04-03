import React, { Component } from 'react';
import './QuizBar.css';
import QuizType from  './QuizType' 


class QuizBar extends Component {
  static defaultProps = {
  quizArray: [    
    {icon: "dice", type: "Random"},
    {icon: "file-alt", type: "Regular"},
    {icon: "dumbbell", type: "Weighted"},
    {icon: "font", type: "Multi"}
  ]
}

 render () {
   const quiz = this.props.quizArray.map((quiz, i )=> (
     <QuizType icon={quiz.icon} quizType={quiz.type} key={i} userChoice={this.props.userChoice}/>
   ))
    return (
      <div className="quiz-bar">
        <h1>Choose Your Quiz Type</h1>
        <ul className="nav nav-pills nav-fill">
            { quiz }
        </ul>
      </div>
    );
  }
}

export default QuizBar;