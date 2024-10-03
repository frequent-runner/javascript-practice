//call back function

function greet(name,callback){
    console.log(`hai ${name}`);
    callback()
}

function callme(){
    console.log('im a call back function');
    
}

greet('peter',callme)



// eg:2

//asychronous function
setTimeout (()=>{
    console.log('hello');
    
},5000)