//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header'
import Cardlist from './Cardlist'


// create a component
class Home extends Component {
     //to hide headergenerate from react-navigation
  static navigationOptions = { header: null }
    render() {
        return (
            <View style={styles.container}>
               
               <Header title="Categories"/>
               <Cardlist/>
               
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffee33',
    },
});

//make this component available to the app
export default Home;
