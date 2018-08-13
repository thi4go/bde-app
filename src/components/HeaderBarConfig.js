import React from 'react'
import { View, Image } from 'react-native'


export default headerBarConfig = {
  headerTitle: (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../assets/img/003.png')} style={{width: 80, height: 40}} />
    </View>
  )
}