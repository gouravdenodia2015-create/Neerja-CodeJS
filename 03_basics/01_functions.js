//  FUNCTIONS

function myName()
{
    console.log("Neerja");
    console.log("Vishu");
    console.log("Gourav");
    
}

// myName()

function addTwoNumbers(number1, number2)
{
    console.log(number1 + number2);
    
}

function addTwoNumbers(number1, number2)
{
    const result = number1 + number2 
    return result
    
}

const result = addTwoNumbers(2, 4);
//console.log("Result : ", result);

// addTwoNumbers(2, 2)

function userLoginMessage(username = "sam")
{
    if(username === undefined)
    {
        console.log("PLEASE ENTER username...");
        return
    }
    return `${username} just logged in...`;
}

//  console.log(userLoginMessage("Neerja"));


function calculateCartPrice(val1, val2, ...number1)
{
    return number1;
}

console.log(calculateCartPrice(200, 400, 600, 800));
