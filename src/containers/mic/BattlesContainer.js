import React, { Component } from 'react'
import { FluidNavigator } from 'react-navigation-fluid-transitions'
import Battles from './Battles'
import BattleDetail from './Detail'
import NavigationService from '../../lib/NavigationService'



const BattleNavigator = FluidNavigator(
	{
    Battles: { screen: Battles },
		Detail: { screen: BattleDetail }
  }, 
  {
    initialRouteName: 'Battles'
  }
);


export default class BattlesContainer extends Component {
  render() {
    return (
      <BattleNavigator
        ref={navigatorRef => NavigationService.setBattleNav(navigatorRef)}
      />
    )
  }
}