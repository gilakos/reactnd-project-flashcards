import { combineReducers } from 'redux'
import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, UPDATE_DECK } from './actions'

const sampleData = {
  'cbb5bc04-5e3d-415f-b7f1-d105717c071f': {
    title: 'React',
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
  '5f34aabe-1ebf-4400-a20a-29c1c754507c': {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: {
					title: action.deck.title,
          id: action.deck.id,
          questions: []
				}
			}
    case ADD_CARD:
      return {
        ...state,
        [action.id]: {
          questions: [action.card]
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
