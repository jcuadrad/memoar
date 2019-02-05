import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableHighlight } from 'react-native';

import splash from '../res/SplashPhoto.png';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const { enterAR, ar } = this.props;
        return ( 
            <View style={localStyles.container} >
                <View style={localStyles.header}>
                    <Text style={localStyles.headerTitle}>Welcome!</Text>
                    <Text style={localStyles.description}>Signup for MemoAR right here</Text>
                </View>
                <View style={localStyles.formContainer}>
                    <View style={localStyles.infoContainer}>
                        <Text style={localStyles.info}>Just write your email and create a password for us to remember (;)) you.</Text>
                    </View>
                    <View style={localStyles.input}>
                        <TextInput style={localStyles.placeholder} placeholder="E-mail"/>
                    </View>
                    <View style={localStyles.input}>
                        <TextInput style={localStyles.placeholder} placeholder="Password"/>
                    </View>
                    <TouchableHighlight style={localStyles.buttons} onPress={enterAR(ar)} underlayColor={'#68a0ff'}>
                        <Text style={localStyles.buttonText}>SIGN UP</Text>
                    </TouchableHighlight>
                </View>
            </View>
         );
    }
}

var localStyles = StyleSheet.create({
    container :{
      flex : 1,
      backgroundColor: "white",
    },
    header: {
      flex : 1.5,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#3B3B3B"
    },
    formContainer: {
      flex: 5,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'white'
    },
    headerTitle: {
        color: '#DF4E40',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 3,
        marginBottom: 10,
        marginTop: 30,
        textTransform: 'uppercase'
    },
    description: {
        color: '#818181',
        fontSize: 16,
        fontWeight: '200'
    },
    infoContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#F1F1F1'
    },
    info: {
        color: '#4D4D4D',
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        margin: 20
    },
    placeholder: {
        color: '#4D4D4D',
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center'
    },
    input: {
        height: 80,
        paddingLeft: 40,
        paddingRight: 40,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: 2,
        borderBottomColor: '#F1F1F1'
    },
    titleText: {
      paddingTop: 30,
      paddingBottom: 20,
      color:'#fff',
      textAlign:'center',
      fontSize : 25
    },
    buttonText: {
      color:'#fff',
      textAlign:'center',
      fontSize : 17
    },
    buttons : {
      height: 50,
      width: 150,
      paddingTop: 0,
      paddingBottom: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 20,
      backgroundColor:'#DF4E40'
    },
    exitButton : {
      height: 50,
      width: 100,
      paddingTop:10,
      paddingBottom:10,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
    }
  });
 
export default SignUp;