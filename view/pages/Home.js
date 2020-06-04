import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, AsyncStorage  } from 'react-native';


export default class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <View style={styles.view}>
        <Text style={styles.text}>首页一</Text>
        <TouchableOpacity style={styles.touch} onPress={()=>{this.props.navigation.navigate('TestPages')}}>
        <Text>本地存储</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
  },
  text: {
    width:100,
    height:50,
    textAlign:'center',
    justifyContent:'center',
  },
  touch:{
    width:200,
    height:50,
    marginTop:10,
    backgroundColor:'#0f0',
    justifyContent:'center',
    alignItems:'center',
  }
})