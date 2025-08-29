//  SINGLETON OBJECTS
//  THE OBJECTS WHICH IS ONLY SINGLE CALLED SINGLETON OBJECTS. THIS TYPE OF OBJECTS CAN BE CREATED USING CONSTRUCTOR

//  OBJECT LITERALS

const mySymbol = Symbol("Something")

const JSUser = {
    name : "Neerja",
    "full name" : "Neerja Dinodia",
    [mySymbol] : "Symbol1",
    age : 18,
    email : "neerja@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySymbol]);

JSUser.email = "neerjadinodia@gmail.com" 
// Object.freeze(JSUser)
JSUser.age = 21;
// console.log(JSUser)

JSUser.greeting = function(){
    console.log("Hello World");
}
JSUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());
