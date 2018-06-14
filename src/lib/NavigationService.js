import { NavigationActions } from 'react-navigation'



let _switchNav;

function setSwitchNav(navigatorRef) {
  _switchNav = navigatorRef
}

function switchNavigate(routeName, params = {}) {
  _switchNav.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}


export default {
  setSwitchNav,
  switchNavigate
}