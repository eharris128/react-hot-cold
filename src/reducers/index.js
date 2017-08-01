// Reducers page: 

// Import maybe * from actions 
// Make state

// Make a single reducer to handle all action.type events

import * as actions from '../actions'

const initialState = {
  view: 'startPage',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  feedback: 'Make your Guess!',
  guesses: [14, 35, 98]
}

function displayFeedback(feedback, state, input) {
    const difference = Math.abs(input - state.correctAnswer);
    // let feedback;
    if (difference >= 50) {
      feedback = "You're Ice Cold...";
    } else if (difference >= 30) {
      feedback = "You're Cold...";
    } else if (difference >= 10) {
      feedback = "You're Warm";
    } else if (difference >= 1) {
      feedback = "You're Hot!";
    } else {
      feedback = "You got it!";
    }
    return feedback;
}

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === actions.NEW_GAME) {
    console.log('I started a new game')
    return Object.assign({}, state, {
      view: action.view,
      correctAnswer: action.correctAnswer,
      feedback: action.feedback,
      guesses: action.guesses
      // assign each part of state to action.view / action.correctAnswer... 
    })
  } else if (action.type === actions.WHAT_BUTTON) {
    return Object.assign({}, state, {
      view: action.view
    })
  } else if (action.type === actions.MIN_BUTTON) {
    return Object.assign({}, state, {
      view: action.view
    })
    } else if (action.type === actions.SUBMIT) {
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guesses],
        feedback: displayFeedback('', state, action.guesses)
      })
    }

  return state;
}