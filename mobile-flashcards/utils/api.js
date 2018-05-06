import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'flashcards:decks'

export function fetchDecks() {
  //AsyncStorage.clear()
  return AsyncStorage.getItem(DECKS_KEY).then(results => JSON.parse(results))
}

export function fetchDeck(id) {
  return AsyncStorage.getItem(DECKS_KEY).then(results => {
    results[id]
  })
}

export function saveDeck(deck) {
  return AsyncStorage.mergeItem(
    DECKS_KEY,
    JSON.stringify({
      [deck.id]: {
        id: deck.id,
        title: deck.title,
        questions: []
      }
    })
  )
}

export function saveCard(deck, card) {
  return AsyncStorage.getItem(DECKS_KEY).then(results => {
    const decks = JSON.parse(results)
    decks[deck.id].questions.push(card)
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
  })
}
