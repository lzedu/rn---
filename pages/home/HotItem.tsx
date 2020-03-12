import React, { Component } from 'react'
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import styles from './style_home'

import reduxStore from '../../redux/store'


interface Props {
  list:any[],
  title:{}
}

interface State {
  navigation:any
}


export default class HotItem extends Component<Props,State> {
  constructor(props){
    super(props)
  }
  state = {
    navigation:reduxStore.getState().navigation
  }
  _render=(rowData)=>{
    let { item } = rowData
    return (
      <TouchableOpacity
        onPress={
          ()=>{
            this.state.navigation.push('Detail')
          }
        }
      >
        <View style={styles.hotItemWrap}>
          <Image 
            source={{uri:item.image}}
            style={styles.itemImage}
            />
          <Text
            numberOfLines={1}
            style={styles.namestyle}
          >{item.title}</Text>
          <Text
            style={styles.pricestyle}
          >{item.image_title}<Text style={styles.pricecount}> 元/ 月</Text></Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View>
        <View 
        style={styles.hotTitleWrap}
        >
          <View>
            <Text
              style={styles.titleWrap}
            >{this.props.title['name']}</Text>
            <Text
              style={styles.subTitleWrap}
            >{this.props.title['subtitle']}</Text>
          </View>
          <TouchableOpacity
            style={styles.lookmore}
            onPress={()=>{
              this.state.navigation.push('List')
            }}
          >
            <Text>查看更多</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={true}
        >
          <FlatList
              data={this.props.list}
              horizontal={true}
              renderItem={this._render}
            ></FlatList>
        </ScrollView>
      </View>
    )
  }
}
