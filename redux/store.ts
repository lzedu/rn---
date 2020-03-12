import { createStore } from 'redux'

let defaultVale = {
  navigation:null
}

function reducer (state=defaultVale,action){
  switch(action.type){
    case 'navigation':
      return {
        navigation:action.navigation
      }
    default:
      return state
  }
}

let store = createStore(reducer)

store.dispatch({
  type:'navigation',
  navigation:'aaa'
})

export default store