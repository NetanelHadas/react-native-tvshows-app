import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header } from './src/components/common/Header';
import Router from './src/components/Router';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Router />
            <Header headerText={'Netanel Hadas'} />
        </View>
    );
};

AppRegistry.registerComponent('shows', () => App);

// flex one here is important, without it you will not see the most bottom card section (in the case here the button).
