import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import ViewCat from "./Viewcat";

const CardDetail = props => (
  <View style={{  flexDirection: "row" }}>
    <ViewCat />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1
  },
  categoryImage: {
    width: 80,
    height: 80,
    flex: 1,
    justifyContent: "center"
  },
  categoryTitle: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 15
  }
});
export default CardDetail;
