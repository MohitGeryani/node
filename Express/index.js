// Express4.18.1
// Fast, unopinionated, minimalist web framework for Node.js

/// Express framework makes node js more fast and with less code 

const express = require("express");

// console.log(express);

const app = express();

app.get("/", (req, res) => {     // request and response 

    res.send("Hi this is my first express root server ")
});

app.get("/download", (req, res) => {     // request and response 

    res.send("Hi this is my first express download page ")
});




app.listen(3000, ()=> {

        console.log("Server Running At Port No: 3000");
});