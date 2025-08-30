//  SINGLETON OBJECT

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Vishu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// NON SINGLETON OBJECT

const regularUser = {
    email : "vishu@neerja.com",
    fullName : {
        userFullName : {
            firstName : "Vishu",
            lastName : "Saini"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1 : "A",
    2 : "B"
}

const obj2 = {
    3 : "C",
    4 : "D"
}

const obj4 = {
    5 : "E",
    6 : "F"
}
// const obj3 = {obj1, obj2}
//console.log(obj3);

const obj5 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj6 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);
// console.log(obj5);
// console.log(obj6);

const userObj = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 2,
        email: "v@gmail.com"
    },
    {
        id: 3,
        email: "g@gmail.com"
    }
]

// console.log(userObj[1].email);
// console.log(userObj);

console.log(tinderUser);
console.log(Object.keys(tinderUser));       //  IMP
console.log(Object.values(tinderUser));     //  IMP
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));
console.log(tinderUser.hasOwnProperty("full name"));




