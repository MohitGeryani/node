// Now we'll make a server in node js 


const http = require("http");

const fs = require("fs");


const JsonData = fs.readFileSync("api.json", "utf-8");

// now we'll convert it into an object 

const ObjectData = JSON.parse(JsonData);


const server = http.createServer((request, response) => {
if(request.url == "/") {
    response.end("Hi this is my First NodeJS Server");
    
}
else if(request.url == "/download") {
    response.end("Hi this is new download page");
}
else if(request.url == "/about") {
    response.end(ObjectData[0].name);
}
else {
    
    response.end("404: Page Could Not Found!");
}

})



server.listen(3000, ()=> {
    console.log("Server Listening on Port: 3000")});












    // Note: we can send the string data or Json data to the server but  , we cannot send the whole object to server (for that we need to convert object into JSON format)


