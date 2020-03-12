import 'react-native-gesture-handler';
import React from 'react'
import { AsyncStorage } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

import { Provider } from 'mobx-react'
import store from './store/index'


import Index from './pages/index/Index'
import Cate from './pages/cate/Cate'
import City from './components/city/City'
import List from './components/List/List'
import Detail from './components/detail/Detail'


export default function App() {
  if(! AsyncStorage.getItem('cityId')){
    store.setCity(store.cityId)
  }
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator 
        initialRouteName="Index"
        screenOptions={{
          headerStyle:{
            height:30,
            display:'none'
          }
        }}
      >
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Cate" component={Cate} />
        <Stack.Screen name="City" component={City} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}