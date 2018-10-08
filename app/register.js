import React, {Component} from 'react';
// import {BoxShadow} from 'react-native-shnpmadow'
import {AppRegistry, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchBody}>
          <View style={styles.textTop}>
            <Text style={{fontSize: 15}}>新用户注册</Text>
          </View>

          <View style={styles.topInput}>
            <Text style={{color: '#333333'}}>注册账号</Text>
            <TextInput
              style={{flex: 1, padding: 0, paddingLeft: 130, fontSize: 13}}
              underlineColorAndroid={'transparent'}
              placeholder={'请输入手机号...'}
            />
          </View>

          <View style={styles.middleInput}>
              <TouchableOpacity style={styles.leftBtn}>
                <Text style={{fontSize: 14, color: '#ffffff', fontWeight: 'bold'}}>获取验证码</Text>
              </TouchableOpacity>
            <View style={styles.rightInput}>
              <TextInput
                style={{padding: 0, fontSize: 13, paddingLeft: 15}}
                underlineColorAndroid={'transparent'}
                placeholder={'F6HT80'}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View >
            <TouchableOpacity style={styles.bottomBtn}>
              <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold'}}>我填好了</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  searchBody: {
    display: 'flex',
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 13,
    paddingRight: 13,
    marginTop: 65,
    borderRadius: 5,
    elevation: 5,
    shadowColor:'#F1F1F1',
    shadowOffset:{h:50,w:50},
    shadowOpacity:0,
  },
  textTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'PingFangSC-Regular',
    fontSize: 15,
    color: '#333333',
    paddingTop: 30,
    paddingBottom: 30,
  },
  topInput: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#eeeeee',
    borderRadius: 40,

  },
  middleInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,

  },
  leftBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A89FF',
    borderRadius: 40,
    width: 149,
    height: 40,
  },
  rightInput: {
    display: 'flex',
    paddingLeft: 37,
    paddingRight: 37,
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    borderRadius: 40,
    width: 149,
    height: 40,
  },
  bottom:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
  },
  bottomBtn: {
    display: 'flex',
    flexDirection: 'row',
   justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#FF6B88',
    borderRadius: 40,
    width: 150,
    height: 40,
  },

});