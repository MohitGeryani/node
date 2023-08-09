// fs module is used for CRUD operations i.e CREATE, READ, UPDATE, DELETE

const { isUtf8 } = require("buffer");
const fs = require("fs");

// Creating File



// fs.writeFile("file.txt","This is the data we add to file", ()=> {
//     console.log("Data ADDED Successfully");
// }); // this is an asynchronous task and it takes time to execute , thus opt will be given as : Hello Guys!  and then Data ADDed Successfully  its called non-blocking io model 


// but if we want this task to be done synchronously then simply use fs.writeFileSync :)
// const b = fs.writeFileSync("file2.txt","This is the data we add to file2"); // this is an synchronous task now, sync doesn't require callback function as async requires ;)

// console.log(b);



console.log("Hello Guys!");


//  Reading File

 
fs.readFile("file.txt", "utf-8",(err ,data) => {            // this is again a async task
    console.log(data);
})  // in readfile ,we have to specify the file name, codec type (if we won't give codec, it will give data in a buffer format i.e <Buffer 54 61 93 39 > ) so commmon codec is "utf-8" , and a callback function to print data or handel error 





// Append File 


fs.appendFile("file.txt", "Data is updated", (err) => {
        console.log(err);
});


// Renaming existing File 

fs.rename("file.txt", "newFile.txt", (err) => {
    console.log(err);
})



// Delete Operation

fs.unlink("file2.txt", (err) => {               ///  Yess You got it right , this one is also an async task ;) 
 console.log(err);
});