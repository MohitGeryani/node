const express= require("express");



const server = express();

const user = require("./connection");


// get : get the  data from database

// post : send the data to database 

/// patch : updata data in database 

// delete: delete the data from database 



server.use(express.json());  // we have to use express.json coz  , data is sent as object but mongo db accepts json only or Bson


server.post("/", async (req,res) => {        // Database function always returns a Promise so we have to use async function


        /// Now we will send the data to the 'user' collection we made 
        
        try {

                const sendData = new user(req.body);  // we accessed body from request coz Data is in the body 

                const saveData =  await sendData.save();  // then we saved the data which we got from req.body    "Save" , is a database function and thus we have to use async function
                res.send(saveData);    // then we send the data as response 

        }
         catch (error) {

                res.status(404).send(error);

         }


        
}); 



server.get("/user",  async (req,res) => {
        try {                               // giving an empty object means , to get all the data , if we gave id of particular data , then it would have given us that particular data.
        const getData = await user.find({}); // now user.find is a DB function, thus we have to use async function and await for it
        res.send(getData);      
} catch (err) {
        res.status(404).send(err);

}

});



server.get("/user/:id" , async (req,res)  => {
       try {
        const id = req.params.id;
       const getDataBYID = await user.findById({_id: id});  // database me id ese  hoti h _id underscore ke sath and user jo id dega wo hmne as a value provide kr di h  
       res.send(getDataBYID);
       }
       catch(err) {
        res.send(err);
       }
});



// Patch OR UPdating The Data


server.patch("/update/:id", async (req,res) => {

        try {

                const id = req.params.id; // id that user will enter 
                                                // passing id of data    , // accessing the data from body , // now accessing the new data as true
                const updateData = await user.findByIdAndUpdate({_id: id}, req.body,{new: true});
                res.send(updateData);

        } catch(err) {
                res.send(err).status(500);
        }

});


/// Deleting Data from database 


        server.delete("/delete/:id", async (req,res) => {

                try {
                        const id = req.params.id;
                const DeleteData = await user.findByIdAndDelete({_id: id}, req.body);
                res.send(DeleteData); 
                }
                catch(err) {
                        res.status(500).send(err);
                }

        });



server.get("/", (req, res) => {
        res.send("This is Home Page");
});





server.listen(3000, ()=> console.log("Server Running At Port No: 3000"));


