import React, { Component } from 'react';
import RandomWeighted from './RandomWeighted';
// import MultiCard from './MultiCard';
// import RegularCard from './RegularCard';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core'

class FlashCard extends Component {

  state = { flipClas: "" }

  flip = (e )=>{
    let newFlip = this.state.flipClass === "" ? "flip" : "";
    this.setState({
        flipClass: newFlip
    })
  }

  render() {
    return(
      <div>
          <div className="row align-items-center card-holder">
              <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-3" ${this.state.flipClass}`}>
                  <RandomWeighted />
              </div>
          </div>
      </div>
    )
  }
}

export default FlashCard;