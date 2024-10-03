//find whether the number is palindrome or not-121

num=121
str=''
id=0
temp=num
while(num>0){
    id=num%10
    str=str+id
    num=Math.floor(num/10)
}
temp==str?console.log('palindrome'):console.log('not palindrome');


