import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DeckListItem from './DeckListItem';
import Header from './Header';
import { white, blue, orange } from '../utils/colors';
import { NavigationActions } from 'react-navigation';

export default class DeckList extends Component {
  render() {
    const { deck } = this.props.navigation.state.params;

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
    margin: 0,
    padding: 0
  },
})
