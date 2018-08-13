import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar, Icon, Button, Divider } from 'react-native-elements'
import { iOSUIKit  } from 'react-native-typography'

class Profile extends Component {

  render() {
    return (
      <ScrollView  >


          <View style={ {backgroundColor: 'white', height: 200, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'} }>
            <View style={ {flex: 1, alignItems: 'center'} }>
              <TouchableOpacity>
                <Icon name='settings' size={22} />
              </TouchableOpacity>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
              <Avatar
                size={150}
                rounded
                source={{uri: "http://www.domalberto.edu.br/wp-content/uploads/2017/02/joao.png"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />   
            </View>
            
            <View style={ {flex: 1, alignItems: 'center'} }>
              <TouchableOpacity style={{borderRadius: 100, borderWidth: 0.3, borderColor: 'black'}}>
                <Icon reverse reverseColor color='white' name='settings' size={22} />
              </TouchableOpacity>
            </View>
          </View>


          <View style={ {marginTop: 40, marginBottom: 30, alignItems: 'center' } }>
            <Text style={{...iOSUIKit.title3Object, fontSize: 28, zIndex: 999}} >Sicranão</Text>
          </View>

        <Divider />

        <View style={styles.secondBox}>
          <Text> textInComponent </Text>
          <Text> textInComponent </Text>
        </View>
        

      </ScrollView>
    )
  }
}


const styles = StyleSheet.create(theme => ({
  container: {
  },

  headerContainer: {
    marginTop: 100
  },

  buttons: {
    paddingTop: 20
  }

}));


export default Profile