// filter

a = [10, 12, 15, 13, 25, 2, 3, 5]

//w a p to print all even numbers from a given array
n = a.filter(num=>num%2==0)
console.log(n);

//w a p to print all the numbers>13 from the given array
n = a.filter(num=>num>13)
console.log(n);


//some() - it returns true or false on the condition applied to an array

n = a.some(num=>num>13)
console.log(n?'yes':'no');

