//import liraries
import React, { Component } from 'react';
import { ActivityIndicator,ScrollView } from 'react-native';
import firebase from '../config'
import ViewCat from './Viewcat'





// create a component
class Cardlist extends Component {
state={
    Categories:[],
  
}

componentWillMount(){
  firebase.database().ref('/Categories').once('value').then(res=>{
      let Categories=Object.values(res.val())
      this.setState({Categories})
  })
}


renderCategories(){
    if(this.state.Categories.length===0){
        return <ActivityIndicator visible={true} size="large" color="#123456" />;
    }else{
        return this.state.Categories.map(category=>{
            // console.warn(category.Name)
            return <ViewCat key={category.Name} categoryprop={category}/>
        });
    }
}

    render() {
        const { Categories } = this.state;
        return (
           <ScrollView >{this.renderCategories()}</ScrollView>
        );
    }
}



//make this component available to the app
export default Cardlist;
