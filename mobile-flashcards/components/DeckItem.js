import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import * as colors from '../utils/colors'

export default class DeckItem extends Component {
  render() {
    const { deck, navigation } = this.props
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Deck', { activeDeck: deck })}
      >
        <View style={styles.deckView}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.cardsInfo}>{`${
            deck.questions.length
          } cards`}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  deckView: {
    backgroundColor: colors.WHITE,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.LIGHTGRAY
  },
  deckTitle: {
    fontSize: 20,
    color: colors.LIGHTPURPLE
  },
  cardsInfo: {
    fontSize: 14,
    color: colors.SUPERGRAY
  }
})
