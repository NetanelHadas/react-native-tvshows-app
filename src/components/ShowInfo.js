import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Header } from './common';

const ShowInfo = ({ show }) => {
    console.log(show.name);
    return (
        <View>
            <Header headerText={show.name} />
            <Text>{show.name}</Text>
        </View>
    );
};

export default ShowInfo;