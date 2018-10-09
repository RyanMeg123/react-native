import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class Attentions extends Component{
  render(){
    return(
      <View style={{display:'flex',flex:1,justifyContent: 'center',alignItems: 'center',flexDirection: 'column'}}>
        <Text style={{fontSize:40,}}>这是首页的关注</Text>
      </View>


    )
  }
}