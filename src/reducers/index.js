// Reducers page: 

// Import maybe * from actions 
// Make state

// Make a single reducer to handle all action.type events

import * as actions from '../actions'

const initialState = {
  view: 'startPage',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  feedback: 'Make your Guess!',
  guesses: []
}

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === actions.NEW_GAME) {
    console.log('I started a new game')
    return Object.assign({}, state, {
      // assign each part of state to action.view / action.correctAnswer... 
    })
  }

  return state;
}