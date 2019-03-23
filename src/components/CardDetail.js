//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header'




const CardDetail = props => {
    return (
      <View style={styles.container}>
        <Header title={ props.navigation.state.params.param }/>
        
      
      </View>
    );
  };


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00AF87',
    },
});

//make this component available to the app
export default CardDetail;
