employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

//print all enmployee name
console.log('-------------------');
emp = employee.forEach(e=>console.log(e[1]))

//print total number of employees
console.log('--------------------');

console.log(`total number of employees ${employee.length}`)

//print developer employee details
console.log('---------------------');
employee.filter(em=>em[2]=='developer').forEach(e=>console.log(e))

//print details of employee named laisha
console.log('----------------------');
employee.filter(em=> em[1]=='Laisha').forEach(e=>console.log(e))

//print employee name whoes salary is greater than 30000
console.log('----------------------');
employee.filter(em => em[4]>30000).forEach(e=>console.log(e))

//sort employees based on their salary in descending order
console.log('------------------------');

emp = employee.sort((a,b)=>b[4]-a[4])
console.log(emp);

//sort employees based on their salary in ascending order
console.log('-------------------------');
emp = employee.sort((a,b)=>a[4]-b[4])
console.log(emp);

//print the employee name who have the highest salary
console.log('-------------------------');

emp=employee.sort((a,b)=>b[4]-a[4])
console.log(emp[0][1]);

//reduce method
console.log('-------------------------');

emp = employee.reduce((a,b)=>a[4]>b[4]?a:b)
console.log(emp[1]);

//print the employee name who has the least salary
emp = employee.reduce((a,b)=>a[4]<b[4]?a:b)
console.log(emp[1]);

//total salary expense of the company
emp = employee.map(sal =>sal[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(emp);



