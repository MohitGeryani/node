// Express4.18.1
// Fast, unopinionated, minimalist web framework for Node.js

/// Express framework makes node js more fast and with less code 

const express = require("express");

const path = require("path");


 



// console.log(express);

const app = express();



/// To access a file we need to have its path or Agr html file ko render krwana kisi route pr to uska path hona chaiye so here's the path of public folder the below code says directory name ko add krdo public folder ke sath

const pathDir = path.join(__dirname,'public');

console.log(pathDir);  


// now we want to render the index.html file present in public folder at root /download , so we have to use it , we will use app.use() function

app.use(express.static(pathDir));  // only express can use static function , if the directory have  index.html file it will automatically render it on home page i.e '/' root bydefault in express, no matter we defined something else on that '/' path






app.get("/", (req, res) => {     // request and response 

res.sendFile(`${pathDir}/indexs.html`)

   
});


app.get("/object", (req, res) => {

         res.send({
        name:"Name",         // this will automatically convert the object into json file and send as response 
        Age: 19

    })
});



// Creating A download link


app.get("/download", (req, res) => {     // request and response 

  res.download(`${pathDir}/indexs.html`);
});

app.get("/welcome", (req,res) => {
    res.send(`<h1>Hello</h1>`);
})








app.listen(3000, ()=> {

        console.log("Server Running At Port No: 3000");
});