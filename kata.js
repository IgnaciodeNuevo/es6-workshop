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

