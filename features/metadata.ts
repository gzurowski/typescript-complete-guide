import 'reflect-metadata';

const plane = {
  color: 'red',
};

// attach metadata to object
Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

console.log(note);
console.log(height);

// attach metadata to property
Reflect.defineMetadata('color-note', 'hi color', plane, 'color');

const colorNote = Reflect.getMetadata('color-note', plane, 'color');

console.log(colorNote);
