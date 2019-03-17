import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Menu = props => {
  return (
         <TouchableOpacity style={styles.container} onCheck={props.onCheck}>
            <FontAwesome style={styles.icon}  name={props.icon} />
         </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding:10,
    justifyContent:'center'
  
   },
  icon: {
    color: "#bbbdcb",
    fontSize: 18,
   }
});
export default Menu;
