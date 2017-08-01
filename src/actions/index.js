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
  correctAnswer: Math.floor(Math.random() * 100) + 1,
})
export const TOGGLE_INFO = 'TOGGLE_INFO';
export const toggleInfo = () => ({
  type: TOGGLE_INFO
})

export const SUBMIT = 'SUBMIT';
export const submit = guesses => ({
  type: SUBMIT,
  guesses
})

// export const WHAT_BUTTON = 'WHAT_BUTTON';
// export const whatButton = whatButton => ({
//   type: WHAT_BUTTON,
//   view: 'infoPage'
// })

// export const MIN_BUTTON = 'MIN_BUTTON';
// export const minButton = minButton => ({
//   type: MIN_BUTTON,
//   view: 'startPage'
// })
