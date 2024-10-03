// print all prime numbers between 2-50
for(n=2;n<=50;n++){
    isprime=true
    for(i=2;i<n;i++){
        if(n%i==0){
            isprime=false
            break;
        }
    } 
    if(isprime==true){
        console.log(n);
        
    }
}
console.log('--------------------------');

//display all arm strong numbers between 8-500
r=0
for(n=8;n<=500;n++){
    r=r+n**3
    console.log(r);
    
}