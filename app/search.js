import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image, ScrollView} from 'react-native'
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'

export default class Search extends Component {
  render() {
    // const tabUnderlineStyle = {
    //   position: 'absolute',
    //   width: containerWidth / numberOfTabs,
    //   height: 4,
    //   backgroundColor: 'navy',
    //   bottom: 0,
    // };
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TextInput placeholder={'搜话题 / 帖子 / 文章'}
                     underlineColorAndroid={'transparent'}
                     style={{
                       width: 330,
                       height: 40,
                       padding: 0,
                       backgroundColor: '#eee',
                       fontSize: 14,
                       borderRadius: 50,
                       paddingLeft: 40,
                     }}/>
          <Image source={require('./image/search.png')}
                 style={{width: 20, height: 20, position: 'absolute', top: 11, left: 10}}/>
          <Image source={require('./image/close-2x.png')}
                 style={{width: 22, height: 22, position: 'absolute', top: 10, left: 300}}/>
          <Text style={{fontSize:15,color:'#000',fontWeight: 'bold',paddingTop:10}}>搜索</Text>
        </View>

        <ScrollableTabView
          locked={true}
          style={{flex: 1,marginTop:15,}}
          scrollWithoutAnimation={true}
          tabBarUnderlineStyle={{backgroundColor: '#C10C0C',width:20,marginLeft:50}}
          tabBarBackgroundColor='#F9F9F9'
          tabBarActiveTextColor='#000'
          tabBarInactiveTextColor='#000'
          tabBarTextStyle={{fontSize: 15}}
          renderTabBar={() => <DefaultTabBar/>}>
          <ScrollView tabLabel='话题' style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>这是话题的搜索结果</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel='帖子'>
            <View styles={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{fontSize: 20}}>这是帖子的搜索结果</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel='文章'>
            <View styles={{
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{fontSize: 20}}>这是文章的搜索结果</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>


      </View>
    )


  }
}

const styles = StyleSheet.create({
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,

  },
})