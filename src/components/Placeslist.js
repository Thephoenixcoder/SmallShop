//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import firebase from '../config'
import Placesview from './Placesview'


// create a component
class Placeslist extends Component {
    state={
        places:[],
        
    }

    componentWillMount(){
        const id=this.props.itemId;
        firebase.database().ref('/Categories/cat1').child('Places').once('value').then(res=>{
            let places=Object.values(res.val());
            this.setState({places})
        })
    }

    renderplaces=({item,index})=>{

       return <Placesview index={item.id}  placesprop={item}  onPlacesPress={()=>this.props.onPlacesPress(item)} />

    }
    render() {
    //    console.warn(this.props.itemId)
        return (
            <View style={styles.container}>
             <FlatList keyExtractor={item => item.id} numColumns={1} data={this.state.places} renderItem={this.renderplaces} ></FlatList>
            </View>
        );
    }
}

//make this component available to the app
export default Placeslist;
