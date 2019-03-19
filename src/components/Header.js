import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Menu from "./common/menu";

const Header = props => {
  return (
    <View style={styles.container}>
      <Menu icon="menufold" />
      <Text style={styles.header}>{props.title}</Text>
      <Menu icon="gift" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 16,
    height: 56,
    backgroundColor: "#00AF87",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1
  },
  header: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  }
});
export default Header;
