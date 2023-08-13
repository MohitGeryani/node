// Sending Data using Template Engine

const server = require("express");

const path = require("path");
const app = server();

app.set("view engine", "ejs"); // this is we telling that we're including view engine in express

console.log(app.get("view engine"));

// console.log(path.join(__dirname, "views")); /// the views  folder is already created with ejs so we dont need to give any path

app.get("/", (req, res) => {

    res.render("home", {
        title: "home"
    });

});

app.get("/home", (req, res) => {

    
})






app.listen(2000, () => {
  console.log("Server Running At Port No. 2000");
});
