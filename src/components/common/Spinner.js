// Import libraries for making a component
import React from 'react';
import { View, ActivityIndicator } from 'react-native';


// Make a component
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={ size || 'large' } />
    </View>
  );
};


// put the styles out side of the component - for ogranizing matters
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};


// Make the component available to other parts of the app
export { Spinner };



/*
This is a functional component with the entire purpose to show or not to show
a spinner
*/

/* Reuseable component
we want our spinner to be useable in different apps, so we make it a
reuseable component
*/

/* ActivityIndicator
react-native have a defualt spinner animation we can use
instead of making an entire animation on our own,
its called ActivityIndicator.

we make a spinner component of our own so we can style it a bit as we choose to.
*/

/* style
we put the spinner inside view tags so we can style it, since
we want the spinner to be in the center of the screen,
then we will add the style tags.

flex: 1
so it will take the entire width of the screen.
justifyContent: 'center',
so it will be in the center row wise.
alignItems: 'center'
so it will be in the center column wise.
*/

/* ActivityIndicator size property
ActivityIndicator has a size property with 2 possible options to it.
size={'large'/'small'}

we will pass the size of the spinner as a prop to this componenet
from his parent component.

rememeber: prop that we pass can be named as we please.

On the other hand: the prop of the ActivityIndicator
(ActivityIndicator is a primitive component),size,
is a special unique name, and must be named size.
*/

/* <ActivityIndicator size={ size || 'large' } />
if we pass a size from the parent component use that
if not use large size.
*/
