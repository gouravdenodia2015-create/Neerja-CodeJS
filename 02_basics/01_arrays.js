//  ARRAYS in JAVA SCRIPT

const myarray = [1, 2, 3, 4, 5, 6]
console.log(myarray[0]);

const heros = new Array("Niraj", "Neerja", "Vishu")
console.log(heros[2]);

myarray.push(8)                 // ADDING AN ELEMENT IN ARRAY AT LAST
myarray.pop()                   // DELETING A LAST ELEMET FROM AN ARRAY
myarray.unshift(10)             //  ADDING AN ARRAY ELEMENT AT 0 POSITION
myarray.shift()                 // DELETING AN ARRAY ELEMET FROM 0TH POSITION


console.log(myarray.includes(10));   // RETURNS THE BOOLEAN VALUE IF AN ELEMENT EXIST IN AN ARRAY
console.log(myarray.indexOf(7));     // RETURNS THE INDEX OF THE GIVEN ELEMENT, IT RETURNS -1 IF ELEMENT NOT FOUND


const newArray = myarray.join()     //  JOIN METHOD JOINS TWO ARRAYS, THE DATATYPE OF NEW JOINED ARRAY WILL BE STRING
console.log(myarray);
console.log(newArray);

console.log(typeof myarray);
console.log(typeof newArray);


//  SLICE, SPICE

console.log("A ", myarray);

const myNewArray1 = myarray.slice(1, 3)

console.log(myNewArray1);
console.log("B ", myarray);

const myNewArray2 = myarray.splice(1, 3)

console.log(myNewArray2);
console.log("C ", myarray);




