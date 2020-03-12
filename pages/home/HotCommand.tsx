import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { get } from '../../utils/http'
import styles from './style_home'

import HotItem from './HotItem'
import Story from './Story'
interface Props {

}

interface State {
  corlist:any[],
  monlist:any[],
  title:any[],
  storylist:{}
}

export default class HotCommand extends Component<Props,State> {
  state = {
    corlist:[],
    monlist:[],
    title:[{
      name:'蛋壳合租',
      subtitle:'高档家居 高品质合租公寓'
    },{
      name:'蛋壳月租',
      subtitle:'租期您定 月租月轻松'
    }],
    storylist:[]
  }
  async componentDidMount(){
    let cityId = await AsyncStorage.getItem('cityId')
    let result = await get(`https://www.danke.com/web-api/home-page/home-data?city_id=${cityId}`)
    // let length = 
    this.setState({
      corlist:result[1].data,
      monlist:result[1].data,
      storylist:result[result.length-1]
    })
  } 
  
  render() {
    return (
      <View
        style={styles.hotComContainer}
      >
        <HotItem 
          list={this.state.corlist}
          title={this.state.title[0]} 
          ></HotItem>
        <HotItem 
          list={this.state.monlist}
          title={this.state.title[1]} 
          ></HotItem>
        <Story
          item={this.state.storylist}
        ></Story>
      </View>
    )
  }
}
