//voting eligibility

age=25

if(age>18){
    console.log('eligible to vote');
}
else{
    console.log('not eligible to vote');
    
}

//positive or negative number

num=10

if(num<0){
    console.log('negative number');
    
}
else if (num==0) {
    console.log('number is neither positive nor negative');
    
}
else{
    console.log('positive number');
}

//find the largest amoung two given number

num1=200
num2=300

if(num2>num1){
    console.log(`larger number is ${num2}`);
    
}
else if (num1==num2) {
    console.log('both are equal');
    
}
else{
    console.log(`larger number is ${num1}`);
    
}



//find given  number is odd or even
w=11
// if(w%2==0){
//     console.log('even number');
    
// }
// else{
//     console.log('odd number');
    
// }

w%2==0?console.log('even number'):console.log('odd number');

