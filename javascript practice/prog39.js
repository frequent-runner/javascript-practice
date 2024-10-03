//input array = [4,5,6]
//output array = [11,10,9]

arr = [4,5,6]
// sum=0
// for(let n of arr){
//     sum=sum+n
// }
// // console.log(sum);
// output=[]
// for(let num of arr){
//     output.push(sum-num)   
// }
// console.log(output);
n=7
output=[]
for(let num of arr){
    output.push(num+n)
    n=n-2   
}
console.log(output);


