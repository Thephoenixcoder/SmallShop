//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Placeslist from './Placeslist'
import Footer from './Footer'

// create a component
class PlaceDetail extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const { navigation } = this.props;
    const itemName = navigation.getParam('param', 'NO-ID');
    const itemId = navigation.getParam('param1', 'NO-ID');
    return (
     
      <View style={styles.container}>
          <Header title={itemName}/>
          <Placeslist itemId={itemId}/>
    
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc107',
  },
});

//make this component available to the app
export default PlaceDetail;
