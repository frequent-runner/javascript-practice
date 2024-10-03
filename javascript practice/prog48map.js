// find the square of each element in the given array

a = [10,11,12,13,14,15]

for(let num of a){
    n=num**2
    console.log(n);
    
}

console.log('---------------');

sq = a.map(num=>num**2)
console.log(sq);

console.log('----------------');

a.forEach(num=>{
    console.log(num**2);
    
})
