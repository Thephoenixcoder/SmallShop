import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Card from "./Card";
import CardSection from "./Cardsection";

const CardDetail = props => (
  <View style={{  flexDirection: "row" }}>
     <View>
    <Card>
      <CardSection>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.categoryImage}
            source={{ uri: props.categoryprop.url }}
          />
        </View>
      </CardSection>

      <CardSection>
        <View style={{ flex: 1 }}>
          <Text style={styles.categoryTitle}>{props.categoryprop.Name}</Text>
        </View>
      </CardSection>
    </Card>
  </View>

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
