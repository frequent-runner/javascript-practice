text = 'hai hello all hello world all'
//w a p to print the word count from the given array
// o/p = {hai :1, hello :2, all :2, world :1}

//algoritham



//1)convert the text into array of words 
words = text.split(' ')
console.log(words);

//2) create a new empty obj
obj = {}

//3) fetch each words from the array
for(let word of words){
    //4) check each word is present in thecreated object
    if(word in obj){
        //5) if present icrement the count
        obj[word]+=1
    }
    else{
        //6) else add a new key:value to object
        obj [word] = 1
    }
}
console.log(obj);

console.log('-----------------------------------------');
//array method
wc = {}
text.split(' ').forEach(item=>item in wc?wc[item]+=1:wc[item]=1)
console.log(wc);



