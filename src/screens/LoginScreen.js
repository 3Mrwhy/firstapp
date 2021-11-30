import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

export default class LoginScreen extends Component {
    GoToNextScreen(){

        const {navigate} = this.props.navigation;
        navigate('Signup', )
    }

    onClickListener(){
      alert("hiiiiiii");
    }

   

    constructor(props){
      super(props)
      this.state={
        username: '',
        password: '',
        Login: "Login",

      }

    


     
      }
    
  render() {
    return (
      <View style={styles.container}>
          {/* <View style={styles.logo}>
          <Image style={styles.logo_image} source={require('../images/kingeveryt.png')} />
            </View> */}
        <View style={styles.inputContainer}>
          {/* <Image style={[styles.icon, styles.inputIcon]} source={require('../images/icons/email.png')}/> */}
          <TextInput style={styles.inputs}
              placeholder="Email...."
              keyboardType="email-address"
             />
        </View>
        
        <View style={styles.inputContainer}>
          {/* <Image style={[styles.icon, styles.inputIcon]} source={require('../images/icons/password.png')}/> */}
          <TextInput style={styles.inputs}
              placeholder="Password...."
              secureTextEntry={true}
             />
        </View>

            

        <TouchableOpacity style={styles.restoreButtonContainer}>
            <Text style={styles.loginText} >Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>{this.state.Login }</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
      
       <Text style={styles.loginText} onPress={this.GoToNextScreen.bind(this)}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#05405b',
  },
    logo:{

    },
    logo_image:{
        width: 150,
        height: 150,
        marginBottom:40,
        borderRadius:100,
    },
  inputContainer: {
      borderBottomColor: '#465880',
      backgroundColor: '#fff',
      borderRadius:30,
      borderBottomWidth: 1,
      width:280,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#465880',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#f85c5e',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#f85c5e",
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  }
});