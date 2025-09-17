const coding = ["js", "java", "ruby", "python", "cpp"]

coding.forEach(function (item){
//    console.log(item);
    
})


coding.forEach( (item, index, arr) => {
//    console.log(item, " ", index, " ", arr );
    
} )

function printMe(item){
    // console.log(item);
    
}

coding.forEach(printMe);

const myArr = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
    {
        languageName: "C++",
        languageFile: "cpp"
    }
]

myArr.forEach( (item) => {
    console.log(item);
    
} )
