//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header'
import Cardlist from './Cardlist'
import Footer from './Footer'


// create a component
class Home extends Component {
    
    render() {
        return (
            <View style={styles.container}>
               
               <Header title="Categories"/>
               <Cardlist/>
               <Footer/>
               
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
export default Home;
