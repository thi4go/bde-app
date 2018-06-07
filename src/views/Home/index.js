import React from 'react';
import { View, Text, Button } from 'react-native';


class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
					    onPress={ () => { this.props.navigation.navigate('HomeDetail') }}
					    icon={{name: 'code'}}
					    backgroundColor='#03A9F4'
					    fontFamily='Lato'
					    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
					    title='VIEW NOW' />
      </View>
    );
  }

}


export default Home;