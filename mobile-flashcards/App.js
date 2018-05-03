import React, { Component } from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { View, Platform, StatusBar } from 'react-native'

import createHistory from 'history/createMemoryHistory'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'

import { Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'

import DeckList from './modules/deck_list/DeckListView'
import DeckNew from './modules/deck_new/DeckNewView'

import * as colors from './utils/colors'

const history = createHistory()

function FlashCardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const FlashCardTabs = TabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-albums" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: DeckNew,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-add-circle" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: colors.LIGHTPURPLE,
      inactiveTintColor: colors.SUPERGRAY
    },
    showIcon: true,
    showLabel: true,
    animationEnabled: false,
    swipeEnabled: false
  }
)

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashCardsStatusBar
            backgroundColor={colors.LIGHTPURPLE}
            barStyle="light-content"
          />
          <FlashCardTabs />
        </View>
      </Provider>
    )
  }
}
