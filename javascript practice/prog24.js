//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

for(row=1;row<=5;row++){
    str=""
    for(spa=5;spa>row;spa--){
        str=str+ " "
    }
    for(col=1;col<=row;col++){
        str=str+"* "
    }
    console.log(str);
}
for(r=4;r>=1;r--){
    s=""
    for(sp=4;sp>=r;sp--){
        s=s+" "
    }
    for(c=1;c<=r;c++){
        s=s+"* "
    }
    console.log(s);
    
}