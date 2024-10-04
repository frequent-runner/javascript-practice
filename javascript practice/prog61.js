str = 'hello'
console.log(str[4]);

// w a p to check wether the given string is palindrome or not?

str = 'malayalam'

start = 0
end = str.length-1
ispalindrome = true
while(start<end){
    if(str[start]!=str[end]){
        ispalindrome = false
    }
    start++
    end--
}
console.log(ispalindrome?'palindrome':'not palindrome');

//another method

str = 'malayalam'
str1 =''

for(i=str.length-1;i>=0;i--){
    str1 += str[i]
}

str==str1?console.log('it is palindrome'):console.log('Not palindrome');