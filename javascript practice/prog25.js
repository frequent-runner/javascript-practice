//         *                                           1+5  1-5
//      *     *                                        2+4  2-5
//    *         *                                      3+3  3-7
//  *             *                                    4+2  4-8 
// * * * * * * * * *                                   5+1  5-9
for(row=1;row<=5;row++){
    str=" "
    for(col=1;col<=9;col++){
        if(col+row==6 || col-row==4 ||row==5){
            str=str+"* "
        }
        else{
            str=str+" "+" "
            
        }
    }
    console.log(str);
    
}