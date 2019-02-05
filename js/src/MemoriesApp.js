import React, { Component } from 'react';
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";

import Splash from './Splash';

class MemoriesApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { enterAR, ar } = this.props;
        return ( 
            <NativeRouter>
                <View style={{flex: 1}}>
                    <Switch>
                        <Route exact path="/" render={(props) => <Splash {...props} enterAR={enterAR} ar={ar} />} />
                    </Switch>
                </View>
            </NativeRouter>
         );
    }
}
 
export default MemoriesApp;