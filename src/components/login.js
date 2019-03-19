//import liraries

import React, { Component } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Alert,
  Text
} from "react-native";
//connect for firebase
import "@firebase/auth";
import {Button,Input} from './common';
import firebase from '../config'




// create a component
class Login extends Component {

  
  constructor(props){
    super(props);
    this.state = {
      email: "",
      user:null,
      password: "",
      error:'',
      authen: false
    };
  }

  componentWillMount() {
     <firebase/>
    }
 

  renderCurrentState = () => {
    //authen true
    if (this.state.authen) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    if(this.state.user!==null){
      //it mean  it is already login 
      this.props.navigation.navigate('Home')
     
    }

      return (
    

        <View style={{ flex: 1, alignSelf: "stretch" }}>
         <Input
           value={this.state.email}
           placeholder="Enter your Email"
           onChangeText={email=>this.setState({email:email})}
           secureTextEntry={false}
         />
  
         <Input
           value={this.state.password}
           placeholder="Enter your Password"
           onChangeText={password=>this.setState({password:password})}
           secureTextEntry={true}
         />
  
          <Button title="login" onPress={this.onLoginPressed.bind(this)} />
          <Text >{this.props.error}</Text>
        </View>
      );
    
    
  };
   
  onLoginPressed = () => {
    this.setState({
       authen: true
    });
    const {email,password}=this.state;


    firebase.auth().signInWithEmailAndPassword(email,password).then(user=>this.setState({
      authen:false,
      user,
      error:''
      
      })
      ).catch(()=>{
          Alert.alert('Warning','Email/password is not match',[{
            text:'okay'
          }])
      })
  };

  render() {
  

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/store.png")} />
        <Text style={styles.heading}>Small Shop</Text>
        {this.renderCurrentState()}
      </View>
    );
  }


  
  
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingTop: 30,
    alignItems: "center",
    padding: 10
  },
  logo: {
    width: 150,
    height: 150
  },
  heading: {
    fontSize: 20
  }
 
});

//make this component available to the app
export default Login;
