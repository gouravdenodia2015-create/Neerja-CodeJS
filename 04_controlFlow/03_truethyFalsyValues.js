const userEmail = []
/*
if(userEmail)
{
    console.log("Email Found...");
    
}
else
{
    console.log("Email Not Found...");
    
}*/

//  FALSY VALUES
//  0, -0, 0n, '', null, undefined, false, NaN, 

//  TRUETHY VALUES
// " ", "0", 'NULL', [], {}, FUNCTION() {}

const arraydemo = []

// HOW TO CHECK ARRAY IS EMPTY OR NOT

/*
if(arraydemo.length === 0)
{
    console.log("Good");
    
}
else
{
    console.log("Bad");
    
}*/


// HOW TO CHECK OBJECT IS EMPTY OR NOT

const myObj = {}

/*
if(Object.keys(myObj).length === 0)
{
    console.log("Empty");
    
}
else
{
    console.log("Not Empty");
    
}*/

//  NULLISH COALESCING OPERATOR (??) = NULL UNDEFINE

const var1 = 10 ?? 20;
const var2 = null ?? 10;
const var3 = undefined ?? 20;
const var4 = null ?? 20 ?? 30;

//  console.log(var4);

//  TERNARY OPERATOR (?:)

//  SYNTAX
//  CONDITION ? TRUE STATEMENT : FALSE STATEMENT

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Affordable") : console.log("Not Affordable");


