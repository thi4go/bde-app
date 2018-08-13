import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { Text, Button, List, ListItem } from 'react-native-elements'
import { connect } from 'react-redux'



class BattleDetail extends Component {

  constructor (props) {
    super (props)
    const id     = props.navigation.state.params._id
    const battle = props.battles.hashedData[id]

    this.state = {
      battle: battle
    }
    console.log(battle)

  }

  renderItem (item) {
    console.log(item['first'])
    // return (
    //   <ListItem
    //     title={item.first.name}
    //   />
    // )
  }

  render() {
    return (
      <View style={{ padding: 20 }}>
        <Text h4>{this.state.battle.name}</Text>
        <Button title='back' onPress={ () => this.props.navigation.goBack() } />

        <FlatList
          keyExtractor={(item, index) => index}
          data={this.state.battle.stages[0].rounds}
          renderItem={this.renderItem}
        />
      </View>    
    )
  }
}


function mapStateToProps(state) {
  const { battles } = state

  return { battles }
}


export default connect(mapStateToProps)(BattleDetail)