// Calculate average of an array

let items = [1, 2, 3];
let reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(items.length);

average = (items.reduce(reducer) / items.length);

console.log('Average:', average);


// Calculate the lenght of a JavaScript Object

let film = {
    title: 'Road Warrior',
    actress: 'Charlize <3'
};

let entries = Object.entries(film);

console.log(entries.length);


// What does push and pop to an Array?

const clase = [1, 2, 3];
console.log(clase.push(9));


// If you have an array and a string, verify if the value is within the array.

let items = ['asdfasdf', 234, 'as'];

function isOnTheArray(arr, value) {
  if (items.indexOf(value) != -1) {
    console.log('true');
  } else {
    console.log('false');
  }
}

isOnTheArray(items, 'as');
