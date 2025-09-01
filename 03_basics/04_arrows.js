const user = {
    username : "Neerja",
    price : 999,

    welcomeMessage : function()
    {
        console.log(` ${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
user.username = "Gourav"
// user.welcomeMessage()

// console.log(this);

function chaiAurCode()
{
    const username = "Neerja";
    console.log(this.username);
}

// chaiAurCode();

const chai = function()
{
    const username = "Neerja";
    console.log(this.username);

}

// chai()

const chaiCode = () =>
{
    const username = "Neerja";
    console.log(this.username);
}

// chaiCode()

//  BASIC SYNTAX OF CREATING AN ARROW FUNCTION

const addTwo = (num1, num2) =>
{
    return num1 + num2
}

//console.log(addTwo(5, 5));

const arrowDemo = (num1, num2) => num1 + num2;

// console.log(arrowDemo(5, 9));


const arrowDemo2 = (num1, num2) => (num1 + num2);

// console.log(arrowDemo2(5, 9));

const arrowDemo3 = () => ({username: "Neerja"});

console.log(arrowDemo3());