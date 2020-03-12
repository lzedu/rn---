import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { navigationContext } from '../../context/navigation'
import { inject, observer } from 'mobx-react'
import styles from './style_home'
import { Consumer} from '../../context/navigation'

import location from '../../assets/images/location.png'

interface Props {
  store?:any,
  route?:any
}
interface State {
  cityname:string
}


@inject('store')
@observer
class Site extends Component<Props,State> {
  constructor(props){
    super(props)
  }
  static contextType = navigationContext
  state ={
    cityname:this.props.store.cityname
  }
  _chooseCity = (navigation) =>{
    return ()=>{
      navigation.push('City')
    }
  }
  componentDidMount(){
    let param = this.context.route.params
    if(param){
      this.setState({
        cityname:param.cityname
      })
    }
  }
  render() {
    return (

        <View style={styles.siteContainer}>
          <View style={styles.siteLogoWrap}>
            <Image 
              style={styles.siteLogoImage} 
              source={{uri:'http://public.danke.com.cn/public-20171231-FsRYcCtsOytIYH7C5nZCiLvaWQ1H'}}/>
          </View>
          <View
            style={{
              width:74,
              height:19,
              backgroundColor:'#fff',
              marginLeft:16,
              borderRadius:20
            }}
          >
            <Consumer>
            {
              ({navigation})=>{
                return(
                  <TouchableOpacity
                    onPress={this._chooseCity(navigation)}               
                    >
                    <View
                      style={{
                        width:'100%',
                        // flex:1,
                        flexDirection:'row'
                      }}
                    >
                      <Image 
                        style={{
                          height:20,
                          width:20,
                          marginLeft:5
                        }}
                      source={location}/>
                      <Text
                        style={{
                          marginLeft:5,
                          color:'#3dbcc6'
                        }}
                      >{this.state.cityname}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }  
            }
            </Consumer>
          </View>
        </View>
    )
  }
}

export default Site