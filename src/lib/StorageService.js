import { AsyncStorage } from 'react-native';



function set (key, data) {
  return AsyncStorage.setItem(key, data)
}

function get (key) {
  return AsyncStorage.getItem(key)
}


export default {
  set,
  get
}