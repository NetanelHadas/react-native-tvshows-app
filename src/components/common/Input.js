// Import a library to help create a component
import React from 'react';
import { TextInput, View, Text } from 'react-native';

// Create a component
const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    // having some distance from the right side so it will look better
    paddingLeft: 5,
    // same for the left
    fontSize: 18,
    // so the user will be able to see clearly the text he is entering the field
    lineHeight: 23,
    /* not related to the font size, its about how much space there is between each line of text,
       this way the text will stand out a little bit more
    */
    flex: 2
    // 2/3 of the space goes to the TextInput
    // 1/3 of the space goes to the label
    // since they are in the same container, they are siblings
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    // to make sure the label stands apart from the left hand border
    flex: 1
    // 1/3 of the space goes to the label
    // 2/3 of the space goes to the TextInput
    // since they are in the same container, they are siblings
  },
  containerStyle: {
    height: 40,
    flex: 1, // so it will fill all the available space that there is
    flexDirection: 'row',
    alignItems: 'center' // so the items will align vertically
  }
};

// Make the component available to other parts of the app
export { Input };


/* Input component
Input is a 'controled component', component we made
using 'primitive component' such as TextInput for example.
*/

/* our goal from making this component:
  is not changing the styling of a TextInput within the LoginForm it self (or any other
  component we will use it in in the future) but change the styling in the component
  we made for TextInput it self since later we import it from the common folder in other apps.

  We are making our TextInput a reuseable component since in each different app
  it might require a different styling.
  by making it a reuseable component it will be easier to do so in different apps.
*/

/*
  This is a functional component since we use const.
*/

/* always put the starting text build inside just to keep things organized.
const Input = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};
*/

/*
we will use two input tags each input tag is built as follows,
The text tag will be used to place our label to the left handside that will
show "email" or "password".
The TextInput will be used to place user's input, in this cases the user's email
or the user's password.

since we are making this component a reuseable component we want to be able
to reconfigure what the text should say.
What we ask from the user to enter, in this specific case is email and password.

so what this mean is we want to pass in the label text as a prop to this component.
*/

/* make sure the component receive the value and onChangeText props.
   and then pass them directly into the TextInput.
*/

/* we could have also named the component Input instead as field for example,
just to show it is seperate from the TextInput we used inside it
since the TextInput is the primitive that gets the user text before it moves it to Input
which then puts it in the state and in value which resides in the LoginForm level.
*/

/* we will have 3 styles
one for our label - labelStyle
one for our TextInput - inputStyle
and one for our View container - containerStyle
*/

/* the flex in styles
both the Text and the TextInput are children of the view tag, they are siblings
of each other.
they both have the flex proprety designated on the style objects

the number we give the flex property decides how we allocate/proportion available
space to each one.

so TextInput will get 2/3 of the total available space.
and Text will get 1/3 of the total space available.
*/

/* flexDirection: 'row'
will sort horizontally the elements within the View containerStyle
Text label and after it the TextInput

if you want to check a flexDirection: 'column' example
look at albumDetail in the albums app at headerContentStyle
items in cardSection are organized in a row
but the second item has 2 texts organized in a column, one under the other
*/

/* const { inputStyle, labelStyle, containerStyle } = styles
pull inputStyle, labelStyle and containerStyle from our styles object.

this way we can use them as we did in the code above without the need to call for
styles each time, like is done in the following way:
style={styles.containerStyle}
*/

/* default Autocorrect adjustment
when we type for example: Bottless the Autocorrect will try to correct the user's
input to Bottles.

we need to turn off Autocorrect for TextInput to prevent these types of
annoying mistakes for the user.

this is done by passing the following prop to the TextInput:
autoCorrect={false}

Important!!!
the props are known in the primitive components and not in the componenets we build,
so to use the props these props in our build compnenets we must use them in the
primitive components inside our built components.

the naming of the props in the primitive components is very imporant and specific.
the naming of the props we pass between components does not have to be specific, but
it does help if they are named in a way that it is similar to what we want to use them in.

for example the prop we passed as placeholder from the LoginForm,
we could have named it, userwritinghelper,
and accept it in the Input component as, userwritinghelper,
but when we used it in the input component
we must give it to the prop placeholder which is specifically named prop for it to work.
*/

/* PlaceHolder
we want to show a place holder to the user in the place the user needs to
enter his email or password to show him that he needs to enter that there.

we dont want to hardcode "email" into it.
we want to make the configuration of this place holder available from the parent
component.

we do this by adding the prop placeholder to the TextInput:
placeholder={proppassedfromfathercomponent}


important!!!!!!!
remember to add placeholder to:
const Input = ({ label, placeholder, value, onChangeText })
so you can recieve it from the parent component.
the past prop and recieved prop must be named the same but!
they do not have to be named as the prop of the primitive component,
they can be named as we please as long as they are the same (so we know that we past
it from father to child).
the prop of the primitive component on the other hand, have a unique naming!!!
*/

/* secureTextEntry
Making our TextInput show the entered password as *********
the TextInput tag which is the primitive component behind our Input component
supports the secure text entry prop.

we need to pass an additional propertie/prop to our TextInput tag as follows:

note: prop names are uniqe! they are not arguments that can be named as we please
and belong to the primitive components.

secureTextEntry={true}

by jsx convention since we are passing a boolean prop, true
we can use a shortcut and just list the property as such:

secureTextEntry

as we did in the code above.

we want the parent component to be able to customize whether the entered text
will be ****** or plain text.
to do this we need to add another prop to our Input as follows:

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry })

and since we receive a prop from the parent we need to assign this prop
to a prop as follows:

secureTextEntry={secureTextEntry}

*/
