import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DeckListItem from './DeckListItem';
import Header from './Header';
import { white, blue, orange } from '../utils/colors';

export default class DeckList extends Component {
  state = {
    decks: [
      {
        name: 'Test 1',
      },
      {
        name: 'Test 2',
      },
      {
        name: 'Test 3',
      },
      {
        name: 'Test 4',
      },
      {
        name: 'Test 5',
      },
      {
        name: 'Test 6',
      },
    ],
  }
  render() {
    const { decks } = this.state;
    return (
      <View style={styles.container}>
        <Header nav='NewDeck' title='QuizApp' />
        <ScrollView style={styles.scrollView}>
          {decks.map((deck) => (
            <DeckListItem deck={deck} key={deck.name}/>
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: blue,
  }
})
