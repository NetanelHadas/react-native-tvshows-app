import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ShowDetail from './ShowDetail';

class ShowList extends Component {
    state = { shows: [] };
    
    componentWillMount() {
        axios.get('http://api.tvmaze.com/search/shows?q=girls')
            .then(response => this.setState({ shows: response.data }));
    }

    renderShows() {
        return this.state.shows.map(show => (
          <ShowDetail key={show.show.id} score={show.score} show={show.show} />
        ));
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