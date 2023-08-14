const express = require("express");

const Router = express.Router();

const middleware = require("./middleware");

// Router.use(middleware); // this middleware will be applied to all the routes we created just by .use function 

// but if we want to apply middleware to our decided routes then pass it in the parameter of that route

Router.get("/",middleware,  (req, res) => {
 
     console.log(req.query); /// basically when someone give any query on a page or route , it shows that query in the form of object as key value pairs , no query = empty object 
                               // so when i gave no query then opt was: {}, but when i gave query as /?home then opt was : { home: '' }, but when i gave /?q=home then opt: { q: 'home' }
                                                                                            // query is given as  " /?query "

    res.render("home", {
        title: "home"
    });

});

Router.get("/home", (req, res) => {

    res.render("indexs", {
        title: "Index Page"
    });
    
})


/// Middle ware to handle 404 error for wrong route 
// Router.use((req, res) => {
//     res.status(404).render("404", {
//         title: "404 Not Found"
//     });
// });





module.exports = Router;