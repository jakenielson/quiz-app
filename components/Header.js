import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { white, purple } from '../utils/colors';

export default class Header extends Component {
  render() {
    const { title, goBack } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {title}
        </Text>
        <TouchableOpacity onPress={goBack}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: purple,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    margin: 0,
    padding: 0
  }
})
