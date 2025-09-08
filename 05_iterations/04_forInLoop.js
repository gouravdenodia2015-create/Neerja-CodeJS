
const myObject = {
    js : "Java Script",
    cpp : "C++",
    rb : "Ruby",
    py : "Python"
}

for (const key in myObject) {
    
    //console.log(`${key} :- ${myObject[key]}`);
    
}

const programming = ["js", "ruby", "python", "c++"]

for (const key in programming) {

    //console.log(programming[key]);
    
}

const myMap = new Map()

myMap.set("In", "INDIA")
myMap.set("USA", "UNITED STATES")
myMap.set("SL", "SHRILANKA")
myMap.set("SL", "SHRILANKA")

for (const key in myMap) {
     
    //console.log(key);
    
}

//  MAPS ARE NOT ITERATABLE IN FOR...IN LOOPS FOR THAT YOU NEED TO USE FOR...OF LOOP
