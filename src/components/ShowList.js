import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class ShowList extends Component {
    componentWillMount() {
        axios.get("http://api.tvmaze.com/search/shows?q=girls")
            .then(response => console.log(response));
    }
    
    render() {
        return (
            <View>
                <Text>Show list</Text>
            </View>
        );
    };
}

export default ShowList;