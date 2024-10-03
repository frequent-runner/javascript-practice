//w a p to print the pairs whose sum is 6

b=[2,3,4,5]//2+4=6
p=false
for(n=0;n<b.length;n++){
    for(i=n+1;i<b.length;i++)
    if(b[n]+b[i]==6){
        p=true  
        console.log(`pairs are ${b[n]}+${b[i]}`);        
    }
}
!p && console.log('no such pair');

