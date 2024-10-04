sen = 'Good morning all'

//print all vowels in the given sentence.[a,e,i,o,u]

vowels = ['a','e','i','o','u','A','E','I','O','U']

chracter = sen.split('')
console.log(chracter);

for(let chr of chracter){
    if(vowels.includes(chr)){
        console.log(chr);
        
    }
}
console.log('-------------------------');


//another method
Array.from(sen).filter(chr=>vowels.includes(chr)).forEach(element=>{console.log(element);})
console.log('--------------------------');
