import React, { Component } from 'react'; 


class RandomWeighted extends Component {
  
  render() {
    return (
      <div>
      <div className="card-back">
          <div>{this.props.questionData.service}</div>
          <div className="commonality">{this.props.questionData.common}</div>
      </div>
      <div className="card-front">
          <div>{this.props.questionData.cat}</div>
      </div>
  </div>
    );
  }
}

export default RandomWeighted;