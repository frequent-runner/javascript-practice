// check wether 2 is present or not

arr= [10,11,12,3,2,4]
n=2
ispresent=false
for(let i of arr){  
    if(i==n){
        ispresent=true
        break        
    }
}
ispresent?console.log('2 is present'):console.log('not present');


