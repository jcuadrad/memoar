import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    PixelRatio,
    TouchableHighlight,
  } from 'react-native';

class MemoriesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { enterAR, ar } = this.props;
        return ( 
            <View style={localStyles.outer} >
                <View style={localStyles.inner} >
        
                <Text style={localStyles.titleText}>
                    Choose your desired experience:
                </Text>
        
                <TouchableHighlight style={localStyles.buttons}
                    onPress={enterAR(ar)}
                    underlayColor={'#68a0ff'} >
        
                    <Text style={localStyles.buttonText}>AR</Text>
                </TouchableHighlight>
                </View>
            </View>
         );
    }
}


var localStyles = StyleSheet.create({
    viroContainer :{
      flex : 1,
      backgroundColor: "black",
    },
    outer : {
      flex : 1,
      flexDirection: 'row',
      alignItems:'center',
      backgroundColor: "black",
    },
    inner: {
      flex : 1,
      flexDirection: 'column',
      alignItems:'center',
      backgroundColor: "black",
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
      fontSize : 20
    },
    buttons : {
      height: 80,
      width: 150,
      paddingTop:20,
      paddingBottom:20,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor:'#68a0cf',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff',
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
 
export default MemoriesApp;