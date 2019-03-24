import React from "react";
import { Text, View, Image, StyleSheet, Alert } from "react-native";
import Card from "./Card";
import CardSection from "./Cardsection";


const CardView = props => {
  return(
   
   <View style={{ width: 150}} >
    <Card onPress={props.onItemPress}>
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
    
          <Text  style={[styles.categoryTitle,{fontWeight:props.weight|| "bold"},{fontSize:props.fontsize||15}]}>{props.categoryprop.Name}</Text>
        </View>
      </CardSection>
    </Card>
</View>

)};





const styles = StyleSheet.create({
  
  categoryImage: {
    width: 70,
    height:70,
    flex: 1,
    justifyContent: "center"
  },
  categoryTitle: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    
  }
});
export default CardView;
