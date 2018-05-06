import React, { Component } from 'react'
import {
  Dimensions,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'
import { Navigation, Card } from 'react-router-navigation'

import { connect } from 'react-redux'
import { addCard } from '../redux/actions'
import Field from '../components/FieldItem'

import * as colors from '../utils/colors'

class CardNewView extends Component {
  state = {
    question: '',
    answer: ''
  }
  saveCard() {
    const { navigation, addCard } = this.props
    const { currentDeck } = navigation.state.params
    const card = {
      question: this.state.question,
      answer: this.state.answer
    }
    addCard(currentDeck, card)
    navigation.goBack()
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.cardView}>
          <Field
            label="Question"
            value={this.state.question}
            onChangeText={question => this.setState({ question })}
          />
          <Field
            label="Answer"
            value={this.state.answer}
            onChangeText={answer => this.setState({ answer })}
          />
        </View>
        <View>
          <TouchableOpacity
            style={[styles.actionButton, styles.buttonPrimary]}
            onPress={() => this.saveCard()}
          >
            <Text style={styles.buttonTextPrimary}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  },
  cardView: {
    backgroundColor: colors.WHITE,
    paddingVertical: 160,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.LIGHTGRAY
  },
  buttonView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 20
  },
  actionButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 20,
    marginBottom: 15,
    height: 70,
    borderRadius: 140,
    width: width - 60,
    borderWidth: 1
  },
  buttonPrimary: {
    backgroundColor: colors.SEAGREEN,
    borderColor: colors.SEAGREEN
  },
  buttonTextPrimary: {
    color: colors.WHITE
  }
})

export default connect(null, { addCard })(CardNewView)
