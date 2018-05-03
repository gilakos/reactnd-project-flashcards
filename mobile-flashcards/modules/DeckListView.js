import React, { Component } from 'react'
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native'
import { Navigation, Card } from 'react-router-navigation'

import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../redux/actions'

export default class DeckListView extends Component {
  state = {
    hasReceivedDecks: false
  }
  componentWillMount() {
    fetchDecks()
      .then(decks => receiveDecks(decks))
      .then(this.setState({ hasReceivedDecks: true }))
  }
  render() {
    if (!this.state.hasReceivedDecks) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>Deck List View</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
