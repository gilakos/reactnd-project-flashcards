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

class DeckQuizView extends Component {
  state = {
    showAnswer: false,
    question_index: 0,
    answers_correct: 0
  }
  render() {
    const { deck } = this.props
    const question_progress = `${this.state.question_index + 1} / ${
      deck.questions.length
    }`
    console.log(deck.questions)
    return (
      <View style={styles.container}>
        <View style={styles.progressView}>
          <Text style={styles.cardsInfo}>{question_progress}</Text>
        </View>
        {this.state.showAnswer === false ? (
          <View style={styles.deckView}>
            <Text style={styles.deckTitle}>
              {deck.questions[this.state.question_index].question}
            </Text>
            <TouchableOpacity
              onPress={() => this.setState({ showAnswer: true })}
            >
              <Text style={styles.cardsInfo}>Show Answer</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.deckView}>
            <Text style={styles.deckTitle}>
              {deck.questions[this.state.question_index].answer}
            </Text>
            <TouchableOpacity
              onPress={() => this.setState({ showAnswer: false })}
            >
              <Text style={styles.cardsInfo}>Show Question</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={[styles.actionButton, styles.buttonPrimary]}
            onPress={() => console.log('correct')}
          >
            <Text style={styles.buttonTextPrimary}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.buttonTertiary]}
            onPress={() => console.log('incorrect')}
          >
            <Text style={styles.buttonTextPrimary}>Incorrect</Text>
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
  progressView: {
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckView: {
    backgroundColor: colors.WHITE,
    paddingVertical: 120,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.LIGHTGRAY
  },
  deckTitle: {
    fontSize: 20,
    color: colors.LIGHTPURPLE,
    marginBottom: 20
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
  buttonTertiary: {
    backgroundColor: colors.BURNTRED,
    borderColor: colors.BURNTRED
  },
  buttonTextPrimary: {
    color: colors.WHITE
  }
})

function mapStateToProps({ decks, navigation }, ownProps) {
  const { currentDeck } = ownProps.navigation.state.params
  return {
    deck: _.filter(decks, deck => deck.id === currentDeck.id)[0]
  }
}

export default connect(mapStateToProps)(DeckQuizView)
