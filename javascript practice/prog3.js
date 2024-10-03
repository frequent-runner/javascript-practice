//find the second largest amoung three numbers and arrange them in decending order

a = 700
b = 600
c = 500

if(a>b){
    if(b>c){
        console.log(`second largest number is${b}`);
        console.log(`decending order ${a},${b},${c}`);
        
    }
    else{
        console.log(`second largest number is ${c}`);
        console.log(`decending order ${a},${c},${b}`);
        
        
    }
}
else if(b>a){
    if(a>c){
        console.log(`second largest number is ${a}`);
        console.log(`decending order ${b},${a},${c}`);
        
    }
    else{
        console.log(`second largest number is ${c}`);
        console.log(`decending order ${b},${c},${a}`);
        
    }
}
else if(c>a){
    if(a>b){
        console.log(`second largest number is ${a}`);
        console.log(`decending order ${c},${a},${b}`);
        
    }
    else{
        console.log(`second largest number is${b}`);
        console.log(`decending order ${c},${b},${a}`);
        
    }
}
else{
    console.log('all are equal');
    
}