//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header'
import Cardlist from './Categorylist'
import Footer from './Footer'




// create a component
class Home extends Component {

    
    openDetail= (Item) => this.props.navigation.navigate('CardDetailScreen',
    { param:Item.Name ,
      param1:Item.id  
       })
    
    render() {
        
        
        return (
            <View style={styles.container}>
            
               <Header title="Categories"/>
               <Cardlist   onItemPress={this.openDetail} />
               <Footer/>
               
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
export default Home;
