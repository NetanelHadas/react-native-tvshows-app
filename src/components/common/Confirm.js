// Import a library to help create a component
import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


// Create a component
const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

// Make the component available to other parts of the app
export {Confirm};




/* showing a modal to our user

a modal is a pop up
that asks from the user to confirm the last action he just did.
we are not moving the user to a different screen
we are showing the user a pop up (modal).

the user will need to confirm his action
with a press on a yes or no.

to do this we are going to use another primitive component.
go to in the browser
https://facebook.github.io/react-native/docs/getting-started.html
and on the left hand side look for Modal.

modal is a primitive component
that is a part of react-native.

what we care about in this modal are:

visable flag
visible={this.state.modalVisible}
which determine if we can or cant see the modal.

transparent flag
transparent={false}
decides whether or not we can see through it to the content behind it.

animation type
animationType="slide"
determines how the modal will be showed to the user.
does it pop up/slide

event handler
onRequestClose={() => {alert("Modal has been closed.")}}
if the modal gets closed by the user
we will get a call back and we can do what we want in the {}

note:
on android it is a must to pass in a
onRequestClose method.
even if we don't want to do anything with it
we have to pass it in.

because we might want modals in many different areas of our application
so it makes sense to create it as a reuseable component
and put it in our common folder.

we might want to have many yes or no questions in many different locations
in our application
so we should turn it into a reuseable component.

styling the modal

the modal has no styling by default.

we want to make sure we also have a nice styling
for this modal as well.

this modal is not the default pop up
we get on our devices
to update something
we have to style this our selfs.



note:
since modal is a reuseable component
we also need to import it to the index.js file
in the common directory.
there for this file can't import from index.js back
because we will get cyclical dependency and from that an error.
but we still want to use the CardSection and Button
components inside this component.
so we can't import them from index.js file.
so instead just import each of them by it self.
import { CardSection } from './CardSection';
import { Button } from './Button';



this component is a dumb component
so it will be a functional component
and not a class component.

this is one of our reuseable component
so we need to export it
like we export the rest of our reuseable components.
export {Confirm};
and not
export default Confirm;

don't forget to add it to the index.js file
in the common directory.

*/

/* the Modal

the modal it self takes some number
of children components.
and those child components are what
going to be displayed inside the modal.

the modal is like a big wrapper/container.

and anything we pass to it
will be poped up and displayed to the user.

in the text tags
we will ask our user
the question we want to ask him.

and beneath it
we will show our two buttons.

CardSection puts items inside it in rows
thats why we will have our two buttons in the same CardSection.
this is a yes or no answer to the question
and thats also why we use two buttons.


1) what props I expect will be passed to this thing?
2) and how functionaly Im going to use this component?

1) the text:

we need to pass some amount of text
to ask the user a question.
we will pass the text that we want to show as
{children}

in the place I plug the Confirm component
I plug in it something to pass down to the target component
as props.children
and I can use it inside the Confirm component.
so in this case we will pass some text to Confirm
and we will refer to that text as {children}

the Confirm component
also needs to accept this { children } property out of the props object
that its being called with.
so we did the
const Confirm = ({ children })



2) now how do deal with the user clicking yes or no

whenever a button is pressed
we will require a user to provide
a on accept
and on decline
call back to this component.

we will assume we get a prop called
onAccept
and onDecline
whenever we use the Confirm.

<Button onPress={onAccept}>Yes</Button>
notice that we don't do like
this. or bind
we just want to call the function.
also notice we are not immidiately invoking it by adding the ()
by not putting the () at the end
it means we are passing a reference to the function
we are not immidiately invoking it.

the way we did it means,
at some point in time you might wanna call this function
so for now just take hold it.


so the end result is that we are passing this component
a text
and onAccept and onDecline props as well.


lets now add the default properties our modal expects,
that thing we explaiend above.

first we will take care of the animation type.
animationType="slide"
by default we will always try to animate things for our users
to give them a fed back.

next prop is onRequestClose (a must have requirment for it to work in Android).
onRequestClose={() => {}}
I don't have anything specific that I want to do
when the user attempt to close this thing.
so I'll pass in an empty function
this is just to satisfy the requirment of Android with the modal.

next prop is transparent.
the transparent prop decide if this pop up should be
partially see through.
in this case we do.
the user can see the content behind the modal
and understand to what the question he sees now is related to.

the most critical is the visible flag.
visible={visible}
visible is either gonna be true or false
if we pass visible of true
we want the modal to be displayed
if we pass visible of false
we want to modal to go away, be hidden.
the Confirm component can't decide if it should be visible
we will only show it when the user taps on the delete button.
so we need to pass in a prop of visable.
so we need to tell this component if it should be visable.
const Confirm = ({ children, visible })

also the onAccept and onDecline
should be past in as props.
const Confirm = ({ children, visible, onAccept, onDecline })

*/

/* styling the modal

as we said
the modal by default has no styling to it.
so we will need to add some amount of styling
to make sure it looks nice when it is presented to the user.

lets now add that styling.

the most important style we have is the
containerStyle
the containerStyle is whats going to give us the
nice dark backround
that the user can see through all the content behind it.


we added our cardSectionStyle
justifyContent: 'center'
because by default our CardSection uses
justifyContent: 'flex-start'
but we want to make sure we center the content in there
and thats why over ride it.

next with with textStyle
flex: 1
this makes the text get the who space it has on the page.
fontSize: 18
consistant with the font size we used everywhere else.
textAlign: 'center'
align the text in the center of the screen.
lineHeight: 40
this is how much space is placed between
each line of text.

next with the containerStyle
backgroundColor: 'rgba(0, 0, 0, 0.75)'
0, 0, 0 is giving those values to the rgb which is black
the last value, 0.75
is give us an opacity of 3/4
this is what makes the container a little bit see through
which is what we want.

position: 'relative'

flex: 1
so it takes the who length of the screen.

justifyContent: 'center'
this is whats going to make everything that is inside of that container
appear centered on the screen,
so the CardSections we have will be centerd on the screen.


lets now apply these styles.
because we have a few styles to implement
we will destructor them a head of time
and then apply them to the elements.

apply the cardSectionStyle
only to the first CardSection.
we want only the first CardSection style
to center the text on the screen.

we now need to test it out
to see that it is working as intended.
lets now place it on the screen
in the EmployeeEdit.js file.
(move there, import it and use it).

*/
