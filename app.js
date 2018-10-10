import React from 'react'
import {Text, View,Image} from 'react-native'
import {createBottomTabNavigator,TabNavigator} from 'react-navigation'
import Home from './app/home-page/home-page'
import Find from './app/find/find'
import Msg from './app/msg/msg'
import Information from './app/personal-information/home'
import Search from './app/search'

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('./app/image/searched.png')}
               style={{width:20,height:20,}}/>
      </View>
    )
  }
}


export default createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused?require('./app/image/homeing.png'):require('./app/image/homed.png')}
            style={{width:20,height:20,}}/>
        )
      }),
    },
    Find: {
      screen:Search,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '搜索',
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused?require('./app/image/searching.png'):require('./app/image/searched.png')}
            style={{width:20,height:20,}}/>
        )
      }),
    },
    Msg: {
      screen:Msg,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '发现',
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused?require('./app/image/msging.png'):require('./app/image/msged.png')}
            style={{width:20,height:20,}}/>
        )
      }),
    },
    Information: {
      screen:Information,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <Image
            source={focused?require('./app/image/informationing.png'):require('./app/image/informationed.png')}
            style={{width:20,height:20,}}/>
        )
      }),
    },
  },
  {  tabBarOptions: {
      style: {
        backgroundColor: '#C10C0C',
      },
      activeTintColor:'#000',
      inactiveTintColor:'#fff'
    }
  }

);
