import React, { Component } from 'react';
import './QuizBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faFont, faFileAlt, faDice } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faFont);
library.add(faDice);
library.add(faDumbbell);
library.add(faFileAlt);
//const element = <FontAwesomeIcon icon={faCoffee} />

class QuizBar extends Component {
 render () {
    return (
      <div className="quiz-bar">
        <h1>QuizBar</h1>
        <ul nav="nav nav-pills nav-fill">
            <li className="col-sm-3 text-center">
              <div className="nav-card">
                <FontAwesomeIcon icon="dice" size="4x" />
              </div>
            </li>
        </ul>
      </div>
    );
  }
}

export default QuizBar;