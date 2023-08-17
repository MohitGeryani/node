const mongoose = require("mongoose");

                                                    // database name 
mongoose.connect("mongodb://127.0.0.1:27017/nodeJsDataBase").then(()=> {
    console.log("Connection Succesful")
}).catch((err)=> {
        console.log(err);
});

const schema = new mongoose.Schema({    // new keyword make a copy of the current variable and assign it to the variable after new or assigned variable i.e const schema = new mongoose.schema() so schema is copied to mongoose.schema() 
    
    name: String       // name : type of name
                                                                    // here in schema we define the structure of data 
});


// we are making a collection of data  in database 'nodeJsDataBase'
const user = mongoose.model("user", schema);

module.exports = user;