// *
// * *
// * * *
// * * * *

for(n=1;n<=4;n++){
    str=""
    for(i=1;i<=n;i++){
        str=str+"*"+" "
    }
    console.log(str);
    
}

//1
//2 2
//3 3 3
//4 4 4 4

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
        str=str+row+" "
    }
    console.log(str);
    
}