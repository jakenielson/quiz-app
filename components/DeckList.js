import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DeckListItem from './DeckListItem';
import Header from './Header';
import { white, blue, orange } from '../utils/colors';
import { NavigationActions } from 'react-navigation';

export default class DeckList extends Component {
  state = {
    decks: [
      {
        id: 1,
        name: 'Test 1',
      },
      {
        id: 2,
        name: 'Test 2',
      },
      {
        id: 3,
        name: 'Test 3',
      },
      {
        id: 4,
        name: 'Test 4',
      },
      {
        id: 5,
        name: 'Test 5',
      },
      {
        id: 6,
        name: 'Test 6',
      },
    ],
  }

  onPress = (deck) => {
    this.props.navigation.navigate(
      'DeckView',
      {deck: deck}
    )
  }

  render() {
    const { decks } = this.state;
    return (
      <View style={styles.container}>
        <Header nav='NewDeck' title='QuizApp' />
        <ScrollView style={styles.scrollView}>
          {decks.map((deck) => (
            <DeckListItem onPress={this.onPress} deck={deck} key={deck.id}/>
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0
  },
  scrollView: {
    backgroundColor: blue,
  }
})
