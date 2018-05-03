import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'flashcards:decks'

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_KEY).then(results => {
    return JSON.parse(results)
  })
}

export function fetchDeck(id) {
  return AsyncStorage.getItem(DECKS_KEY).then(results => {
    return results[id]
  })
}

export function addDeck(title) {
  return AsyncStorage.mergeItem(
    DECKS_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  )
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_KEY).then(results => {
    const decks = JSON.parse(results)
    decks[title].questions.push(card)
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
  })
}

export function removeDeck(id) {
  return AsyncStorage.getItem(DECKS_KEY).then(results => {
    const decks = JSON.parse(results)
    decks[id] = undefined
    delete decks[id]
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
  })
}
