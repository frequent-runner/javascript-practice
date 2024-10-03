//display the numbers whose exponential is in the range od 8-36
//user can input the exponential value (power)
//power=3

power=2
num=1
low=8
up=36
while(num<=36){
    if(low<=num**power && num**power<=up){
        console.log(num);
        
    }
    num++
}