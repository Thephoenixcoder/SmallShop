import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native'


const Button =props=>{
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.btntext}>{props.title}</Text>
       </TouchableOpacity>
    )
}


styles=StyleSheet.create({
    button:{
        height:50,
        padding: 4,
        backgroundColor:'#ffc107',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent:'center',
    },
    btntext:{
      alignSelf:'center' ,
      color:'#fff' 
    }
})


export {Button} 