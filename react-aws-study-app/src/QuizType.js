import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faFont, faFileAlt, faDice } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFont);
library.add(faDice);
library.add(faDumbbell);
library.add(faFileAlt);

class quizType extends Component {

  handleClick = () => {
    this.props.userChoice(this.props.quizType);
  }
  render() {
    return (
      <li className="col-sm-3 text-center">
        <div className="nav-card" onClick={this.handleClick}>
          <FontAwesomeIcon icon={this.props.icon} size="4x" />
          <span>{this.props.quizType}</span>
        </div>
    </li>
    );
  }
}

export default quizType;