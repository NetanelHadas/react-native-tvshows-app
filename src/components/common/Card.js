// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

// Make a component
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
    /*
    by passing (props) and using {props.children} we are letting the Card
    componenet use any tag used by his parent, be it View,Text, Image or whatever.
    from AlbumDetail we passed Text>{props.album.title}</Text (missing < at start and > at end)
    to the card tag by using (props) and {props.children}
    */
  );
};

const styles = {
  containerStyle: {
    // Borders:
    borderWidth: 1,   // makes the top lines of the box thiner.
    borderRadius: 2,  // rounds the corners to look nicer.
    borderColor: '#ddd', // gray color for the border of the box.
    borderBottomWidth: 0,
    /* makes the bottom lines of the box even thiner than top, 0 even hides it.
       this is done for cardSection we will write after.
    */

    // Shadows to elevate the look (give it a pop) - to show you can move the card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    /*
    what side we want the shadow to be on;
    no shadow on left and right side and some shadow on the bottom.
    */
    shadowOpacity: 0.1, // makes the component see through, between 0-1.
    shadowRadius: 2, // rounds the corners of the shadows (same value as borderRadius).
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10  // puts space between cards in the list.
    // marings place space between components.
  }
};


// Make the component available to other parts of the app
export { Card };
