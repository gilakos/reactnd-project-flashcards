import React, { Component } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'
import { Navigation, Card } from 'react-router-navigation'
import _ from 'lodash'

import { connect } from 'react-redux'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../redux/actions'

import DeckItem from '../components/DeckItem'

import * as colors from '../utils/colors'

class DeckListView extends Component {
  state = {
    hasReceivedDecks: false
  }
  componentDidMount() {
    const { receiveDecks } = this.props
    fetchDecks()
      .then(decks => receiveDecks(decks))
      .then(this.setState({ hasReceivedDecks: true }))
  }
  render() {
    const { decks, navigation } = this.props
    const numberOfDecks = Object.keys(decks).length
    if (!this.state.hasReceivedDecks) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          {numberOfDecks > 0 ? (
            _.map(decks, deck => {
              return (
                <DeckItem deck={deck} navigation={navigation} key={deck.id} />
              )
            })
          ) : (
            <View style={styles.deckView}>
              <Text style={styles.deckTitle}>
                You do not currently have any flashcard decks.
                Click below to create one.</Text>
            </View>
          )}
        </ScrollView>
        <TouchableOpacity
          style={[styles.actionButton, styles.buttonPrimary]}
          onPress={() => navigation.navigate('NewDeck')}
        >
          <Text style={styles.buttonTextPrimary}>Add a New Deck</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, { receiveDecks })(DeckListView)
