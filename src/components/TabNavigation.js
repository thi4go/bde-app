import React, { Component } from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeManager from '../views/Home/manager';
import MediaManager from '../views/Media/manager';
import ProfileManager from '../views/Profile/manager';
import RankingManager from '../views/Ranking/manager';

export default createMaterialBottomTabNavigator({
  Home: { screen: HomeManager },
  Ranking: { screen: RankingManager },
  Media: { screen: MediaManager },
  Profile: { screen: ProfileManager }
}, {
  shifting: true,
  initialRouteName: 'Home',
  activeTintColor: 'black',
  inactiveTintColor: 'gray',
  barStyle: { backgroundColor: 'white' },
});

// const TabNavigation = createMaterialBottomTabNavigator({
//   Home: HomeManager,
//   Ranking: RankingManager,
//   Media: MediaManager,
//   Profile: ProfileManager
// }, {
//   navigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, tintColor }) => {
//       const { routeName } = navigation.state;
//       let iconName;
//       if (routeName === 'Home') {
//         iconName = `home`;
//       } else if (routeName === 'Ranking') {
//         iconName = `microphone`;
//       } else if (routeName === 'Media') {
//         iconName = `camera`;
//       } else if (routeName === 'Profile') {
//         iconName = `user`;
//       } 

//       // You can return any component that you like here! We usually use an
//       // icon component from react-native-vector-icons
//       return <Icon name={iconName} size={25} color={tintColor} />;
//     },
//   }),
//   tabBarOptions: {
//     showLabel: false,
//     activeTintColor: 'black',
//     inactiveTintColor: 'gray',
//     swipeEnabled: true
//   },
// });


// export default TabNavigation;