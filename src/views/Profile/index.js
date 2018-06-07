import React from 'react';
import { View, Text } from 'react-native';


class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }

}


export default Profile;