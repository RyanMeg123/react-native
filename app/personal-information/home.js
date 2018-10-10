import React,{Component} from 'react'
import {ScrollView,View,Text,StyleSheet,Image,} from 'react-native'

export default class Information extends Component{
  render(){
    return (
      <ScrollView>
      <View style={styles.container}>
        <Image source={require('../image/bgimage.jpg')}
               style={{width:'100%',height:300}}/>
       <View style={styles.top}>
         <View style={styles.header}>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
               <Image source={require('../image/touxiang.jpeg')}
                      style={{width:80,height:80,borderRadius:50,borderWidth:3,borderColor:'#fff'}}/>
               <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                 <Image source={require('../image/gold-coin.png')}
                        style={{width:60,height:30}}/>
                 <Text style={{fontSize:10,color:'red',fontWeight:'bold',paddingTop:10}}>签到</Text>

               </View>
             </View>

           <View style={styles.headerName}>
             <Text style={{fontSize:15,color:'#fff',fontWeight: 'bold',}}>Ryan梅子</Text>
             <Image source={require('../image/boy.png')}
                    style={{width:20,height:20,marginLeft: 20,}}/>
           </View>
           <Text style={{fontSize:15,color:'#fff',fontWeight:'bold',paddingTop:10,paddingBottom:15,}}>这家伙很懒，什么都没写~</Text>
         </View>
         <View style={{display:'flex',flexDirection:'column', backgroundColor:'#EEEFF6',}}>
           <View style={styles.nav}>
             <View style={styles.navList}>
               <Text style={{fontSize:20,color:'#3B3C40',fontWeight:'bold',}}>0</Text>
               <Text style={{fontSize:15,color:'#AFB3BF'}}>获赞</Text>
             </View>
             <View style={styles.navList}>
               <Text style={{fontSize:20,color:'#3B3C40',fontWeight:'bold',}}>0</Text>
               <Text style={{fontSize:15,color:'#AFB3BF'}}>关注</Text>
             </View>
             <View style={styles.navList}>
               <Text style={{fontSize:20,color:'#3B3C40',fontWeight:'bold',}}>0</Text>
               <Text style={{fontSize:15,color:'#AFB3BF'}}>粉丝</Text>
             </View>
             <View style={styles.navList}>
               <Image source={require('../image/brush.png')}
                 style={{width:20,height:20,}}/>
               <Text style={{fontSize:15,color:'#AFB3BF'}}>个人资料</Text>
             </View>
           </View>
           <View style={styles.body}>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderBottomWidth: 1, borderColor:'#AFB3BF', paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10,}}>
                   <Image source={require('../image/icon-invitation.png')}
                          style={{width:20,height:20,}}
                   />
               <View style={{display:'flex',flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#2A2B2F',paddingLeft:20,}}>我的帖子</Text>
                 <Image source={require('../image/icon-arow.png')}
                        style={{width:20,height:20,}}/>
               </View>

             </View>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderBottomWidth: 1, borderColor:'#AFB3BF', paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10,}}>
               <Image source={require('../image/icon-msg.png')}
                      style={{width:20,height:20,}}
               />
               <View style={{display:'flex',flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#2A2B2F',paddingLeft:20,}}>我的消息</Text>
                 <Image source={require('../image/icon-arow.png')}
                        style={{width:20,height:20,}}/>
               </View>

             </View>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderBottomWidth: 1, borderColor:'#AFB3BF', paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10,}}>
               <Image source={require('../image/icon-friend.png')}
                      style={{width:20,height:20,}}
               />
               <View style={{display:'flex',flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#2A2B2F',paddingLeft:20,}}>我的关注</Text>
                 <Image source={require('../image/icon-arow.png')}
                        style={{width:20,height:20,}}/>
               </View>

             </View>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderBottomWidth: 1, borderColor:'#AFB3BF', paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10,}}>
               <Image source={require('../image/icon-@.png')}
                      style={{width:20,height:20,}}
               />
               <View style={{display:'flex',flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#2A2B2F',paddingLeft:20,}}>我的文章</Text>
                 <Image source={require('../image/icon-arow.png')}
                        style={{width:20,height:20,}}/>
               </View>

             </View>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center', borderBottomWidth: 1, borderColor:'#AFB3BF', paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10,}}>
               <Image source={require('../image/icon-person.png')}
                      style={{width:20,height:20,}}
               />
               <View style={{display:'flex',flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                 <Text style={{fontSize:15,fontWeight:'bold',color:'#2A2B2F',paddingLeft:20,}}>信息修改</Text>
                 <Image source={require('../image/icon-arow.png')}
                        style={{width:20,height:20,}}/>
               </View>

             </View>

           </View>
         </View>
       </View>
      </View>
      </ScrollView>
    )
  }
}

const styles=StyleSheet.create({
  body:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#fff',
    marginTop:10,


  },
  nav:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: '#fff',
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:10,

  },
  navList:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  headerName:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    marginTop:20,

  },
  header:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    paddingLeft:20,
    paddingRight:20,
  },
  top:{
    display:'flex',
    flexDirection: 'column',
    paddingTop:25,
    paddingBottom:25,
    marginTop:-230,

  },
  container:{
    display:'flex',
    flex:1,
    flexDirection:'column',
  },

})