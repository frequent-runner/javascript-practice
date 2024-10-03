//find whether the number is armstrong or not

num=153
sum=0
temp=num

while(num>0){
    id=num%10
    sum=sum+id**3
    num=Math.floor(num/10)
}
(sum==temp)?console.log('armstrong'):console.log('not armstrong');

