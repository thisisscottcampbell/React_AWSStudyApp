import React, { Component } from 'react';

class MultiCard extends Component {
  render() {
    // const question = this.props.questionData;
    // console.log(question);
    const choices = ['a','b','c','d'];
    const options = this.props.questionData.options.map((option,i)=>{
        return(<li key={i}>{choices[i]}. {option}</li>)
    })
    const answerIndex = this.props.questionData.options.indexOf(this.props.questionData.answer);
    const answerLetter = choices[answerIndex];

    return(
        <div>
            <div className="card-back">
                <div>{this.props.questionData.service}</div>
                <ul className="multi">
                    {options}
                </ul>
            </div>
            <div className="card-front">
                {answerLetter}. {this.props.questionData.answer}
            </div>
        </div>
    )
  }
}
export default MultiCard;
