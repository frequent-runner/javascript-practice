products=[
    {pid: 100, pName: 'apple', band: '5g' ,price: 120000, display: 'led'}, 
    {pid: 101, pName: 'samsaung' ,band: '5g',price:45000, display: 'led' },
    {pid: 102, pName: 'blackberry' ,band: '4g',price:50000, display: 'led '},
    {pid: 103, pName: 'nokia' ,band: '3g',price:1200, display: 'lcd'},
    {pid: 104, pName: 'motorola',band: '4g', price: 10000, display:'lcd'}
    ]

//1. print product name only
for(let data of products){
  console.log(data.pName);
}
console.log('--------------------');
//2. print all mobile details whose display is lcd
// for(data of products){
//     if(data.display=='lcd'){
//         console.log(data);
        
//     }
// }
products.filter(item=>item.display=='lcd').forEach(data=>console.log(data))
console.log('--------------------');

//3. print 5g mobile phone name
for(data of products){
    if(data.band=='5g'){
        console.log(data);
        
    }
}
console.log('--------------------');

//4. sort mobile based on price
item = products.sort((a,b)=>a.price - b.price)
console.log(item);
console.log('--------------------');

//5. print costly mobile
item = products.reduce((a,b)=>a.price>b.price?a:b)
console.log(item.pName);

//6. print low cost mobile
item = products.reduce((a,b)=>a.price<b.price?a:b)
console.log(item.pName);