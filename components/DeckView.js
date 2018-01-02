import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DeckListItem from './DeckListItem';
import Header from './Header';
import { white, blue, orange } from '../utils/colors';
import { NavigationActions } from 'react-navigation';

export default class DeckList extends Component {
  render() {
    const { deck } = this.props.navigation.state.params;
    const { goBack } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header goBack={() => goBack()} title={deck.name} />
        <View style={styles.content}>
          <Text style={styles.text}>
            {deck.name}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  content: {
    flex: 1,
    margin: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height: 50,
    padding: 30,
    paddingBottom: 50,
    textAlign: 'center',
    backgroundColor: blue,
    color: white,
  }
})
