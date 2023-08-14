// Sending Data using Template Engine

const express = require("express");

const path = require("path");

const app = express();

// const Router = express.Router();  // We can use router intead of app.get function and Router have many advantages especially it can be used as module to reduce large code in a same file

const Router = require("./Router");

app.use(Router);  // simply we're using our roots from Route.js and it makes code readable and optimal

app.set("view engine", "ejs"); // this is we telling that we're including view engine in express

console.log(app.get("view engine"));




// console.log(path.join(__dirname, "views")); /// the views  folder is already created with ejs so we dont need to give any path

// app.get("/", (req, res) => {

//     res.render("home", {
//         title: "home"
//     });

// });

// app.get("/home", (req, res) => {

    
// })






app.listen(2000, () => {
  console.log("Server Running At Port No. 2000");
});
