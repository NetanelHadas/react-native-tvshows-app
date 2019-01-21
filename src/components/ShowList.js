import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class ShowList extends Component {
    state = { shows: [] };
    
    componentWillMount() {
        axios.get('http://api.tvmaze.com/search/shows?q=girls')
            .then(response => this.setState({ shows: response.data }));
    }

    renderShows() {
        return this.state.shows.map(show =>
            <Text key={show.show.id}>{show.score}</Text>
        );
    }
    
    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderShows()}
            </View>
        );
    };
}

export default ShowList;