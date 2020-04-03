import React, { Component } from 'react'; 


class RandomWeighted extends Component {
  
  render() {
    return (
      <div>
      <div className="card-back">
          <div>{this.props.question.service}</div>
          <div className="commonality">{this.props.question.common}</div>
      </div>
      <div className="card-front">
          <div>{this.props.question.cat}</div>
      </div>
  </div>
    );
  }
}

export default RandomWeighted;