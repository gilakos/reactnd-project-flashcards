import React, { Component } from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { StackNavigator } from 'react-navigation'
import { View, Platform, StatusBar } from 'react-native'

import { Provider } from 'react-redux'
import store from './redux/store'

import { Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'

import DeckList from './modules/DeckListView'
import Deck from './modules/DeckIndividualView'
import DeckNew from './modules/DeckNewView'
import CardNew from './modules/CardNewView'
import DecQuiz from './modules/DeckQuizView'

import { setLocalNotification } from './utils/notifications'
import * as colors from './utils/colors'

console.disableYellowBox = true

function FlashCardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const FlashCardsNavigator = StackNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      title: 'Flash Cards',
      headerTintColor: colors.WHITE,
      headerStyle: {
        backgroundColor: colors.LIGHTPURPLE
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck',
      headerTintColor: colors.WHITE,
      headerStyle: {
        backgroundColor: colors.LIGHTPURPLE
      }
    }
  },
  NewDeck: {
    screen: DeckNew,
    navigationOptions: {
      title: 'New Flash Card Deck',
      headerTintColor: colors.WHITE,
      headerStyle: {
        backgroundColor: colors.LIGHTPURPLE
      }
    }
  },
  NewCard: {
    screen: CardNew,
    navigationOptions: {
      title: 'New Card',
      headerTintColor: colors.WHITE,
      headerStyle: {
        backgroundColor: colors.LIGHTPURPLE
      }
    }
  },
  Quiz: {
    screen: DecQuiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: colors.WHITE,
      headerStyle: {
        backgroundColor: colors.LIGHTPURPLE
      }
    }
  }
})

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <FlashCardsStatusBar
            backgroundColor={colors.LIGHTPURPLE}
            barStyle="light-content"
          />
          <FlashCardsNavigator />
        </View>
      </Provider>
    )
  }
}
