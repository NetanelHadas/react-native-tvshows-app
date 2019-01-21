import React from 'react';
import { Text, Image } from 'react-native';
import { Card, CardSection, Button } from "./common";

const ShowDetail = ({ show }) => {
  const { name, rating } = show;
  const { medium, original } = show.image;
  const { imageStyle, textStyle } = styles;
  
  return (
    <Card>
        <CardSection>
            <Image
                style={imageStyle} 
                source={{ uri: original }} 
            />
        </CardSection>
        
        <CardSection>
            <Text style={textStyle}>{name}</Text>
        </CardSection>
        
        <CardSection>
            <Text style={textStyle}>Stars: {rating.average}</Text>
        </CardSection>

        <CardSection>
            <Button />
        </CardSection>
    </Card>
  );          
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

export default ShowDetail;