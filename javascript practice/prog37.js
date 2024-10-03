exp = [12000, 24000, 35000, 10000, 54000, 40000]

//find the lowest exp
lowest = exp[0]
for (let i of exp) {
    if (i <= lowest) {
        lowest = i

    }
}
console.log(lowest);

//find the highest exp
highest = exp[1]
for (let i of exp) {
    if (i >= highest) {
        highest = i
    }
}
console.log(highest);

//find the total exp

sum=0

for(let i of exp){
    sum=sum+i
}
console.log(sum);
