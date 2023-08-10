// here we will see how a api works

const obj = {

    name: "Mohit", 
    age: 19,
    address: "Jaipur"

}

// Lets convert this object into json format 

const jsonData = JSON.stringify(obj);   // Json.stringify converts object into Json

// console.log(obj.address);


console.log(jsonData);           // api is always in the form of json  , when key and value both are in double quotes "" then its a json form which is valid for apis 


// Converting Json into object

const objectData = JSON.parse(jsonData);  // JSON. parse converts Json into object

console.log(objectData);
