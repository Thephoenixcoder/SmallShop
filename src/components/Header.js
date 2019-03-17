import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Menu from './common/menu'

const Header = props => {
  return (
    <View style={styles.container}>
     <Menu style={{color:"#85b6ff"}} icon='align-left'/>
       <Text style={styles.header}>{props.title}</Text>
       <Menu style="#bbbdcb" icon='shopping-cart'/>
   
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#fff",
    shadowColor: "#000"
  },
  header:{
      flex:1,
      color:'#85b6ff',
      fontSize:18,
      textAlignVertical: "center",
      textAlign: "center"
    }
});
export default Header;
