//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";
import CardSection from "./Cardsection";
import Stars from "react-native-star-rating";

// create a component
const Placesview = props => {
  return (
    <View>
      <Card flexdir="row" style={{flex:1}}  onPress={props.onPlacesPress}>
        <CardSection>
          <View style={{ flex: 1 }}>
            <Image
              style={styles.categoryImage}
              source={{ uri: props.placesprop.logo }}
            />
          </View>
        </CardSection>
        <View style={styles.categoryoffer}><Text style={{color:'#fff',fontSize:10}}>Offers</Text></View>
        <CardSection>
       
          <View style={{ flex: 1, flexDirection: "column" }}>
          
            <Text style={styles.categoryTitle}>{props.placesprop.name}</Text>
            <Text style={[styles.categoryTitle, { fontSize: 10 }]}>
              {props.placesprop.food}
            </Text>
            <View style={{alignItems: "flex-start",flexDirection: "row",marginTop: 3,marginBottom:3 }}>
              <Stars
                isActive={true}
                maxStars={5}
                isHalfStarEnabled={true}
                fullStarColor="#F9A825"
                selectedStar={rating => console.warn(rating)}
                rating={props.placesprop.rating}
                starSize={15}
              />
              <Text
                style={[styles.categoryTitle, { fontSize: 10, marginLeft: 5 }]}
              >
                {props.placesprop.rating}
              </Text>
            </View>

            <Text style={[styles.categoryTitle, { fontSize: 10 }]}>
              {props.placesprop.address}
            </Text>
          </View>
        </CardSection>
      </Card>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  categoryImage: {
    width: 80,
    height: 80,
    flex: 1,

    alignItems: "flex-start"
  },
  categoryoffer:{
    padding:4,
    backgroundColor:'#f44336',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:'2%',
    top:'5%',
    


    
  

  }
});

//make this component available to the app
export default Placesview;
