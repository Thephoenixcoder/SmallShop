import React from "react";
import { View, StyleSheet, TouchableHighlight, Dimensions } from "react-native";

/* Get width of window */
const width = Dimensions.get("window").width;
const Card = props => (
  <TouchableHighlight  onPress={props.onPress}>
    <View style={styles.container}>{props.children}</View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    width: 150,
    margin: 10,
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
    borderRadius: 7
  },
  
});

export default Card;
