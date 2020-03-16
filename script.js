const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = pet => new Date().getFullYear() - pet.bornOn;

// var petsWithAge = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   pet.age = getAge(pet);

//   petsWithAge.push(pet);
// }
const petsWithAge = pets.filter(elm => (elm.age = getAge(elm)));
console.log(petsWithAge);

// let petsWithAge = [];
// pets.map(elm => {
//   const pet = elm;
//   pet.age = getAge(pet);
//   petsWithAge.push(pet);
// });

// console.log(petsWithAge);

// var dogs = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.type === "dog") {
//     dogs.push(pet);
//   }
// }

const dogs = pets.filter(elm => elm.type == "dog");

console.log(dogs);

// var jasper;
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.name === "Jasper") {
//     jasper = pet;
//   }
// }

// const jasper = pets.filter(elm => elm.name === "Jasper")[0];

const jasper = pets.find(elm => elm.name === "Jasper");

console.log(`Jasper is ${jasper.age} years old`);
