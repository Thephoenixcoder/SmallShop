import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Menu from "./common/menu";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Menu color="#00AF87" icon="shoppingcart" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    justifyContent: "flex-end",
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 8
  }
});

export default Footer;
