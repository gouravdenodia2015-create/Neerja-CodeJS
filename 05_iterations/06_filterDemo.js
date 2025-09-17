const coding = ["js", "ruby", "java", "python", "cpp"];

// const codingItem = coding.forEach( (item) => {
//     console.log(item);
//     return item;
    
// } )

// console.log(codingItem);

/* 
THIS SYNTAX IS NOT ALLOWED IN JAVASCRIPT BECAUSE THE FOR..EACH LOOP DOESN'T RETURN ANYTHING
IF WE WANT TO RETURN SOMETHING FROM ARRAY WE NEED  TO USE "FILTER"
*/

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayValues = myArray.filter( (item) => item > 5 );
// console.log(arrayValues);

// WHEN WE USE CURLY BRACKETS INSIDE FUNCTION SCOPE THEN WE MUST NEED TO USE RETURN KEYWORD FOR RETURNING THE VALUES.

const arrayValues2 = myArray.filter( (item) => { return item > 5 } );
// console.log(arrayValues);

const newArray = [];

myArray.forEach( (item) => {
    if(item > 4)
        //console.log(item);
        newArray.push(item);
        
} )

//console.log(newArray);


const books = [
    {
        title: 'Book1', gener: 'Fiction', publish: 2001, edition: 2017
    },
    {
        title: 'Book2', gener: 'Non-Fiction', publish: 2005, edition: 2009
    },
    {
        title: 'Book3', gener: 'History', publish: 2002, edition: 2010
    },
    {
        title: 'Book4', gener: 'Fiction', publish: 1899, edition: 2001
    },
    {
        title: 'Book5', gener: 'History', publish: 2000, edition: 20012
    },
    {
        title: 'Book6', gener: 'Non-Fiction', publish: 1990, edition: 2000
    },
    {
        title: 'Book7', gener: 'Fiction', publish: 1989, edition: 2005
    },
    {
        title: 'Book8', gener: 'History', publish: 1999, edition: 2020
    },
    {
        title: 'Book9', gener: 'Non-Fiction', publish: 2000, edition: 2011
    }
];

const newBook1 = books.filter( (book) => book.gener === 'History' );

//console.log(newBook1);


const newBook2 = books.filter( (book) => { 
    return book.publish >= 2000 && book.gener === 'Non-Fiction' 
});

console.log(newBook2);