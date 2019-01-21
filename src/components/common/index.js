export * from './Button';
export * from './Card';
export * from './CardSection';
export * from './Header';
export * from './Input';
export * from './Spinner';
export * from './Confirm';
export * from './MyDatePicker';


/*
with index.js we will be able to import the components we already have in
the folder common to be used in other components in a single line
without the need to import each of them seperately in each component we need them,
which would have caused our code to be longer and less organized.
explanation for the Button statment above (rest are the same):
take everything from the Button file and export it from index.js
*/
/*
the sign * in our export statments above
lets us import and export at the same time.
*/
/*
Important: delete the ward default from each of the files written in these files,
you can find the default word at the buttom of each specific file.
and make the export statment in each file an object.
should look like so:
export { Button };
*/
