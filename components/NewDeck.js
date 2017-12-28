import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DeckListItem from './DeckListItem';
import Header from './Header';
import { white } from '../utils/colors';

export default class NewDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header nav='home' title='New Deck' />
        <Text>Enter a name:</Text>
        <TextInput value={deckName} />
        <TouchableOpacity onPress={this.createDeck}/>
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
