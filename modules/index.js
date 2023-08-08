// this is my first node js program 

// everything  in node js is a module 

let a = "Mohit";

console.log(a);


const add =  require("./add");  // to import any module for eg. here we're importing add.js and using it now opt : Mohit 8
// require("./sub");  // to import any module for eg. here we're importing sub.js and using it now opt : Mohit 8 10

const sum = add(2,2);

console.log(sum);

