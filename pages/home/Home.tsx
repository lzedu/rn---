import React, { Component } from 'react'
import Swiper from './Swiper'
import Site from './Site'
import Search from './Search'
import Nav from './Nav'
import HotCommand from './HotCommand'
import { ScrollView } from 'react-native'
interface Props {
  
}

interface State {
  list: Array<any>
}

class Home extends Component<Props, State> {
  
  render() {
    return (
      <>
      <ScrollView>
        <Site></Site>
        <Search></Search>
        <Swiper></Swiper>
        <Nav></Nav>
        <HotCommand></HotCommand>
      </ScrollView>
      </>
    )
  }
}

export default Home