const path = require("path");

const a = path.basename("foo/12/22/Something.htm"); 

console.log(a); // basename will only return a base name of the directory i.e something .html and ignores the whole path 

const b = path.dirname("foo/12/22/Something.htm"); // dirname will return the whole path instead of the base name i.e Something,htm 


// base name is the actual module or file name 

//dir name is the folder in which the file present 

console.log(b);


const c = path.extname("foo/12/22/Something.htm");

console.log(c); // simply returns the extenion name of the file or module 


