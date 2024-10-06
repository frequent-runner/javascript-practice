// w a p to print yes if gender key is present else no

employeedetails = {
    id : 1000,
    name : 'abhi',
    desg : 'developer',
    place : 'kochi',
    age : 20,
    sal : 20000,
    exp : 3
}

//check if the 'gender' key is present in the given object
console.log('gender'in employeedetails?'yes':'no');

//how to add a key and a value
//Objectname["key"]=value
employeedetails["gender"]='male'
console.log(employeedetails);

//update a value in the object
employeedetails.age+=25
console.log(employeedetails);

//delete a key from an object
//delete method is used to delete a key inside an object
delete employeedetails.age
console.log(employeedetails);

