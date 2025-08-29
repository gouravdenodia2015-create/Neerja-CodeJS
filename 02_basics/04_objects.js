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

// const obj3 = {obj1, obj2}
//console.log(obj3);

const obj3 = Object.assign({}, obj1, obj2)
