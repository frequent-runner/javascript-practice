//print javascript 3 time
n = 1

while (n <= 3) {
    console.log('javascript');
    n++
}

//print 1-5 numbers
i = 1

while (i <= 5) {
    console.log(i);
    i++
}

//print 10-1 
j = 10

while (j >= 1) {
    console.log(j);
    j--
}

//print all even numbers from 1-50
g = 1

while (g <= 50) {
    if (g % 2 == 0) {
        console.log(g);
    }
    g++
}

//odd number
g = 1

while (g <= 50) {
    if (g % 2 != 0) {
        console.log(g);
    }
    g++
}

//find the sum of 1-10 numbers
num = 1
sum = 0

while (num <= 10) {
  sum = sum + num 
    num++
}
console.log(sum);
