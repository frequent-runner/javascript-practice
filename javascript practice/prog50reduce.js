//reduce method

a = [10,11,2,7,3,6,1]

//w a p to find the highest of the array
num = a.reduce((a,b)=>a>b?a:b)
console.log(num);

//w a p to find the lowest of the array
num = a.reduce((a,b)=>a<b?a:b)
console.log(num);


//w a p to find the sum of the give array
num = a.reduce((a,b)=>a+b)
console.log(num);


