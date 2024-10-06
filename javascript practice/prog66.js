array = [10,20,30,40,30,20,50,30,60,70,10,40,80]

//find number count from the given array. and display as an object

obj = {}

for(let arr of array){
    if(arr in obj){
        obj[arr] += 1
    }
    else{
        obj[arr] = 1
    }
}
console.log(obj);
