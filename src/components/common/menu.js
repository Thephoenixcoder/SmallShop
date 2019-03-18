import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon  from 'react-native-vector-icons/AntDesign'

const Menu = props => {
  return (
         <TouchableOpacity style={styles.container} onCheck={props.onCheck}>
            <Icon style={styles.icon}  name={props.icon} />
         </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
   
    width:24,
    height:24,
    paddingTop:6,
    paddingBottom:6,
    paddingRight:3,
    paddingLeft:3,
    justifyContent:'center'
  
   },
  icon: {
    color: "#fff",
    fontSize:20,
   
   
   }
});
export default Menu;
