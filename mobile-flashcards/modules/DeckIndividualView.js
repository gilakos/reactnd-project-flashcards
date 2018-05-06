import React, { Component } from 'react'
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import * as colors from '../utils/colors'

class DeckIndividualView extends Component {
  render() {
    const { deck, navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.deckView}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.cardsInfo}>
            {`${deck.questions.length} cards`}
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={[styles.actionButton, styles.buttonPrimary]}
            onPress={() => navigation.navigate('Quiz', { currentDeck: deck })}
            disabled={deck.questions.length===0}
          >
            <Text style={styles.buttonTextPrimary}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.buttonSecondary]}
            onPress={() => navigation.navigate('NewCard', { currentDeck: deck })}
          >
            <Text style={styles.buttonTextSecondary}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  deckView: {
    backgroundColor: colors.WHITE,
    paddingVertical: 160,
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
  },
  buttonView: {
    alignItems: 'flex-end',
    marginVertical: 20
  },
  actionButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    height: 70,
    borderRadius: 140,
    width: width - 60,
    borderWidth: 1
  },
  buttonPrimary: {
    backgroundColor: colors.SEAGREEN,
    borderColor: colors.SEAGREEN
  },
  buttonSecondary: {
    backgroundColor: colors.WHITE,
    borderColor: colors.SEAGREEN
  },
  buttonTextPrimary: {
    color: colors.WHITE
  },
  buttonTextSecondary: {
    color: colors.SEAGREEN
  }
})

function mapStateToProps({ decks, navigation }, ownProps) {
  const { currentDeck } = ownProps.navigation.state.params
  return {
    deck: _.filter(decks, deck => deck.id === currentDeck.id)[0]
  }
}

export default connect(mapStateToProps)(DeckIndividualView)
