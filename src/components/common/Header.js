// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#777777', // For IOs use #F8F8F8
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 1, // For IOs use 15
    /* android do not support shadows, so the comment below would only work in IOs.
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // dimentions of the shadow.
    shadowOpacity: 0.9,
    bare in mind
    */
    elevation: 5,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

/* Convention is:
In the return call use parenthesis like we did in index.android.js
if we have more than one line of jsx. */

/* View element is the container element
   in which we position our text element.
   we can also set its background color, search color in hex in google.
*/

/* Flexbox propeties is used for moving elements within the container element:
 jusifyContent lets us move our text element vertically in the view element;
 flex-end for bottom spot, center for center spot, flex-start top spot (default).

 alignItems lets us move our text element horizontally in the view element;
 flex-end for right spot, center for center spot, flex-start left spot (default).
 */

// Make the component available to other parts of the app
export { Header };
