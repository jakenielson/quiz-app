import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { white, red } from '../utils/colors';

export default class DeckListItem extends Component {
  render() {
    const { deck, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={() => onPress(deck)}
        style={styles.container}>
        <Text>
          {deck.name}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: red,
    padding: 15,
    margin: 10
  }
})
