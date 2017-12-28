import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import DeckView from './components/DeckView';
import QuizView from './components/QuizView';
import NewCard from './components/NewCard';
import { purple } from './utils/colors';
import { Constants } from 'expo';

function QuizStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
  },
  NewDeck: {
    screen: NewDeck,
  },
  // DeckView
  // QuizView
  NewCard: {
    screen: NewCard,
  }
},
{
  headerMode: 'none',
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <QuizStatusBar backgroundColor={purple} barStyle='light-content' />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
