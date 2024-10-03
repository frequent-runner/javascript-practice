//print duplicate numbers
a = [10, 20, 30, 20, 30, 10, 40, 50, 60, 10]
//duplicate numbers=10,20,30
// isduplication = false
// for (n = 0; n <= a.length; n++) {
//     for (j = n + 1; j <= a.length; j++) {
//         if (a[n] == a[j]) {
//             isduplication = true
//             console.log(a[n]);

//         }
//     }
// }
// !isduplication && console.log('no duplication');

b=[]

for(n=0;n<=a.length-1;n++){
    for(i=n+1;i<=a.length-1;i++){
        if(a[n]==a[i]){
            //variable initialization
            isdublication=false
            //check whether the number is there in output array 
            for(x=0;x<=b.length-1;x++){
                if(a[n]==b[x]){//if present number is not added
                    isdublication=true
                    break
                }
            }
            if(!isduplicate){//not present in output array the number is added to the output array
                b.push(a[n])
            }
        }
    }
}
isduplicate?console.log(b):console.log('no duplication');
;

console.log('-------------------------');


c=[]

for(n=0;n<=a.length;n++){
    for(i=n+1;i<=a.length;i++){
        if(a[n]==a[i] && !c.includes(a[n])){
            c.push(a[n])
            break
        }
    }
}
console.log(c);

