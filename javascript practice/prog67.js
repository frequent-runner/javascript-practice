//w a p  to find the first recursive number -B
pattern = 'ABCBBCAAB'
pat = pattern.split('')
obj ={}

for(let p of pat){
    if(p in obj){
        obj[p]+=1
        console.log(`first recursive number is ${p}`);
        break
    }
    else{
        obj[p]=1
    }
}
