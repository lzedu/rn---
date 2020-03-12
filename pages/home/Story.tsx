import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Grid } from '@ant-design/react-native'
import styles from './style_home'
interface Props {
  item:{}
}

interface State {

}

export default class Story extends Component<Props,State> {
  constructor(props){
    super(props)
  }
  _render(el,index){
    return (
      <View style={styles.storyItem}>
        <View>
          <Image 
            source={{uri:el.image}}
            style={styles.storyImage}
            ></Image>
        </View>
        <View style={styles.storyRightWrap}>
          <Text
            style={styles.storyRightTitle}
          >{el.title}</Text>
          <Text
            numberOfLines={3}
            style={styles.storyRightintro}
          >{el.intro}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View
        style={{
          marginRight:10,
          marginBottom:10
        }}
      >
        <View 
        style={styles.hotTitleWrap}
        >
          <View>
            <Text
              style={styles.titleWrap}
            >{this.props.item['title']}</Text>
          </View>
          <TouchableOpacity
            style={styles.lookmore}
            onPress={()=>{
              //去List页面
            }}
          >
            <Text>{this.props.item['sub_title']}</Text>
          </TouchableOpacity>
        </View>
        <View 
          style={{
            borderTopColor:'#999',
            borderTopWidth:1
          }}
        >
            <Grid
              itemStyle={{
                height:88,
                marginBottom:17
              }}
              hasLine={false}
              columnNum={1}
              data={this.props.item['data']}
              renderItem={this._render}
            ></Grid>
        </View>
      </View>
    )
  }
}
