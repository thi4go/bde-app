import { NavigationActions } from 'react-navigation'



let _switchNav
let _battleNav

function setSwitchNav (navigatorRef) {
  _switchNav = navigatorRef
}

function setBattleNav (navigatorRef) {
  _battleNav = navigatorRef
}

function battleNavigate (routeName, params = {}) {
  _battleNav.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

function switchNavigate (routeName, params = {}) {
  _switchNav.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}


export default {
  setSwitchNav,
  setBattleNav,
  switchNavigate,
  battleNavigate
}