import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DeckListItem from './DeckListItem';
import Header from './Header';

class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header nav='NewDeck' title='QuizApp' />
        <ScrollView style={styles.container}>
          {this.state.decks.map((deck) => {
            <DeckListItem deck={deck} />
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15
  }
})
