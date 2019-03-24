//import liraries

import React, { Component } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
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
      this.props.navigation.navigate('HomeScreen')
     
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
            {/* show error text  */}
        
          <Button title="login" onPress={this.onLoginPressed.bind(this)} />
          <Text style={styles.errorStyle}>{this.state.error}</Text>
         
        </View>
      );
    
    
  };
   
  onLoginPressed = () => {
    this.setState({
       authen: true
    });
    const {email,password}=this.state;
  // reset error and loading
  this.setState({ error: '', authen: true })

    firebase.auth().signInWithEmailAndPassword(email,password).then(user=>this.setState({
      authen:false,
      user,
      error:''
      
      })
      ).catch(this.onLoginFail.bind(this))
  };

   onLoginFail() {
     
    this.setState({
      error: 'Authentication Failed',
      authen: false
    })
  }
  render() {
  

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../assets/store.png")} />
        <Text style={styles.heading}>Stand Shop</Text>
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
    justifyContent:'center',
    padding: 10
  },
  logo: {
    width: 150,
    height: 150
  },
  heading: {
    fontSize: 20
  },
  errorStyle:{
    color:'red',
    fontSize:15,
    alignSelf: 'center'
  }
 
});

//make this component available to the app
export default Login;
