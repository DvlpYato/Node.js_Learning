//Module scope
console.log(__dirname);
console.log(__filename);

//path
const path = require('path');

console.log(path.join(__dirname,'app.js'))

//appendfile

const fs = require('fs');
fs.appendFile('output.txt' , 'this is appendfile', 'utf-8' , (err , data) =>{});


fs.readFile('output.txt', 'utf-8' , (err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data);
});
