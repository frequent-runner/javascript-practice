// find the cube of a given  number using map
a = [10,11,12,13,14,15]


num = a.map(n=>n**3)
console.log(num);

// create a new array with number <=13 increment by 1 and number >13 decrement by 1
op = [11,12,13,14,13,14]

inc = op.map(num => num<=13?num+1:num-1)
console.log(inc);
