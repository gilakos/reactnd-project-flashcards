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
  onCorrect() {
    this.setState({
      question_index: this.state.question_index + 1,
      answers_correct: this.state.answers_correct + 1,
      showAnswer: false
    })
  }
  onIncorrect() {
    this.setState({
      question_index: this.state.question_index + 1,
      showAnswer: false
    })
  }
  onRestart() {
    this.setState({
      question_index: 0,
      answers_correct: 0,
      showAnswer: false
    })
  }
  renderQuiz(deck) {
    return (
      <View>
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
            onPress={() => this.onCorrect()}
          >
            <Text style={styles.buttonTextPrimary}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.buttonTertiary]}
            onPress={() => this.onIncorrect()}
          >
            <Text style={styles.buttonTextPrimary}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  renderResults(deck, navigation) {
    let message = ''
    let score = (parseFloat(this.state.answers_correct) / parseFloat(deck.questions.length))*100
    score = parseInt(score)
    if (score === 100){
      message = `Congratulations! You scored a perfect ${score}%`
    } else if (score > 75){
      message = `Well done. You scored ${score}% in this quiz.`
    } else {
      message = `You scored ${score}% in this quiz - keep studying.`
    }
    console.log(score)
    return (
      <View>
        <View style={styles.deckView}>
          <Text style={styles.deckTitle}>
            {message}
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={[styles.actionButton, styles.buttonPrimary]}
            onPress={() => navigation.navigate('Decks')}
          >
            <Text style={styles.buttonTextPrimary}>Back to your Decks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.buttonSecondary]}
            onPress={() => this.onRestart()}
          >
            <Text style={styles.buttonTextSecondary}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  render() {
    const { deck, navigation } = this.props
    const quiz_progress = `${this.state.question_index + 1} / ${
      deck.questions.length
    }`
    const quiz_score = `${this.state.answers_correct} / ${
      this.state.question_index
    }`
    const quiz_complete = this.state.question_index === deck.questions.length
    console.log(quiz_complete)

    return (
      <View style={styles.container}>
        <View style={styles.progressView}>
          <Text
            style={styles.cardsInfo}
          >{`Quiz Progress: ${quiz_progress}`}</Text>
          <Text style={styles.cardsInfo}>{`Quiz Score: ${quiz_score}`}</Text>
        </View>
        {quiz_complete === true ? (
          <View>{this.renderResults(deck, navigation)}</View>
        ) : (
          <View>{this.renderQuiz(deck)}</View>
        )}
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
  buttonSecondary: {
    backgroundColor: colors.WHITE,
    borderColor: colors.SEAGREEN
  },
  buttonTertiary: {
    backgroundColor: colors.BURNTRED,
    borderColor: colors.BURNTRED
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

export default connect(mapStateToProps)(DeckQuizView)
