import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'


export default class Msg extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          locked={true}
          style={{flex: 1}}
          scrollWithoutAnimation={true}
          tabBarUnderlineStyle={{backgroundColor: 'red', width: 20, marginLeft: 58}}
          tabBarBackgroundColor='#F9F9F9'
          tabBarActiveTextColor='#000'
          tabBarInactiveTextColor='#000'
          tabBarTextStyle={{fontSize: 15}}
          renderTabBar={() => <DefaultTabBar/>}
        >
          <View tabLabel='平台' style={{flex: 1}}>
            <View style={styles.navtabPlayForm}>
              <Image source={require('../image/banner-2x.jpg')}
                     style={{width: '100%', height: 120}}/>
              <View style={styles.playnav}>
                <TouchableOpacity style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  height: 40,
                  borderRadius: 6,
                  backgroundColor: '#eee',
                }}>
                  <Text>京东</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  height: 40,
                  borderRadius: 6,
                  backgroundColor: '#eee',
                }}>
                  <Text>淘宝</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  height: 40,
                  borderRadius: 6,
                  backgroundColor: '#eee',
                }}>
                  <Text>苏宁</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  height: 40,
                  borderRadius: 6,
                  backgroundColor: '#eee',
                }}>
                  <Text>更多</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.playBody}>
                <ScrollableTabView
                  locked={true}
                  style={{flex: 1,}}
                  scrollWithoutAnimation={true}
                  tabBarUnderlineStyle={{backgroundColor: 'red', width: 20, marginLeft: 93}}
                  tabBarBackgroundColor='#F9F9F9'
                  tabBarActiveTextColor='#000'
                  tabBarInactiveTextColor='#000'
                  tabBarTextStyle={{fontSize: 15}}
                  renderTabBar={() => <DefaultTabBar/>}
                >
                  <ScrollView tabLabel='最新推荐' style={{flex: 1,}}>
                    <View style={styles.bodyNew}>
                      <View style={styles.bodyText}>
                        <Text>如何做出良好的用户体验的动效设计</Text>
                        <View style={styles.newBottom}>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image source={require('../image/look.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>333浏览</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-like.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>22点赞</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-answer.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>40评论</Text>
                          </View>

                        </View>
                      </View>
                      <Image source={require('../image/pic.jpg')}
                              style={{width:150,height:90}}
                      />
                    </View>
                    <View style={styles.bodyNew}>
                      <View style={styles.bodyText}>
                        <Text>如何做出良好的用户体验的动效设计</Text>
                        <View style={styles.newBottom}>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image source={require('../image/look.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>333浏览</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-like.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>22点赞</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-answer.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>40评论</Text>
                          </View>

                        </View>
                      </View>
                      <Image source={require('../image/pic.jpg')}
                             style={{width:150,height:90}}
                      />
                    </View>
                    <View style={styles.bodyNew}>
                      <View style={styles.bodyText}>
                        <Text>如何做出良好的用户体验的动效设计</Text>
                        <View style={styles.newBottom}>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image source={require('../image/look.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>333浏览</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-like.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>22点赞</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-answer.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>40评论</Text>
                          </View>

                        </View>
                      </View>
                      <Image source={require('../image/pic.jpg')}
                             style={{width:150,height:90}}
                      />
                    </View>
                    <View style={styles.bodyNew}>
                      <View style={styles.bodyText}>
                        <Text>如何做出良好的用户体验的动效设计</Text>
                        <View style={styles.newBottom}>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image source={require('../image/look.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>333浏览</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-like.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>22点赞</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-answer.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>40评论</Text>
                          </View>

                        </View>
                      </View>
                      <Image source={require('../image/pic.jpg')}
                             style={{width:150,height:90}}
                      />
                    </View>
                    <View style={styles.bodyNew}>
                      <View style={styles.bodyText}>
                        <Text>如何做出良好的用户体验的动效设计</Text>
                        <View style={styles.newBottom}>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image source={require('../image/look.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>333浏览</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-like.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>22点赞</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-answer.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>40评论</Text>
                          </View>

                        </View>
                      </View>
                      <Image source={require('../image/pic.jpg')}
                             style={{width:150,height:90}}
                      />
                    </View>
                  </ScrollView>
                  <ScrollView tabLabel='最新文章' style={{flex: 1}}>
                    <View style={styles.bodyNew}>
                      <View style={styles.bodyText}>
                        <Text>如何做出良好的用户体验的动效设计</Text>
                        <View style={styles.newBottom}>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image source={require('../image/look.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>333浏览</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-like.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>22点赞</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-answer.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>40评论</Text>
                          </View>

                        </View>
                      </View>
                      <Image source={require('../image/pic.jpg')}
                             style={{width:150,height:90}}
                      />
                    </View>
                    <View style={styles.bodyNew}>
                      <View style={styles.bodyText}>
                        <Text>如何做出良好的用户体验的动效设计</Text>
                        <View style={styles.newBottom}>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image source={require('../image/look.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>333浏览</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-like.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>22点赞</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-answer.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>40评论</Text>
                          </View>

                        </View>
                      </View>
                      <Image source={require('../image/pic.jpg')}
                             style={{width:150,height:90}}
                      />
                    </View>
                    <View style={styles.bodyNew}>
                      <View style={styles.bodyText}>
                        <Text>如何做出良好的用户体验的动效设计</Text>
                        <View style={styles.newBottom}>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image source={require('../image/look.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>333浏览</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-like.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>22点赞</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-answer.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>40评论</Text>
                          </View>

                        </View>
                      </View>
                      <Image source={require('../image/pic.jpg')}
                             style={{width:150,height:90}}
                      />
                    </View>
                    <View style={styles.bodyNew}>
                      <View style={styles.bodyText}>
                        <Text>如何做出良好的用户体验的动效设计</Text>
                        <View style={styles.newBottom}>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image source={require('../image/look.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>333浏览</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-like.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>22点赞</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-answer.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>40评论</Text>
                          </View>

                        </View>
                      </View>
                      <Image source={require('../image/pic.jpg')}
                             style={{width:150,height:90}}
                      />
                    </View>
                    <View style={styles.bodyNew}>
                      <View style={styles.bodyText}>
                        <Text>如何做出良好的用户体验的动效设计</Text>
                        <View style={styles.newBottom}>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                            <Image source={require('../image/look.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>333浏览</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-like.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>22点赞</Text>
                          </View>
                          <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}>
                            <Image source={require('../image/icon-answer.png')}
                                   style={{width: 15, height: 15}}/>
                            <Text style={{paddingLeft: 5}}>40评论</Text>
                          </View>

                        </View>
                      </View>
                      <Image source={require('../image/pic.jpg')}
                             style={{width:150,height:90}}
                      />
                    </View>
                  </ScrollView>
                </ScrollableTabView>
              </View>

            </View>
          </View>
          <ScrollView tabLabel='活动' style={{flex: 1}}>
            <Image source={require('../image/homed.png')}/>
          </ScrollView>
          <ScrollView tabLabel='法律' style={{flex: 1}}>
            <Text>ddd</Text>
          </ScrollView>
        </ScrollableTabView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  newBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,

  },
  bodyText:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',

  },
  bodyNew: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    borderBottomWidth: 2,
    borderBottomColor:'#eee',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  playBody: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  playnav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: '#fff',
  },
  navtabPlayForm: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',

  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',

  },


})