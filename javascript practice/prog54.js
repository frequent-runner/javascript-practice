//id,name,price,stock

products = [
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'Tiger',20,30],
    [6,'unibic',60,0],
    [7,'goodday',70,20]
]

//display all product name
products.forEach(a=>console.log(a[1]))
console.log('---------------------');

//display products whose price is <50
products.filter(a => a[2]<50).forEach(b => console.log(b[1]))
console.log('---------------------');

//print price of oreo
pro = products.find(a => a[1]=='oreo')
console.log(pro[2]);
console.log('---------------------');

//print costly product name
pro = products.reduce((a,b)=>a[2]>b[2]?a:b)
console.log(pro[1]);
console.log('---------------------');

//display out of stock product
products.filter(a => a[3]==0).forEach(b=>console.log(b[1]))

console.log('---------------------');

//sort product based on stock in decsending order
pro = products.sort((a,b)=>b[3]-a[3])
console.log(pro);
console.log('---------------------');

//print product having maximum available stock
pro = products.reduce((a,b)=>a[3]>b[3]?a:b)
console.log(pro);
console.log('---------------------');

//is there any product the can be purchased by rs 10
pro = products.some(a=>a[2]==10)
console.log(pro?'yes':'no')
console.log('---------------------');

//is there any product in the range of 10 - 30
pro = products.some(a => a[2]<=30 && a[2]>=10)
console.log(pro?'yes':'no');
console.log('----------------------');

//print all products in the range of 10 -30
pro = products.filter(a=>a[2]<=30 && a[2]>=10)
console.log(pro);