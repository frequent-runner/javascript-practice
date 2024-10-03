// 1 
// 1 2
// 1 2 3
// 1 2 3 4

for(n=1;n<=4;n++){
    str=""
    for(i=1;i<=n;i++){
        str=str+i+" "
    }
    console.log(str);
    
}
console.log('--------------------');


// * * * *
// * * *
// * *
// * 

for(row=1;row<=4;row++){
    str=""
    for(col=4;col>=row;col--){
        str=str+"*"+" "
    }
    console.log(str);
    
}