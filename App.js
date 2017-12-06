import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import DeckView from './components/DeckView';
import QuizView from './components/QuizView';
import NewCard from './components/NewCard';

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList
  },
  NewDeck: {
    screen: NewDeck
  },
  DeckView: {
    screen: DeckView
  },
  QuizView: {
    screen: QuizView
  },
  NewCard: {
    screen: NewCard
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
