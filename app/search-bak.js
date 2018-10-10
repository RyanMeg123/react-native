import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image,} from 'react-native'

export default class Search extends Component {
  render() {
    var searchArr=[];
    for(var i=0;i<6;i++){
      searchArr.push(
        <Text key={i} style={{width:170,paddingTop:10,color:'#333',fontSize:13,}}>这是关键字后活活活</Text>

      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <TextInput
            style={{
              width: 303,
              height: 30,
              padding: 0,
              backgroundColor: '#eee',
              fontSize: 13,
              borderRadius: 50,
              paddingLeft: 35,
            }}
            placeholder={'搜热帖、搜神贴'}
            underlineColorAndroid={'transparent'}

          />
          <Text style={{fontSize: 15, color: '#333', fontWeight: 'bold'}}>搜索</Text>
          <Image source={require('./image/search.png')}
                 style={{width: 15, height: 15, position: 'absolute', top: 15, left: 10, zIndex: 100}}/>
        </View>
        <View style={styles.containerBody}>
          <Text style={{color: '#aaa',fontSize:10,}}>热门搜索</Text>
          <View style={styles.bodyLeft}>
            <Text style={{color: '#aaa',fontSize:10,}}>换一批</Text>
            <Image source={require('./image/batch.png')} style={{width: 10, height: 10, marginLeft: 13}}/>
          </View>
        </View>
        <View style={styles.body}>
          {searchArr}
        </View>
        <View style={styles.containerBody}>
          <Text style={{color: '#aaa',fontSize:10,}}>历史记录</Text>
          <View style={styles.bodyLeft}>
            <Text style={{color: '#aaa',fontSize:10,}}>全部清空</Text>
            <Image source={require('./image/delete.png')} style={{width: 10, height: 10, marginLeft: 13}}/>
          </View>
        </View>
        <View style={styles.body}>
          {searchArr}
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 16,
    paddingRight: 16,

  },
  containerTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 7,
    paddingBottom: 7,
    marginTop:30

  },
  containerBody: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 10,
    marginTop:25,


  },
  bodyLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    flexWrap: 'wrap',
    marginTop: 5,
  }
})