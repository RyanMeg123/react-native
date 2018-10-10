import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native'

export default class Pwd extends Component {
  render () {
    // const shadowOPt = {
    //   width: 160,
    //   height: 170,
    //   color: '#000',
    //   border: 2,
    //   radius: 3,
    //   opacity: 0.2,
    //   x: 0,
    //   y: 3,
    //   style: {marginVertical: 5},
    // }
    return (
      <View style={styles.searchContainer}>
        {/*<BoxShadow setting={shadowOPt}>*/}
          <View style={styles.searchBody}>
            <View style={styles.textTop}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>验证码登录</Text>
            </View>

            <View style={styles.topInput}>
              <Text style={{color: '#333333'}}>手机号</Text>
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
        {/*</BoxShadow>*/}
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.bottomBtn}>
              <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold'}}>确认登录</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
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
    backgroundColor:'#C10C0C',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  bottomBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#242424',
    borderRadius: 40,
    width: 150,
    height: 40,
  },

})