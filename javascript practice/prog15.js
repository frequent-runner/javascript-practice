//check whether the given number is prime or not 

n=5 
isprime=true
for(i=2;i<n;i++){

    if(n%i==0){
        isprime=false
        break;        
        
    }
    
       
}
console.log(isprime?'prime number':'not a prime number');


