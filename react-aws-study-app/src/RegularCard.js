import React, { Component } from 'react';

class RegularCard extends Component {
  render() {
    return (
      <div>
        <div className="card-back">
            AWS Service    
        </div>
        <div className="card-front">
          Description
          Category
        </div>
      </div>

    );
  }
}

export default RegularCard;