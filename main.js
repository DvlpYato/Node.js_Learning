//เรียก module จากอีกไฟล์
//const hello = require('./app');



//hello.hello();
//console.log(hello.name);

//testing git


/*const Hello = name => console.log(`Hello $(name)`);
const mycallback = callback => callback('Eakkphop');

mycallback(Hello);*/
const hello = (error , name ) => {
    if(error){
        throw error
    }
    console.log(`Hello $name`);
}

const mycallback = callback => {
    if(!callback){
        callback(new Error("No calllback"))
    }
    callback(null,"Eakkaphop");
}

//check user 2
