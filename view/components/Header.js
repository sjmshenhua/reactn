import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default  class Header extends Component{
  render() {
    return (
      <>
        <Text style={styles.header}>首页</Text>
      </>
    )
  };
}

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 20,
    width: '100%',
    lineHeight: 40,
    backgroundColor: 'powderblue',
    textAlign: 'center',
  }
})