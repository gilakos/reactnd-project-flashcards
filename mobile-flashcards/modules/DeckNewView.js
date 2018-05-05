import React, { Component } from 'react'
import {
  Dimensions,
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Navigation, Card } from 'react-router-navigation'
const uuid = require('uuid/v4')

import { connect } from 'react-redux'
import { addDeck } from '../redux/actions'

import Field from '../components/FieldItem'

import * as colors from '../utils/colors'

class DeckNewView extends Component {
  state = {
    title: ''
  }
  saveDeck() {
    const { navigation, addDeck } = this.props
    const deck = {
      title: this.state.title,
      id: uuid(),
    }
    addDeck(deck)
    navigation.navigate('Decks')
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.deckView}>
          <Text style={styles.deckTitle}>
            What is the title of your new deck?
          </Text>
          <Field
            label="Title"
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
          />
        </View>
        <View>
          <TouchableOpacity
            style={[styles.actionButton, styles.buttonPrimary]}
            onPress={() => this.saveDeck()}
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
    color: colors.LIGHTPURPLE,
    paddingBottom: 20,
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

function mapStateToProps({ decks }) {
	return {
		decks
	}
}

export default connect(mapStateToProps, { addDeck })(DeckNewView)
