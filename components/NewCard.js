import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DeckListItem from './DeckListItem';
import Header from './Header';
import { white } from '../utils/colors';

export default class NewCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header nav='DeckView' title='New Card' />
        <Text>Question:</Text>
        <TextInput value={question} />
        <Text>Answer:</Text>
        <TextInput value={answer} />
        <TouchableOpacity onPress={this.createCard}/>
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
