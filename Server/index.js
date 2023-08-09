// Now we'll make a server in node js 

const http = require("http");

const server = http.createServer((request, response) => {
if(request.url == "/") {
    response.end("Hi this is my First NodeJS Server");
    
}
else if(request.url == "/download") {
    response.end("Hi this is new download page");
}
else if(request.url == "/about") {
    response.end("Hi this is About page");
}
else {
    
    response.end("404: Page Could Not Found!");
}

})



server.listen(3000, ()=> {
    console.log("Server Listening on Port: 3000")});




