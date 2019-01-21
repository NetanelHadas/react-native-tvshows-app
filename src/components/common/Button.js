// Import libraries for making a component
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Make a component
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1, // I want this button to expand and fill as much content as it can.
    alignSelf: 'stretch',
    /* flexbox property,
       like alignItems which is for moving items within a container component/element horizontally.
       alignSelf is for the element to position it self using flexbox rules.
       one of the rules is: stretch - stretch to fill the limits of the container.
    */
    backgroundColor: '#fff',
    borderRadius: 5, // rounding the edges.
    borderWidth: 1,
    borderColor: '#007aff', // blue color to match IOs blue to look kind of like an IOs button.
    marginLeft: 5,
    marginRight: 5
    // margins are to make sure the button don't cross any other borders or line work or text
  },

  textStyle: {
    alignSelf: 'center', // centering the text inside the button.
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600', // specify the boldness or thinness of the text element - our case bold
    paddingTop: 10,
    paddingBottom: 10
    // padding for space above and below the text to make it look like a button.

  }
};

/* TouchableHighlight and TouchableOpacity are fancy names for a button.
   both in react represents a different types of buttons.
   they are basic components for dealing with users presses.
   difference between them is how they deal with providing feedback to the user.

   TouchableHighlight - when the user taps this button the button has the option
   to change its color (highlights the button being pressed).
   TouchableOpacity - when the user taps on this button the button will briefly fade away
   (opacity means fade/see through).

   2 main functions to this tags:
   the buttons change to notify the user that the click was registered.
   this tags also have the option to run some code, like sending the user to a specific url.

   both are used as we use a view tag, we wrap with them other tags.

   for this app we will use TouchableOpacity only.
*/

/*
  onPress handlder added to the TouchableOpacity/TouchableHighlight
  executes the code when the user presses that button, code might
  open user browser or fetch a list of posts or delete a post or twit something.

  we pass a function to onPress that is called everytime the user clicks
  the button.
*/

/*
const Button = () => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={() => console.log('pressed')} style={buttonStyle}>
      <Text style={textStyle}>
        Click me!!!
      </Text>
    </TouchableOpacity>
  );
};

problem with this is that we want the Button component to be a reuseable component,
and not just hardcode the url for a specific album in there.
so we add the Button tag from AlbumDetail a prop to pass, a prop that the
parent component (AlbumDetail) passes the child component (Button).

Now the child can call a function that resides in the parent, this is called
a call back.
*/


// Make the component available to other parts of the app
export { Button };
