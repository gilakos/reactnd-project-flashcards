import React, { Component } from 'react'
import {
  ActivityIndicator,
  View,
  ScrollView,
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
    const { dispatch } = this.props
    fetchDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(this.setState({ hasReceivedDecks: true }))
  }
  render() {
    const { decks } = this.props
    const numberOfDecks = Object.keys(decks).length
    console.log(decks)
    console.log(numberOfDecks)
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
              console.log(deck)
              return <DeckItem title={deck.title} num_cards={deck.questions.length}/>
            })
          ) : (
            <Text>
              You do not currently have any flashcard decks. Click below to
              create one.
            </Text>
          )}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE
  }
})

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps, { fetchDecks })(DeckListView)
