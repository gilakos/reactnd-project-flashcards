import React, { Component } from 'react'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createMemoryHistory'
import { Navigation, Card } from 'react-router-navigation'

import DeckList from './modules/deck_list/DeckListView'
import DeckIndividual from './modules/deck_individual/DeckIndividualView'

const history = createHistory()

export default class App extends Component {
  render() {
    return (
      <DeckList />
    )
  }
}
