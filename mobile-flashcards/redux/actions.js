export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const UPDATE_DECK = 'UPDATE_DECK'
import { saveDeck } from '../utils/api'


export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  saveDeck(deck)
  return {
    type: ADD_DECK,
    deck,
  }
}

export function updateDeck (deck) {
  return {
    type: UPDATE_DECK,
    deck,
  }
}
