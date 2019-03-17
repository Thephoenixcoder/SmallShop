import React from 'react';
import {Text,TouchableHighlight,StyleSheet} from 'react-native'


const Button =props=>{
    return(
        <TouchableHighlight style={styles.button} onPress={props.onPress}>
        <Text style={styles.btntext}>{props.title}</Text>
       </TouchableHighlight>
    )
}


styles=StyleSheet.create({
    button:{
        height:50,
        padding: 4,
        backgroundColor:'#2980b9',
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