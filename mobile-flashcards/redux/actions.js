export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const UPDATE_DECK = 'UPDATE_DECK'
import { saveDeck, saveCard } from '../utils/api'


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

export function addCard(deck, card) {
  saveCard(deck, card)
  return {
    type: ADD_CARD,
    deck,
    card
  }
}

export function updateDeck (deck) {
  return {
    type: UPDATE_DECK,
    deck,
  }
}
