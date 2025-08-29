//  ARRAY PART 2

const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

const newArray = marvelHeros.concat(dcHeros)
//console.log(newArray);

const allHeros = [...marvelHeros, ...dcHeros]
//console.log(allHeros);

const anotherArray = [1, 2, 3, 4, [5, 6, 7], 7, [8, 9, [4, 5]]]
const anotherNewArray = anotherArray.flat(Infinity);
// console.log(anotherArray);
// console.log(anotherNewArray);

// console.log(Array.isArray("Neerja"));
// console.log(Array.from("Neerja"));
// console.log(Array.from({name: "Neerja"}));

let score1 = 100;
let score2 = 200;
let score3 = [300, 400];
console.log(Array.of(score1, score2, score3));

