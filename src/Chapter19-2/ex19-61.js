const person = {name: 'Lee'};

console.log(Reflect.has(person, 'name'));
console.log(Reflect.has(person, 'age'));

console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('age'));

console.log(person.hasOwnProperty('toString'));