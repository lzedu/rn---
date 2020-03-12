import React, { Component } from 'react'
import { Carousel } from '@ant-design/react-native'
import { get } from '../../utils/http'
import { AsyncStorage } from 'react-native'

import {
  View,
  Image
} from 'react-native'

import styles from './style_home'

interface Props {

}

interface State {
  list: Array<any>
}

class Swiper extends Component<Props, State> {
  state = {
    list: []
  }
  async componentDidMount() {
    let cityId = await AsyncStorage.getItem('cityId')
    // console.log(cityId)
    let list = await get(`https://www.danke.com/web-api/home-page/banner?city_id=${cityId}`)
    this.setState({
      list
    })
  }

  render() {
    return (
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        autoplay
        infinite
        dotStyle={{backgroundColor:'#ccc'}}
        dotActiveStyle={{backgroundColor:'#3dbcc6',width:20,borderRadius:10}}
      >
        {
          this.state.list.slice(0, 5).map((value, index) => {
            return (
              <View
                style={styles.containerHorizontal}
                key={value.title}
              >
                <Image
                  source={{uri: value.image}}
                  style={styles.slideImg}
                ></Image>
              </View>
            )
          })
        }
      </Carousel>
    )
  }
}

export default Swiper