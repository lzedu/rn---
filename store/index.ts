import { AsyncStorage } from 'react-native'

import {
  observable,
  action
} from 'mobx'

class Store {
  @observable
  list: Array<object> = []


  @action.bound
  setList(data: Array<object>) {
    this.list = data
  }
  @observable
  cityId: string = '3324'

  @observable
  cityname: string = '重庆'

  @action.bound
  setCity(status) {
    this.cityId = status
    AsyncStorage.setItem('cityId', status.toString())
  }

}

export default new Store()

export {
  Store
}