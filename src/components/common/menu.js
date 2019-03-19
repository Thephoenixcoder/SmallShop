import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon  from 'react-native-vector-icons/AntDesign'

const Menu = props => {
  const {icon ,color ,onCheck,fontsize }=props
  return (
         <TouchableOpacity style={styles.container} onCheck={onCheck}>
            <Icon style={[{fontSize:fontsize||25},{color:color ||'#fff'}]}  name={icon} />
         </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
   
    width:30,
    height:30,
    paddingTop:6,
    paddingBottom:6,
    paddingRight:3,
    paddingLeft:3,
    justifyContent:'center'
  
   },
  
});
export default Menu;
