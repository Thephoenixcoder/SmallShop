import React from 'react';
import {AppRegistry} from 'react-native';
import AppNavigator from './src/navigate'

const App = () =>{
    return(
        <AppNavigator/>
    )
}

AppRegistry.registerComponent('Shop', () => App);
