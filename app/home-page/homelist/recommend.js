import React,{Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'

export default class Recommend extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={{display:'flex',flexDirection:'column',flex:1,marginTop:10,backgroundColor:'#fff'}}>
            <View style={{display:'flex',flexDirection:'row',   paddingLeft:10, paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
              <View style={styles.headContainer}>
                <Image source={require('../../image/banner-2x.jpg')}
                       style={{width:50,height:50,borderRadius:50}}/>
                <View style={styles.headText}>
                  <Text style={{fontSize:14,}}>非人哉漫画</Text>
                  <Text style={{fontSize:12,}}>09/28</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.attentionBtn}>
                <Text style={{fontSize:10,fontWeight:'bold',color:'#fff'}}>关注</Text>
              </TouchableOpacity>


            </View>

            <View style={styles.body}>
              <Text style={{fontSize:15,color:'#000'}}>#非人哉# #万圣街# #有兽焉# 非人哉首届神仙cp站开始啦！
                为了世界与和平，贯彻爱的力量，小伙伴们快来为自家cp站一下~
                戳图获取参与方式~ ​​​​
                本活动由weibo@非人哉同人主页 主办</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('../../image/ceshi-img.jpg')}
                     style={{width:126,height:165,marginLeft:2,marginTop:5}}/>
              <Image source={require('../../image/ceshi-img.jpg')}
                     style={{width:126,height:165,marginLeft:2,marginTop:5}}/>
              <Image source={require('../../image/ceshi-img.jpg')}
                     style={{width:126,height:165,marginLeft:2,marginTop:5}}/>
              <Image source={require('../../image/ceshi-img.jpg')}
                     style={{width:126,height:165,marginLeft:2,marginTop:5}}/>
              <Image source={require('../../image/ceshi-img2.jpg')}
                     style={{width:126,height:165,marginLeft:2,marginTop:5}}/>
              <Image source={require('../../image/ceshi-img2.jpg')}
                     style={{width:126,height:165,marginLeft:2,marginTop:5}}/>
              <Image source={require('../../image/ceshi-img2.jpg')}
                     style={{width:126,height:165,marginLeft:2,marginTop:5}}/>
              <Image source={require('../../image/ceshi-img2.jpg')}
                     style={{width:126,height:165,marginLeft:2,marginTop:5}}/>
              <Image source={require('../../image/ceshi-img2.jpg')}
                     style={{width:126,height:165,marginLeft:2,marginTop:5}}/>
            </View>
            <View style={{display:'flex',flexDirection:'column',flex:1,paddingLeft:10,paddingRight:10,}}>
              <View style={styles.bottomContainer}>
                <View style={styles.topText}>
                  <Image source={require('../../image/hot-fire.png')}
                         style={{width:20,height:20,}}/>
                  <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Image source={require('../../image/hot-icon.png')}
                           style={{width:20,height:20,}}/>
                    <Text style={{fontSize:10,paddingLeft:5}}>1.9W</Text>
                  </View>
                </View>

                <Text style={{fontSize:10,color:'#000',paddingBottom:10}}>真的就这个智商基本就告别单反了</Text>

              </View>
              <View style={styles.bottomNav}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                  <Image source={require('../../image/share.png')}
                         style={{width:20,height:20}}
                  />
                  <Text style={{fontSize:12,paddingLeft:8}}>1882</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                  <Image source={require('../../image/talk.png')}
                         style={{width:20,height:20}}
                  />
                  <Text style={{fontSize:12,paddingLeft:8}}>1882</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                  <Image source={require('../../image/heart.png')}
                         style={{width:20,height:20}}
                  />
                  <Text style={{fontSize:12,paddingLeft:8}}>1882</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{display:'flex',flexDirection:'column',flex:1,marginTop:10,backgroundColor:'#fff'}}>
            <View style={{display:'flex',flexDirection:'row',   paddingLeft:10, paddingRight:10,justifyContent:'space-between',alignItems:'center'}}>
              <View style={styles.headContainer}>
                <Image source={require('../../image/banner-2x.jpg')}
                       style={{width:50,height:50,borderRadius:50}}/>
                <View style={styles.headText}>
                  <Text style={{fontSize:14,}}>非人哉漫画</Text>
                  <Text style={{fontSize:12,}}>09/28</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.attentionBtn}>
                <Text style={{fontSize:10,fontWeight:'bold',color:'#fff'}}>关注</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.body}>
              <Text style={{fontSize:15,color:'#000'}}>#非人哉# #万圣街# #有兽焉# 非人哉首届神仙cp站开始啦！</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image source={require('../../image/ceshi-img.jpg')}
                     style={{width:126,height:165,marginLeft:2,marginTop:5}}/>
            </View>
            <View style={{display:'flex',flexDirection:'column',flex:1,paddingLeft:10,paddingRight:10,}}>
              <View style={styles.bottomContainer}>
                <View style={styles.topText}>
                  <Image source={require('../../image/hot-fire.png')}
                         style={{width:20,height:20,}}/>
                  <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Image source={require('../../image/hot-icon.png')}
                           style={{width:20,height:20,}}/>
                    <Text style={{fontSize:10,paddingLeft:5}}>1.9W</Text>
                  </View>
                </View>

                <Text style={{fontSize:10,color:'#000',paddingBottom:10}}>真的就这个智商基本就告别单反了</Text>

              </View>
              <View style={styles.bottomNav}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                  <Image source={require('../../image/share.png')}
                         style={{width:20,height:20}}
                  />
                  <Text style={{fontSize:12,paddingLeft:8}}>1882</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                  <Image source={require('../../image/talk.png')}
                         style={{width:20,height:20}}
                  />
                  <Text style={{fontSize:12,paddingLeft:8}}>1882</Text>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                  <Image source={require('../../image/heart.png')}
                         style={{width:20,height:20}}
                  />
                  <Text style={{fontSize:12,paddingLeft:8}}>1882</Text>
                </View>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>


    )
  }
}
const styles = StyleSheet.create({
  attentionBtn:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    width:50,
    height:30,
    backgroundColor:'#C10C0C',
    borderRadius:3
  },
  bottomNav:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
  },
  topText:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,

  },
  bottomContainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    backgroundColor:'#eee',
    borderRadius: 5,
    paddingLeft:10,
    paddingRight:10,
    marginTop:10,

  },
  imageContainer:{
    display:'flex',
    flexDirection:'row',
    flexWrap: 'wrap',

    paddingLeft:5
  },
  body:{
    display:'flex',
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
  },
  headText:{
    display:'flex',
    flexDirection:'column',
    flex:1,
    marginLeft:10,
  },
  headContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    flex:1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#eee'

  },
})