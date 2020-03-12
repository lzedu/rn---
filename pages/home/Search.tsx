import React, { Component } from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import search from '../../assets/images/search.png'

interface Props {

}
interface State {
  value:string
}

export default class Search extends Component<Props,State> {
  state = {
    value : ''
  } 
  _change = (value)=>{
    this.setState({
      value
    })
  }
  render() {
    return (
      <View style={{
        height:44,
        width:'100%',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center'
      }}>
        <View
          style={{
            height:35,
            width:'95%',
            backgroundColor:'#eee',
            borderRadius:30,
            justifyContent:'center',
            marginLeft:10,
            alignItems:'center',
            flexDirection:'row'
          }}
        >
          <Image 
            style={{
              width:20,
              height:20
            }}
          source={search} />
          <TextInput 
            style={{
              fontSize:14,
              marginLeft:20
            }}
            placeholder="输入您想居住的区域、商圈或小区名称"
          value={this.state.value}
          onChange={this._change}
          ></TextInput>
        </View>
      </View>
    )
  }
}
