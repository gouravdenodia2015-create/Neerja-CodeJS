//  SCOPES OF VARIABLES

let a = 3000

if(true)
{
    let a = 10;
    const b = 20;
    // console.log("Inner A :", a);
    
}
// var c = 3000

// console.log("A :", a);
// console.log("B :", b);
// console.log("C :", c);

function one()
{
    const username = "Neerja"
    
    function two()
    {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    // two();
    
}

// one()

if(true)
{
    const username = "Neerja"

    if(username === "Neerja")
    {
        const website = " Youtube"
        //console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);

//  ++++++++++++++++++++++++++++++++++++++++    INTERESTING     +++++++++++++++++++++++++++++++++++++++++++

console.log(plusOne(5));

function plusOne(num1)
{
    return num1 + 1;
}


const addTwo = function(num1)
{
    return num1 + 2;
}

console.log(addTwo(6));