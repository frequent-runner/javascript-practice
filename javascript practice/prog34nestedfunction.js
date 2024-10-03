//nested function
 
//global property can access both parent and child 
const global ='global' 

const parent = () =>{
    let parentVariable = 'PARENT'
    console.log(parentVariable);
    console.log(global);
    

    //but child variable cannot access parent veriable
    
    const child =()=>{
        let childVariable = 'CHILD'
        //parent variable can be accessed inside chilod variable
        console.log(global);
        console.log(parentVariable);
        console.log(childVariable);
        
    }
    child()
}

parent()

// asynchronous functions - functions with time delay eg : settimeout(), API calls
// syncrhronous functions - functions without time delay   
// anonymous functions -