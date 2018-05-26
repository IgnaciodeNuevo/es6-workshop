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


// If you have an semaforo array with 3 colours return the next isOnTheArray

const semaforo = ['Rojo', 'Naranja', 'Verde'];

function testSemaforo(color) {
  if (color === 'Rojo') {
    console.log('Naranja');
  } else if (color === 'Naranja') {
    console.log('Verde');
  } else if (color === 'Verde') {
    console.log('Rojo');
  } else {
    console.log('Error');
  }
}

testSemaforo('Verde');
