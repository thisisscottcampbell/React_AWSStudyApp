import React, { Component } from 'react';

class MultiCard extends Component {
  render() {
    const question = this.props.questionData;
    console.log(question);
    const choices = ['a','b','c','d'];
    const options = question.options.map((option,i)=>{
        return(<li key={i}>{choices[i]}. {option}</li>)
    })
    const answerIndex = question.options.indexOf(question.answer);
    const answerLetter = choices[answerIndex];

    return(
        <div>
            <div className="card-back">
                <div>{question.service}</div>
                <ul className="multi">
                    {options}
                </ul>
            </div>
            <div className="card-front">
                {answerLetter}. {question.answer}
            </div>
        </div>
    )
  }
}
export default MultiCard;
