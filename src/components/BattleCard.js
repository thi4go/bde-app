import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider, Icon, Button } from 'react-native-elements'
import { iOSUIKit  } from 'react-native-typography'
import { styles } from './carousel/styles'

import FormatService from '../lib/FormatService'
import NavigationService from '../lib/NavigationService'

export default class BattleCard extends Component {

  constructor (props) {
    super (props)
  }

  _activateDetail (item) {
    NavigationService.battleNavigate('Detail', { _id: item._id})
  }

  render() {

    const {even, item} = this.props

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={ () => this._activateDetail(item)}
      >
        <View style={styles.shadow} />


        <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>

          <View style={styles.headerContainer}>
            <Text style={[textStyle.battleName, even ? { color: 'white'} : {}]}>
              {item.name}
            </Text>

            <Text style={[textStyle.date, even ? { color: 'white'} : {}]}>
              {FormatService.formatDate(item.created)}   
            </Text> 
          </View>
            
        </View>

        <Divider style={even ? { color: 'white' } : {} }/>

        <View style={[styles.contentContainer, even ? {backgroundColor: '#1a1917'} : {}]}>
          <Icon name='md-trophy' type='ionicon' color='orange' size={32} />
          <Text style={[{...iOSUIKit.caption1Object, fontSize: 18, paddingTop: 10, paddingBottom: 20}, even ? { color: 'white'} : { color: '#161616'}]}>
            {item.winner.name} 
          </Text>

          <Icon name='ios-videocam' type='ionicon' color='#393e46' size={32} />
          <Text style={[{...iOSUIKit.caption1Object, fontSize: 16, paddingTop: 10, paddingBottom: 20}, even ? { color: 'white'} : { color: '#161616'}]}>
            x videos
          </Text>
        </View>
        
        <Divider style={even ? { color: 'white' } : {} }/>

        <View style={[styles.textContainer, even ? {backgroundColor: '#1a1917'} : {}]}>
    
        </View>
      </TouchableOpacity>
    );
  }
}


const textStyle = StyleSheet.create({

  battleName: {
    ...iOSUIKit.bodyObject,
    fontSize: 21,
    margin: 15
  },

  date: {
    ...iOSUIKit.caption1Object,
    padding: 15,
    alignContent: 'flex-end'
  }
})
