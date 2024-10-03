//[no, district, +ve cases, death rate, curred rate, 1st dose vaccine, 2nd dose vaccine] 
coviddata = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log('highest +ve case');
console.log('-------------------');
arr = coviddata.reduce((a,b)=>a[2]>b[2]?a:b)
console.log(arr);
console.log('-------------------');

//2. district having Highest 1st dose vaccine
console.log('highest 1st dose');
console.log('-------------------');
arr = coviddata.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(arr);
console.log('-------------------');

//3. district having lowest death rate
console.log('lowest death rate');
console.log('-------------------');
arr = coviddata.reduce((a,b)=>a[3]<b[3]?a:b)
console.log(arr);
console.log('-------------------');

//4. sort data with +ve case in descending order
console.log('+ve cases in descending order');
console.log('-------------------');
arr = coviddata.sort((a,b)=>b[2]-a[2])
console.log(arr);
console.log('-------------------');

//5. is district with +ve cases > 15000
console.log('+ve cases > 15000');

arr = coviddata.some(a=>a[2]>15000)
console.log(arr?'yes':'no');

console.log('--------------------');

//6. sort data with 1st dose vaccine ascending order
console.log('1st dose vaccine in ascending order');
console.log('-------------------');
arr = coviddata.sort((a,b)=>a[5]-b[5])
console.log(arr);
console.log('-------------------');

//7. Print Thrissur details
console.log('Thrissur details');
console.log('-------------------');
arr = coviddata.find(a=> a[1]=='Thrissur')
console.log(arr);
console.log('-------------------');

//8. Print total number of positive cases
console.log('total number of positive cases');
console.log('-------------------');
arr = coviddata.map(a=>a[2]).reduce((b,c)=>b+c)
console.log(arr);
console.log('-------------------');

//9. Print total number of curred cases
console.log('total number of curred cases');
console.log('-------------------');
arr = coviddata.map(a=>a[4]).reduce((b,c)=>b+c)
console.log(arr);
console.log('-------------------');

//10. Print curred cases in Idukki
console.log('curred rates of Idukki ');
console.log('-------------------');
arr = coviddata.find(a=>a[1]=='Idukki')
console.log(arr[4]);
