import React from "react";
import { Text, View, Image, StyleSheet, Alert } from "react-native";
import Card from "./Card";
import CardSection from "./Cardsection";


const CardView = props => (
   <View >
    <Card onPress={this.openDetail}>
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

);

openDetail= () => {
  this.props.navigation.navigate('CardDetail')
}



const styles = StyleSheet.create({
  categoryImage: {
    width: 65,
    height:65,
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
export default CardView;
