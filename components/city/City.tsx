import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles_city'
import { get } from '../../utils/http'

import CityClass from './CityClass'
import CityList from './CityList'

interface Props {

}

interface State {
  curCity:any,
  lastVistCity:any,
  cityList:any
}

export default class City extends Component<Props,State> {
  state={
    curCity:{
      title:'定位城市',
      data:[{
      name:'定位失败,请点击重试',
      cityId:'000'
    }]},
    lastVistCity:{
      title:'最近访问',
      data:[{
        name:'北京',
        cityId:'0001'
      },{
        name:'杭州',
        cityId:'0002'
      }]
    },
    cityList:[]
  }

  async componentDidMount(){
    let result = await get('https://www.danke.com/web-api/base-configure/city-list')
    this.setState({
      cityList:result
    })
  }
  

  render() {
    return (
      <View
        style={{
          backgroundColor:'#ccc'
        }}
      >
        <View>
         <CityClass item={this.state.curCity}/> 
         <CityClass item={this.state.lastVistCity}/> 
         <CityList item={this.state.cityList}/>
        </View>
      </View>
    )
  }
}
