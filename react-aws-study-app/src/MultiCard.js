import React, { Component } from 'react';

class MultiCard extends Component {
  render() {
    return (
      <div>
          <div className="card-back">
            <div>
              AWS Service
            </div>
            <ul className='multi'>
              options
            </ul>
          </div>
          <div className="card-front">
            multipleChoice answer
          </div>
        </div>
    );
  }
}

export default MultiCard;