//  OBJECTS IN FUNCTION

const user = {
    username : "Neerja",
    price : 199
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}...`);
    
}

//handleObject(user)        //  CALLING FUNCTION - OBJECT AS ARGUMENT



//CALLING FUNCTION IN ANOTHER WAY
// handleObject({                   
//     username : "Vishu",
//     price : 399
// })

//  ARRAY INSIDE FUNCTION

const demoArray = [100, 200, 300, 600]

function objectWithArray(getArray)
{
    return getArray[0];
}

// console.log(objectWithArray(demoArray));                 //  CALLING FUNCTION WITH ARRAY

//console.log(objectWithArray([500, 900, 400, 300]));           // CALLING FUNCTION WITH ARRAY IN ANOTHER WAY

