
{/* 基础模块 */}

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet, 
} from 'react-native'

export default class textVue extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <View style={styles.box}></View>
    )
  }
}


const styles = StyleSheet.create({
  box:{
    backgroundColor: red,
  }
});