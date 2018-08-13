import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Divider } from 'react-native-elements'
import { connect } from 'react-redux'
import { iOSUIKit  } from 'react-native-typography'
import Carousel from 'react-native-snap-carousel'
import * as cStyle from '../../components/carousel/styles'
import BattleCard from '../../components/BattleCard'



class Battles extends Component {

  constructor (props) {
    super (props)
  }

  renderItem ({item, index}) {
    return (
      <BattleCard item={item} even={(index + 1) % 2 === 0} />
    )
  }

  render() {
    const { isLoading } = this.props.battles

    return (
      
      <ScrollView contentContainerStyle={styles.container}>
        {!isLoading ? 
        (
          <View>
            <Text style={{...iOSUIKit.title3EmphasizedObject, textAlign: 'center', fontSize: 24 }}>Liga x</Text>
            <Text style={{...iOSUIKit.caption1Object, textAlign: 'center'}}>1/2018</Text>

            <Divider style={{marginTop: 20, marginBottom: 20}}/>

              <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.props.battles.data}
                renderItem={this.renderItem}
                sliderWidth={cStyle.sliderWidth }
                itemWidth={cStyle.itemWidth}
                containerCustomStyle={cStyle.slider}
                contentContainerCustomStyle={cStyle.sliderContentContainer}
                autoplay={false}
                autoplayDelay={1000}
                autoplayInterval={3000}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
              />

          </View>
        )
        : 
        (
          <View style={styles.loadContainer}>
            <ActivityIndicator size="large" color="grey" />
          </View>
        )}     

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    marginTop: 20,
    justifyContent: 'space-between'
  },

  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50
  },
})

function mapStateToProps (state) {
  const { battles } = state

  return { battles } 
}


export default connect(mapStateToProps)(Battles)