//import liraries
import React, { Component } from 'react';
import { ActivityIndicator,FlatList } from 'react-native';
import firebase from '../config'
import CardView from './Cardview'









// create a component
class Cardlist extends Component {
state={
    Categories:[],
    loader:true
  
}

componentWillMount(){
  firebase.database().ref('/Categories').once('value').then(res=>{
      let Categories=Object.values(res.val())
      this.setState({Categories})
  })
}

renderCategories=({item,index})=>{

    if(item.length==0){
        return <ActivityIndicator visible={true} size="large" color="#123456" />;
    }else{
        
        return <CardView index={item.id}  categoryprop={item}   onItemPress={()=>this.props.onItemPress(item)}/>
     
     }
   
}


    render() {
    
        return <FlatList style={{alignSelf:'center'}}   keyExtractor={item => item.id} numColumns={2} data={this.state.Categories} renderItem={this.renderCategories} ></FlatList>
    
    }
}



  

//make this component available to the app
export default Cardlist;
