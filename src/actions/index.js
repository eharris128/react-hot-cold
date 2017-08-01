export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
  correctAnswer: Math.floor(Math.random() * 100) + 1
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
