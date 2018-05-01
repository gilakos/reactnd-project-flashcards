import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navigation, Card } from 'react-router-navigation'


export default class DeckIndividualView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Deck Individual View</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
