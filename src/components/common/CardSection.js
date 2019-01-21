// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

// Make a component
const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
    /*
    by passing (props) and using {props.children} we are letting the CardSection
    componenet use/contain any tag used by his parent, be it View,Text, Image or Button.
    */
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    // In the Card component we set it to 0, so we wont have double bordering on the bottom
    padding: 5, // spacing between whats inside each cardSection.
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row', // the way flexbox will arrange the items in the CardSection.
    // we can use column for when we want to elements to be under one another (default is column).
    borderColor: '#ddd',
    position: 'relative' // We will explain later
  }
};


// Make the component available to other parts of the app
export { CardSection };
