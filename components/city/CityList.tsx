import React, { Component } from 'react'
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native'
import { Grid } from '@ant-design/react-native'

import reduxStore from '../../redux/store'
import { observer, inject } from 'mobx-react'
import { Store } from '../../store/index'

import styles from './styles_city'

interface Props {
  item:any[],
  store?:Store
}

interface State {
  navigation?:any
}

@inject('store')
@observer
class CityList extends Component<Props,State> {
  constructor(props){
    super(props)
  }
  state = {
    navigation:reduxStore.getState().navigation
  }
  compare(property) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
    }
  }
  changeArray(){
    this.props.item.sort(this.compare('code'))
  }
  componentDidMount(){
    this.changeArray()
    // console.log(this.props.item)
  }

  _render= (el,index)=>{
    // AsyncStorage.setItem('id',el.id)
      return (
        <TouchableOpacity
          // onPress={this._Press(el.id)}
        >
          <View
            style={{
              marginLeft:10
            }}
          >
            <Text
              style={{
                fontSize:15
              }}
            >
              {el.name}
            </Text>
          </View>
        </TouchableOpacity>
      )
  }
  _Press= (e)=>{
      this.props.store.setCity(e.id)
      this.state.navigation.push('Index',{
        cityname:e.shortName
      })
      // let lastVisit = AsyncStorage.getItem('lastVisit')
      // if(lastVisit){
      //   lastVisit.push({
      //     cityId:e.id,
      //     cityname:e.shortName
      //   })
      // }
      // AsyncStorage.setItem('lastVisit')
  }
  render() {
    return (
      <View>
        <View
            style={styles.titleStyle}
          >
          <Text style={{
            fontSize:16
          }}>
            所有城市
          </Text> 
        </View>
        <Grid
          data={this.props.item}
          columnNum={1}
          itemStyle={{
            height:40,
            backgroundColor:'#eee',
            justifyContent:'center'
          }}
          renderItem={this._render}
          onPress={this._Press}
        ></Grid>
      </View>
    )
  }
}

export default CityList