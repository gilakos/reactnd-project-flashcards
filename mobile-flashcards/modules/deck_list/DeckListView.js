import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navigation, Card } from 'react-router-navigation'

export default class DeckListView extends Component {
  render() {
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
