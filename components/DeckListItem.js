import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { white, red } from '../utils/colors';

export default class DeckListItem extends Component {
  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          {deck.name}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: red,
    padding: 15,
    height: 50
  }
})
