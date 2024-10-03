//different ways to access an array

//1)for

//2)in-access the index of an array

//3)of-directly access the items in an array

fruits = ['apple','orange',"mango",'strawberry','pineapple']

for(index=0;index<fruits.length;index++){
    console.log(fruits[index]);
    
}
console.log('------------------');

//in

for(let i in fruits){
    console.log(fruits[i]);
    
}
console.log('-------------------');

//of

for(let n of fruits){
    console.log(n);
    
}