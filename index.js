import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header } from './src/components/common/Header';
import ShowList from './src/components/ShowList';

const App = () => {
    return (
        <View>
            <Header headerText={'Shows'} />
            <ShowList />
        </View>
    );
};

AppRegistry.registerComponent('shows', () => App);
