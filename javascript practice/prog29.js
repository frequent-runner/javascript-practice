//             11            
//          12 13 14
//       15 16 17 18 19 
//    20 21 22 23 24 25 26
// 27 28 29 30 31 32 33 34 35
n=11
for(row=1;row<=5;row++){
    str=" "
    for(spa=5;spa>row;spa--){
        str=str+" "+" "+" "
    }
    for(col=1;col<=2*row-1;col++){
        str=str+" "+n
        n++
    }
    console.log(str);
    

}