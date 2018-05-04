import { combineReducers } from 'redux'
import { RECEIVE_DECKS, ADD_DECK, UPDATE_DECK } from './actions'

const sampleData = {
  React: {
    title: 'React',
    id: 0,
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      },
      {
        question: 'How does a component maintain internal data?',
        answer: 'Through this.state'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    id: 1,
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function decks(state = sampleData, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck.title]: {
					title: action.deck.title,
          id: action.deck.id,
          questions: []
				}
			}
    case UPDATE_DECK:
      return {
        ...state,
        ...action.deck
      }
    default:
      return state
  }
}

export default combineReducers({
  decks
})
