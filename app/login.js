import React, {Component} from 'react';
// import {BoxShadow} from 'react-native-shnpmadow'
import {AppRegistry, StyleSheet, Text, View, TextInput,Image,TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchBody}>
          <View style={styles.textTop}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>登录</Text>
          </View>

          <View style={styles.topInput}>
            <Text style={{color: '#333333'}}>手机号</Text>
            <TextInput
              style={{width: 280, padding: 0, paddingLeft: 50, fontSize: 13}}
              underlineColorAndroid={'transparent'}
              placeholder={'请输入手机号...'}
            />
            <Image source={require("./image/phone.jpg")} style={{width:20,height:30,position:'absolute',left:320,top:3}}/>

          </View>
          <View style={{
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
            marginTop: 30,
            marginBottom: 30,
            position:'relative'
          }}>
            <Text style={{color: '#333333'}}>密码</Text>
            <TextInput
              style={{width: 280, padding: 0, paddingLeft: 50, fontSize: 13, marginLeft: 15,}}
              underlineColorAndroid={'transparent'}
              placeholder={'请输入密码...'}
            />
            <Image source={require("./image/pwd.jpg")} style={{width:20,height:30,position:'absolute',left:320,top:3}}/>

          </View>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.bottomBtn}>
              <Text  style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold'}}>忘记密码</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftBtn}>
              <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold'}}>确认登录</Text>
            </TouchableOpacity>
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
    shadowColor: '#F1F1F1',
    shadowOffset: {h: 50, w: 50},
    shadowOpacity: 0,
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
    position: 'relative',

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
  bottom: {
    display: 'flex',
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: 40,
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