const myName = "Neerja"
const repoCount = 10

// console.log(myName + repoCount);        //outdated method
// console.log(`My name is ${myName} and my repositories on git hub ${repoCount}`);        //always use this way backpics

const gameName = new String('NeerjaDinodia')

console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('D'));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-5, -5);
console.log(anotherString);

const newStringOne = "      Vishu         "
console.log(newStringOne);
console.log(newStringOne.trim());

const urlDemo = "https://neerjadinodia.com/neerja%20vishu"
console.log(urlDemo.replace('%20','-'));
console.log(urlDemo.includes('vishu'));

const stringDemo = "Neerja-Vishu-Preksha"
console.log(stringDemo.split('-'));





