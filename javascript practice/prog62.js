// w a p to print yes if gender key is present else no

employeedetails = {
    id : 1000,
    name : 'abhi',
    desg : 'developer',
    place : 'kochi',
    sal : 20000,
    exp : 3
}

console.log('gender'in employeedetails?'yes':'no');

//how to add a key and a value
//Objectname["key"]=value
employeedetails["gender"]='male'
console.log(employeedetails);
