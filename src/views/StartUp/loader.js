import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';


class StartUpLoader extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const session = await AsyncStorage.getItem('session')

    this.props.navigation.navigate(session ? 'App' : 'Auth')
  }

  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Text>Loader Screen</Text>
      </View>
    );
  }

}


export default StartUpLoader;