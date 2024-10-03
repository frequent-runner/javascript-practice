// convert 123 to 321

num=123
str=''
x=0

while(num>0){
    id=num%10
    str=str+id
    num=Math.floor(num/10)
}
console.log(Number(str));
