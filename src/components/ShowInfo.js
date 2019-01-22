import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Card, CardSection } from './common';

const ShowInfo = ({ show }) => {
    console.log(show.name);
    const { rating, summary, genres, schedule, network, language } = show;
    const { original } = show.image;
    
    const { imageStyle, textStyle } = styles;

    var summaryfix = summary
            .replace(new RegExp('<p>', 'g'), '')
            .replace(new RegExp('</p>', 'g'), '')
            .replace(new RegExp('<b>', 'g'), '')
            .replace(new RegExp('</b>', 'g'), '')
    ;
    console.log(schedule.days);
    return <ScrollView>
        <Card>
          <CardSection>
            <Image style={imageStyle} source={{ uri: original }} />
          </CardSection>

          <CardSection>
            <Text style={textStyle}>Stars: {rating.average}</Text>
          </CardSection>

          <CardSection>
            <Text style={textStyle}>Show Summery: {summaryfix}</Text>
          </CardSection>

          <CardSection>
            <Text style={textStyle}>Genres: {genres + ""}</Text>
          </CardSection>

          <CardSection>
            <Text style={textStyle}>Schedule: {schedule.days} at {schedule.time}</Text>
          </CardSection>

          <CardSection>
            <Text style={textStyle}>Network: {network.name}</Text>
          </CardSection>

          <CardSection>
            <Text style={textStyle}>Language: {language}</Text>
          </CardSection>
        </Card>
      </ScrollView>;
};

const styles = {
    imageStyle: {
        height: 350,
        width: null,
        flex: 1
    },
    textStyle: {
        fontSize: 18,
    }
};

export default ShowInfo;