import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import HeaderBarConfig from '../../components/HeaderBarConfig'
import Profile from './Profile'


const ProfileNavigator = createStackNavigator(
	{
		Profile: { 
      screen: Profile,
      navigationOptions: HeaderBarConfig
    },
	},
	{
		initialRouteName: 'Profile',
  });
  

class ProfileContainer extends Component {
  render() {
    return (
      <ProfileNavigator />
    )
  }
}


export default ProfileContainer