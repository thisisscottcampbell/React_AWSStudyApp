import React, { Component } from 'react';

class RegularCard extends Component {
  
  render() {
    console.log(this.props.questionData);
    const question = this.props.questionData;
    return (
      <div>
        <div className="card-back">
            {question.service}  
           
        </div>
        <div className="card-front">
          
          <div>{question.desc}</div>
          <div>{question.cat}</div>
        </div>
      </div>

    );
  }
}

export default RegularCard;