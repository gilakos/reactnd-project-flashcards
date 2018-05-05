import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'flashcards:decks'

export function fetchDecks() {
  //AsyncStorage.clear()
  return AsyncStorage.getItem(DECKS_KEY).then(results => {
    console.log(results)
    return JSON.parse(results)
  })
}

export function fetchDeck(id) {
  return AsyncStorage.getItem(DECKS_KEY).then(results => {
    return results[id]
  })
}

export function saveDeck(deck) {
  return AsyncStorage.mergeItem(
    DECKS_KEY,
    JSON.stringify({
      [deck.id]: {
        title: deck.title,
        questions: []
      }
    })
  )
}

export function saveCard(deck_title, card) {
  console.log(card)
  return AsyncStorage.getItem(DECKS_KEY).then(results => {
    const decks = JSON.parse(results)
    console.log(decks)
    decks[deck_title].questions.push(card)
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
  })
}

// export function saveCardToDeck(title, card) {
//   return AsyncStorage.getItem(DECKS_KEY).then(results => {
//     const decks = JSON.parse(results)
//     decks[title].questions.push(card)
//     AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
//   })
// }
//
// export function removeDeck(id) {
//   return AsyncStorage.getItem(DECKS_KEY).then(results => {
//     const decks = JSON.parse(results)
//     decks[id] = undefined
//     delete decks[id]
//     AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
//   })
// }
