//  ----------------------ARRAY SPECIFIC LOOPS------------------------------
//  FOR...OF LOOP

const myArray = ["A", "B", "C", "D", "E"]

for (const key of myArray) {

    //console.log(key);
    
}

const myString = "Neerja Dinodia"

for (const str of myString) {
    
    if(str == " ")
    {
            break;
    }
    //console.log(str);
    
}

//  MAPS

const myMap = new Map()

myMap.set("In", "INDIA")
myMap.set("USA", "UNITED STATES")
myMap.set("SL", "SHRILANKA")
myMap.set("SL", "SHRILANKA")

//console.log(myMap);

for (const [key, value] of myMap) {

    //console.log(key, ":-", value);
    
}

const myObject = {
    game1 : "NFS",
    game2 : "Vice City",
    game3 : "WWE"
}

for (const [key, value] of myObject) {

    //console.log(key, ":", value);
    
}

//  OBJECTS CAN NOT BE USED IN FOR...OF LOOP FOR ACCESSING OBJECTS WE NEED TO USE FOR...IN LOOP