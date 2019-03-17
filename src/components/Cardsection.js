import React from "react";
import { View, StyleSheet } from "react-native";

const CardSection = props => <View style={styles.container}>{props.children}</View>;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent:'center',
    alignItems:'center',
  
  }
});


export default CardSection