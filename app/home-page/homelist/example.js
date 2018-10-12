import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class Example extends Component{


  render(){
    return(
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={{fontSize:15,color:'#fff',fontWeight: 'bold'}}>商家黑榜排行榜</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyList}>
          <Text style={{fontSize:16,color:'#C10C0C',fontWeight:'bold'}}>1</Text>
          <View style={styles.listText}>
            <View style={{display:'flex',flexDirection:'row',justifyContent: 'flex-start',alignItems: 'center'}}>
              <Image source={require('../../image/banner-2x.jpg')}
                     style={{width:50,height:50,borderRadius: 50,}}/>
              <Text style={{fontSize:16,color:'#000',paddingLeft:10,}}>享骑单车</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:"flex-start",alignItems:'center'}}>
              <Image source={require('../../image/fire.png')}
                     style={{width:10,height:10,}}/>
              <Text style={{fontSize:15,color:'#C10C0C',paddingLeft:10}}>2234</Text>
            </View>
          </View>
        </View>
        <View style={styles.bodyList}>
          <Text style={{fontSize:16,color:'#C10C0C',fontWeight:'bold'}}>2</Text>
          <View style={styles.listText}>
            <View style={{display:'flex',flexDirection:'row',justifyContent: 'flex-start',alignItems: 'center'}}>
              <Image source={require('../../image/banner-4x.jpg')}
                     style={{width:50,height:50,borderRadius: 50,}}/>
              <Text style={{fontSize:16,color:'#000',paddingLeft:10,}}>享骑单车</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:"flex-start",alignItems:'center'}}>
              <Image source={require('../../image/fire.png')}
                     style={{width:10,height:10,}}/>
              <Text style={{fontSize:15,color:'#C10C0C',paddingLeft:10}}>2234</Text>
            </View>
          </View>
        </View>
        <View style={styles.bodyList}>
          <Text style={{fontSize:16,color:'#C10C0C',fontWeight:'bold'}}>3</Text>
          <View style={styles.listText}>
            <View style={{display:'flex',flexDirection:'row',justifyContent: 'flex-start',alignItems: 'center'}}>
              <Image source={require('../../image/banner-2x.jpg')}
                     style={{width:50,height:50,borderRadius: 50,}}/>
              <Text style={{fontSize:16,color:'#000',paddingLeft:10,}}>享骑单车</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:"flex-start",alignItems:'center'}}>
              <Image source={require('../../image/fire.png')}
                     style={{width:10,height:10,}}/>
              <Text style={{fontSize:15,color:'#C10C0C',paddingLeft:10}}>2234</Text>
            </View>
          </View>
        </View>
        <View style={styles.bodyList}>
          <Text style={{fontSize:16,color:'#C10C0C',fontWeight:'bold'}}>4</Text>
          <View style={styles.listText}>
            <View style={{display:'flex',flexDirection:'row',justifyContent: 'flex-start',alignItems: 'center'}}>
              <Image source={require('../../image/banner-4x.jpg')}
                     style={{width:50,height:50,borderRadius: 50,}}/>
              <Text style={{fontSize:16,color:'#000',paddingLeft:10,}}>享骑单车</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:"flex-start",alignItems:'center'}}>
              <Image source={require('../../image/fire.png')}
                     style={{width:10,height:10,}}/>
              <Text style={{fontSize:15,color:'#C10C0C',paddingLeft:10}}>2234</Text>
            </View>
          </View>
        </View>
        <View style={styles.bodyList}>
          <Text style={{fontSize:16,color:'#C10C0C',fontWeight:'bold'}}>5</Text>
          <View style={styles.listText}>
            <View style={{display:'flex',flexDirection:'row',justifyContent: 'flex-start',alignItems: 'center'}}>
              <Image source={require('../../image/banner-2x.jpg')}
                     style={{width:50,height:50,borderRadius: 50,}}/>
              <Text style={{fontSize:16,color:'#000',paddingLeft:10,}}>享骑单车</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:"flex-start",alignItems:'center'}}>
              <Image source={require('../../image/fire.png')}
                     style={{width:10,height:10,}}/>
              <Text style={{fontSize:15,color:'#C10C0C',paddingLeft:10}}>2234</Text>
            </View>
          </View>
        </View>

      </View>
    </View>


    )
  }
}

const styles=StyleSheet.create({
  listText:{
    display:'flex',
    flexDirection:'row',
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:10,

  },
  bodyList:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
    borderBottomWidth: 2,
    borderBottomColor:'#eee',
  },
  body:{
    display:'flex',
    flexDirection:'column',
    flex:1,
    backgroundColor:'#fff',
    paddingLeft:10,
    paddingRight:10,

  },
  headContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#C10C0C',
    borderRadius:5,
    paddingTop:6,
    paddingBottom:6,
    paddingLeft:10,
    paddingRight:10,

  },
  container:{
    display:'flex',
    flexDirection: 'column',
    flex:1,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    backgroundColor: '#eee',
  }
})