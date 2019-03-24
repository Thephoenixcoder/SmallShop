import React from "react";
import { View, StyleSheet,TouchableOpacity } from "react-native";

const Card = props =>
{
  const { flexdir,heightcard ,radius} = props
  const { container} = styles

  return(
    <TouchableOpacity  onPress={props.onPress}>
      <View style={[container,{flexDirection:flexdir||"column"},{height:heightcard},{borderRadius:radius||7 }]}>{props.children}</View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft:10,
    marginRight:10,
   
    padding: 5,
    shadowColor: "#fcfffe",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 2,
    backgroundColor: "#fcfffe",
   
  },
  
});

export default Card;
