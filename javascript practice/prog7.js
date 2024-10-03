//find the reverse of a given number using while loop 151
n=151
str=''
while(n>0){
    r=n%10
    str=str+r
    n=Math.floor(n/10)
}
console.log(str);








