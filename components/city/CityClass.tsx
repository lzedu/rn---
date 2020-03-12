import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles_city.js'
import { Grid } from '@ant-design/react-native'

interface Props {
  item?:any
}

interface State {

}

export default class CityClass extends Component<Props,State> {
  constructor(props){
    super(props)
  }
  _location(){

  }

  _renderCity= (el,index)=>{
    return (
      <View style={{
        backgroundColor:'#FFF',
        alignItems:'center',
        height:34,
        justifyContent:'center'
        }}>
        <Text
          style={{
            fontSize:16
          }}
        >
          {el.name}
        </Text>
      </View>
    )
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
            {this.props.item.title}
          </Text> 
        </View>
          <TouchableOpacity
              onPress={this._location}
            >
              <View
                style={styles.cityItemWrap}
              >
                <Grid
                  data={this.props.item.data}
                  columnNum={3}
                  itemStyle={styles.cityGrid}
                  renderItem={this._renderCity}
                  hasLine={false}
                >
                </Grid>
              </View>
            </TouchableOpacity>
      </View>
    )
  }
}
