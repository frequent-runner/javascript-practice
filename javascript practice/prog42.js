//print common numbers from a given array

p=[10,11,12,20,30]
q=[11,20,25,30,35]
//11,20,30
common=false
for(let n of p){
    for(let i of q){
        if(n==i){
            common=true
            console.log(n);
            
        }
    }
}
!common && console.log('no common numbers');
