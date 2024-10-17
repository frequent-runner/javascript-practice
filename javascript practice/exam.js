// [id, brand, model, type, pricePerDay, available]
carBooking =[
[1, 'Toyota', 'Corolla', 'Sedan' ,50,10],
[2, 'Honda', 'Civic', 'Sedan' ,55,8],
[3, 'Ford', 'Mustang', 'Sports Car' ,80,5],
[4, 'Jeep','Wrangler', 'SUV',70,7],
[5, 'Nissan', 'Altima', 'Sedan' ,45,12]]

// 1) Print all car brand
console.log('Print all car brand');
carBooking.map(item => item[1]).forEach(i=>console.log(i))
console.log('------------------------');

// 2) Print total number of cars available
console.log('Print total number of cars available');
console.log(carBooking.length);
console.log('------------------------');

// 3) Print sedan car details
console.log('Print sedan car details');
car = carBooking.filter(item=>item[3] == 'Sedan')
console.log(car);
console.log('------------------------');

// 4) Print car with price per day greater than 60
console.log('Print car with price per day greater than 60');
carBooking.filter(item=> item[4]>60).forEach(i=>console.log(i[1]))
console.log('------------------------');

// 5) Print details of jeep wrangler
console.log('Print details of jeep wrangler');
car = carBooking.find(item => item[2] == 'Wrangler')
console.log(car);
console.log('------------------------');

// 6) Arrange cars based on the descending order of price per day
console.log('Arrange cars based on the descending order of price per day');
carBooking.sort((a,b)=>b[4]-a[4]).forEach(c=>console.log(c[1]))
console.log('------------------------');

// 7) Sort car based on ascending order of available cars.
console.log('Sort car based on ascending order of available cars.');
carBooking.sort((a,b)=>a[5]-b[5]).forEach(c=>console.log(c[1]))
console.log('------------------------');

// 8) Find the car with highest availability
console.log('Find the car with highest availability');
car = carBooking.reduce((a,b) => a[5]>b[5]?a:b)
console.log(car[1]);
console.log('------------------------');

// 9) Find the revenue if all the cars are rented for a day
console.log(' Find the revenue if all the cars are rented for a day');
car = carBooking.map(item=>item[4]).reduce((a,b) => a+b)
console.log(car);
console.log('-------------------------');

// 10) Count the number of sedan car available
console.log('10 Count the number of sedan car available');
car = carBooking.filter(item => item[3]=='Sedan').map(c=>c[5]).reduce((a,b)=>a+b)
console.log(car);
console.log('-------------------------');

// 11) Find the car with lowest availability
console.log('Find the car with lowest availability');
car = carBooking.reduce((a,b) => a[5]<b[5]?a:b)
console.log(car);
console.log('-------------------------');

// 12) Print all car models
console.log('all car models');
carBooking.forEach(item=> console.log(item[2]))
console.log('-------------------------');

// 13) Print total number of cars available
console.log('Print total number of cars available');
car = carBooking.map(item=>item[5]).reduce((a,b)=>a+b)
console.log(car);
console.log('-------------------------');

// 14) Find the details of the car with type - mustang
console.log('Find the details of the car with type - mustang');
car = carBooking.filter(item => item[2]=='Mustang')
console.log(car);
console.log('-------------------------');

// 15) Check if there is any car with price per day exactly 55.
console.log('Check if there is any car with price per day exactly 55');
car = carBooking.some(item => item[4]==55)
console.log(car?'yes':'no');
console.log('-------------------------');


//2)
 const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
//1) find the sum of all numbers in the nested array.
item = data.flat(2).reduce((a,b)=>a+b)
console.log(item);

//2) find the largest and the smallest number
item = data.flat(2).reduce((a,b)=>a>b?a:b)
console.log(item);

item = data.flat(2).reduce((a,b)=>a<b?a:b)
console.log(item);

//3) find the average of all numbers in the given array.
temp = data.flat(2)
item = data.flat(2).reduce((a,b)=> a+b)/temp.length;
console.log(item);


// 3) string

// 1)Write a JavaScript function that checks whether a string ends with a specified suffix.


// 2)Write a JavaScript program to find the most frequent character in a given string-
// 
// 3) Write a JavaScript function to split a string and convert it into an array of words.
// split
// 4) Write a function that determines if two strings are anagrams of each