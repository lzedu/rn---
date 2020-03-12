import React, { Component } from 'react'
import TabNavigator from 'react-native-tab-navigator'
import * as Device from 'expo-device';
import { Provider } from '../../context/navigation'
import { observer, inject } from 'mobx-react'


import {
  View,
  Text
} from 'react-native'

import {
  Img
} from './styled_index'
import styles from './style_index'

import home from '../../assets/images/index.png'
import homeActive from '../../assets/images/index-active.png'
import profile from '../../assets/images/profile.png'
import profileActive from '../../assets/images/profile-active.png'
import cor from '../../assets/images/cor.png'
import corActive from '../../assets/images/cor-active.png'

import Home from '../home/Home'
import reduxStore from '../../redux/store'
import store from '../../store';

interface Props {
    navigation?: any,
    store: any,
    route:any
}

interface State {
  selectedTab: string
}

@inject('store')
@observer
class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  state: State = {
    selectedTab: 'home'
  }

  componentDidMount() {
    reduxStore.dispatch({
      type:'navigation',
      navigation:this.props.navigation
    })
  }

  render() {
    return (
      <Provider value={{...this.props}}>
        <TabNavigator
          tabBarStyle={Device.deviceName === 'iPhone Xʀ' ? styles.tabBarStyle : null}
        >
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="主页"
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Img source={home} />}
            renderSelectedIcon={() => <Img source={homeActive} />}
            onPress={() => {
              this.setState({ selectedTab: 'home' })
            }}
          >
            <Home></Home>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'category'}
            title="我的"
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Img source={profile} />}
            renderSelectedIcon={() => <Img source={profileActive} />}
            onPress={() => this.setState({ selectedTab: 'category' })}
          >
            {<View><Text>我的</Text></View>}
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'map'}
            title="加盟"
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Img source={cor} />}
            renderSelectedIcon={() => <Img source={corActive} />}
            onPress={() => this.setState({ selectedTab: 'map' })}
          >
            {<View><Text>加盟</Text></View>}
          </TabNavigator.Item>
        </TabNavigator>
      </Provider>
    )
  }
}

export default Index