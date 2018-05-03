import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import * as colors from '../utils/colors'

export default class DeckItem extends Component {
  render() {
    const { title, num_cards } = this.props
    return (
      <View style={styles.deckView}>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.cardsInfo}>{`${num_cards} cards`}</Text>
      </View>
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
