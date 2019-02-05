import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';

import splash from '../res/SplashPhoto.png';

class MemoriesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { enterAR, ar } = this.props;
        return ( 
            // <View style={localStyles.container} >
            //     <View style={localStyles.photo} >
        
            //         <Text style={localStyles.titleText}>
            //             Choose your desired experience:
            //         </Text>
            
            //         <TouchableHighlight style={localStyles.buttons}
            //             onPress={enterAR(ar)}
            //             underlayColor={'#68a0ff'} >
            
            //             <Text style={localStyles.buttonText}>AR</Text>
            //         </TouchableHighlight>
            //     </View>
            // </View>
            <View style={localStyles.viroContainer} >
                <Image style={localStyles.photo} source={splash}></Image>
                <View style={localStyles.titleContainer}>
                    <Text style={localStyles.title}>
                        MEMO
                        <Text style={localStyles.titleEmphasis}>AR</Text>
                    </Text>
                    <Text style={localStyles.paragraph}>An app that brings your best memories back to life.</Text>
                    <TouchableHighlight style={localStyles.buttons} onPress={enterAR(ar)} underlayColor={'#68a0ff'}>
                        <Text style={localStyles.buttonText}>ENTER</Text>
                    </TouchableHighlight>
                </View>
            </View>
         );
    }
}


var localStyles = StyleSheet.create({
    viroContainer :{
      flex : 1,
      backgroundColor: "white",
    },
    container: {
      flex : 1,
      flexDirection: 'row',
      alignItems:'center',
      backgroundColor: "black",
    },
    photo: {
      flex : 4,
      backgroundColor: "steelblue",
    },
    titleContainer: {
      flex: 2,
      padding: 30,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#3B3B3B'
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 20,
    },
    paragraph: {
        color: '#818181',
        fontSize: 16,
        fontWeight: '200'
    },
    titleEmphasis: {
        color: '#DF4E40'
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
 
export default MemoriesApp;