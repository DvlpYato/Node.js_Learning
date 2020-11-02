/*const name = 'Eakkaphop';
const hello = () => console.log("hello");

//hello();
module.exports = {
hello,
name 
}*/

//module.exports.hello = hello;
//module.exports.name = name;


const fs = require('fs');
//const { compileFunction } = require('vm');

const getData = function(err , data ){
    console.log(data);
}




/*fs.readFile('data.txt' , 'utf-8',(error , data) => {
    if(error){
        console.log(error);
    }
    console.log('data = ' , data);
});*/


//read files to sysc 
/*
const data1 = fs.readFileSync("data.txt" , "utf-8" , getData );
*/

fs.writeFile("output.txt" , "this output data" , 'utf-8' ,(err,data) =>{
    if(err){
        console.log(err);
    }
    console.log('data.txt', data);     

});

fs.readFile("data.txt", "utf-8" , getData); 


