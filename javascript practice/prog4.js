//find fizz when a number is divisible by 3
// - buzz when a number is divisible by 5
// - fizzbuzz when a number is divisible by 15
num = 956
if (num % 3 == 0) {
    console.log('fizz');
}
else if (num % 5 == 0) {
    console.log('buzz');

}
else if (num % 15 == 0) {
    console.log('fuzzbuzz');

}
else {
    console.log(`${num} is not divisible by 15, 5, 3`);

}