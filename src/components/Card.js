import React from "react";
import { View, StyleSheet,TouchableHighlight,Dimensions } from "react-native";



/* Get width of window */
const width = Dimensions.get('window').width
const Card = props => <View style={styles.container}>{props.children}</View>;

const styles = StyleSheet.create({
  container: {
    width: (width / 2) - 15,
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor:'#fff',
    borderRadius:7,
    
    

  }
});

export default Card