// This is where all of our actions will go.

// We will make a list of all user interactions - these will become our actions.

// Actions List:
  // New Game Button
  // What ? Button 
  // What ? Minimize Button
  // User input submission

export const NEW_GAME = 'NEW_GAME';
export const newGame = newGame => ({
  type: NEW_GAME,
  // view: 'startPage',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  // feedback: 'Make your Guess!',
  // guesses: []
})

export const WHAT_BUTTON = 'WHAT_BUTTON';
export const whatButton = whatButton => ({
  type: WHAT_BUTTON,
  view: 'infoPage'
})

export const MIN_BUTTON = 'MIN_BUTTON';
export const minButton = minButton => ({
  type: MIN_BUTTON,
  view: 'startPage'
})

export const SUBMIT = 'SUBMIT';
export const submit = guesses => ({
  type: SUBMIT,
  guesses
  //add feedback
})




//export const ADD_LIST = 'ADD_LIST';
// export const addList = title => ({
//     type: ADD_LIST,
//     title
// });

// export const ADD_CARD = 'ADD_CARD';
// export const addCard = (text, listIndex) => ({
//     type: ADD_CARD,
//     text,
//     listIndex
// });
