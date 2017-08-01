import * as actions from '../actions'

const initialState = {
  // view: 'startPage',
  showInfo: 'false',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  feedback: 'Make your Guess!',
  guesses: [14, 98]
}

function displayFeedback(state, input) {
    const difference = Math.abs(input - state.correctAnswer);
    let feedback;
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
    return Object.assign({}, state, {
      showInfo: state.showInfo,
      correctAnswer: action.correctAnswer,
      feedback: state.feedback,
      guesses: state.guesses
    })
  } else if (action.type === actions.TOGGLE_INFO) {
    return Object.assign({}, state, {
      showInfo: !(state.showInfo)
    })
  } else if (action.type === actions.SUBMIT) {
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guesses],
        feedback: displayFeedback(state, action.guesses)
      })
    }

  return state;

  // else if (action.type === actions.WHAT_BUTTON) {
  //   return Object.assign({}, state, {
  //     view: action.view
  //   })
  // } else if (action.type === actions.MIN_BUTTON) {
  //   return Object.assign({}, state, {
  //     view: action.view
  //   })
  // } 

}