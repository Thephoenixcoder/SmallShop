import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native'


const Input = ({Value ,onChangeText,placeholder,secureTextEntry})=>{
    return(
     <View>
         <TextInput style={styles.input}
          placeholder={placeholder} 
          autoCorrect={false}
          onChangeText={onChangeText}
          value={Value}
          secureTextEntry={secureTextEntry}/>
     </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#48bbec",
        alignSelf: "stretch"
      }
})

export  {Input}