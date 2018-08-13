import React from 'react';
import { Text, View, ScrollView, SectionList, StyleSheet, ActivityIndicator } from 'react-native'
import { Card, Divider } from 'react-native-elements'
import { connect } from 'react-redux'

import BattleList from '../../components/BattleList'

class Home extends React.Component {

  render () {
    const { isLoading } = this.props

    return (
      <ScrollView contentContainerStyle={Styles.container}>
        {isLoading ? 
        (
          <View style={Styles.loadContainer}>
            <ActivityIndicator size="large" color="grey" />
          </View>
        )
        : 
        (
          <View >
            <Card
              title='HELLO WORLD'
              >
              <Text>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
            </Card>
          </View>
        )}     
      
      </ScrollView>
      
    );
  }

}

const Styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 15,
    justifyContent: 'space-between'
  },

  loadContainer: {
    flex: 1,
    justifyContent: 'center'

  },

  listTitle: {
    fontSize: 24,
    fontWeight: 'normal',
  }

})

function mapStateToProps(state) {
  const { isLoading, data } = state.battles
  const { auth }            = state

  return { auth, isLoading, data}
}

export default connect(mapStateToProps)(Home)