let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myNewDate = new Date(2025,0,23);
// let myNewDate = new Date(2025,0,23, 5, 3);
// let myNewDate = new Date("2025-01-14");
let myNewDate = new Date("01-14-2025")
//console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getDay())
// console.log(newDate.getMonth() + 1)
newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate.toLocaleString());
