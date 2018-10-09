
import React from 'react'
import {Text, View,Image} from 'react-native'
import {createBottomTabNavigator,createMaterialTopTabNavigator,TabNavigator} from 'react-navigation'
import Attentions from './homelist/attention'
import Recommend from './homelist/recommend'
import Video from './homelist/video'
import Picture from './homelist/picture'

export default createMaterialTopTabNavigator(
  {
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
        tabBarLabel: '视频',
      }),
    },
    Information: {
      screen:Picture,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '图片',
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
      },
      style: {
        backgroundColor: '#fff',
      },
      activeTintColor:'#44BBBE',
      inactiveTintColor:'#be3f3b'
    }
  }

);


