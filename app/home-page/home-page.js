
import React from 'react'
import {Text, View,Image} from 'react-native'
import {createBottomTabNavigator,createMaterialTopTabNavigator,TabNavigator} from 'react-navigation'
import Attentions from './homelist/attention'
import Recommend from './homelist/recommend'
import Video from './homelist/video'
import Picture from './homelist/picture'

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>这是 烦烦烦</Text>
      </View>
    )
  }
}
export default createMaterialTopTabNavigator(
  {
    // s:{
    //   screen:SettingsScreen,
    //   navigationOptions: ({ navigation }) => ({
    //     tabBarLabel:'',
    //     tabBarIcon: ({ focused, tintColor }) => (
    //       <Image source={require('../image/searching.png')}
    //              style={{width:20,height:20,}}/>
    //     )
    //   }),
    // },
    Attentions: {
      screen: Attentions,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '关注',
      }),
    },
    Recommend: {
      screen:Recommend,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '推荐',
      }),
    },
    Video: {
      screen:Video,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '排行榜',
      }),
    },
    Information: {
      screen:Picture,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '文章',
      }),
    },
  },
  {  tabBarOptions: {
      labelStyle: {
        // color:'#000',
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
        // color:'red'
      },
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle:{
        width:20,
        backgroundColor: 'red',
        marginLeft:40,
        height:3,
      },
      activeTintColor:'#000',
      inactiveTintColor:'#000'
    }
  }

);

