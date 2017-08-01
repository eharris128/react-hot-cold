import React from "react";
import {connect} from 'react-redux';

import "./guess-form.css";

export class GuessForm extends React.Component {
  // onGuess(event) {
  //   event.preventDefault();

  //   if (this.props.onGuess) {
  //     const value = this.input.value;
  //     this.props.onGuess(value);
  //   }
  //   this.input.value = "";
  // }

  render() {
    // For user input: add to button: onClick={() => this.props.dispatch(myActionFunctionName())}
    return (
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="userGuess">Enter your Guess</label>
        <input
          type="text"
          name="userGuess"
          id="userGuess"
          className="text"
          maxLength="3"
          autoComplete="off"
          placeholder={Math.round(Math.random() * 100)}
          required
          ref={input => (this.input = input)}
        />
        <input
          type="submit"
          id="guessButton"
          className="button"
          name="submit"
          value="Guess"
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  showInfo: state.showInfo,
  correctAnswer: state.correctAnswer,
  feedback: state.feedback,
  guesses: state.guesses
})

export default connect(mapStateToProps)(GuessForm)