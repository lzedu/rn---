import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { get } from '../../utils/http'
import { Grid } from '@ant-design/react-native'
import styles from './style_home'
import { Consumer } from '../../context/navigation'

interface Props {
}
interface State {
  list:any[]
}


export default class Nav extends Component<Props,State> {
  state = {
    list:[
      {
        title:'合租',
        image:'https://public.danke.com.cn/public-20180319-Fv-CS5LQX0-HuOrLTN_0xPELxwfL'
      },
      {
        title:'整租',
        image:'https://public.danke.com.cn/public-20180319-FpCn5y1oJiqxcN3oyQdIgXaDh2oA'
      },
      {
        title:'业主加盟',
        image:'https://public.danke.com.cn/public-20180319-FtStiZtciRuNxrVVNqwhmh8KSYhD'
      },
      {
        title:'房源定制',
        image:'https://public.danke.com.cn/public-20181204-FopgEsrtTlQ528ELuxmxN4CRXx-6'
      }
    ]
  }
  _render=(el,index)=>{
    return (
      //navItem
      <View 
        style={styles.NavItemWrap}
      >
        <Image 
          source={{uri:el.image}}
          style={styles.navImage}
        ></Image>
        <Text>{el.title}</Text>
      </View>
    )
  }
  _onpress = (navigation) =>{
    // console.log(navigation)
    return ()=>{
      // navigation.push('List')
    }
  }
  componentDidMount(){
  }
  render() {
    return (
      <View>
        <View>
          <Consumer>
            {
              (navigation)=>{
                return (<Grid
                  data={this.state.list}
                  itemStyle={styles.NavItem}
                  renderItem={this._render}
                  hasLine={false}
                  onPress={this._onpress(navigation)}
                ></Grid>)
              }
            }
          </Consumer>
        </View>
      </View>
    )
  }
}
