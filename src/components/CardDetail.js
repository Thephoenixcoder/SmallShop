//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header'

// create a component
class CardDetail extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { navigation } = this.props;
    const itemName = navigation.getParam('param', 'NO-ID');
    return (
     
      <View style={styles.container}>
          <Header title={itemName}/>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#00AF87',
  },
});

//make this component available to the app
export default CardDetail;
