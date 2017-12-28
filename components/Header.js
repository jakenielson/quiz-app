import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { white, purple } from '../utils/colors';

export default class Header extends Component {
  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <Text>
          {title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: purple,
    padding: 15
  }
})
