import React from "react";
import {connect} from 'react-redux';

import "./guess-form.css";

export class GuessForm extends React.Component {

  render() {
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
          onClick={() => this.props.dispatch(submit(parseInt(this.input.value, 10)))}/>
      </form>
    );
  }
}

export default connect()(GuessForm);