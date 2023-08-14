// middleware  : Basically when we send Request to a server , it gives response in return but in the meantime or middle timing of this process , we can perform different operations using middleware 

//  for eg. we can authorize the user email and password with the data we've using middleware , i.e user is logging in but in the meantime middleware is authorizing the data to validate that process :)


// middlewares are nothing but a function

function ageDetector(req, res, next) {
        if(req.query.age > 18) {
          
            // res.send("This is Index  File");
            next(); // this has to be pass  to send the response of the '/' route , if we dont call next function, the response won't be sent to user and wo buffering me hi stuck ho kayega 
        }
        else {
            res.send("You Can't Access This Site!");
        }
}

module.exports = ageDetector;