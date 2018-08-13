import React from 'react'
import {  View, Text, FlatList, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'



const BattleList = (props) => {
  let battles = props.battles == undefined ? [] : props.battles
  console.log(battles)
  return (
    <View style={Styles.container}>
      { 
      battles.map( (l, i) => (
        <ListItem
          key={i}
          scaleProps={{
            friction: 90,
            tension: 100,
            activeScale: 0.95,
          }}

          leftAvatar={{ rounded: true, source: { uri: '../assets/img/003.png' } }}
          title={l.name}
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          subtitleStyle={{ color: 'black' }}
          subtitle="Vice Chairman"
          chevronColor="white"
          chevron
        />
      ))
      
      }

    </View>
  );
}


const Styles = StyleSheet.create({

  container: {
    marginTop: 25,
    marginBottom: 15  
  },

  listTitle: {
    fontSize: 16,
    marginBottom: 15,
    marginLeft: 15,
    fontWeight: 'normal',
  }

})


export default BattleList