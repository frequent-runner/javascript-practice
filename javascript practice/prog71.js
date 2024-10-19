//[id, name, designation, location, salary, experience]

//[1000, 'Neel', 'developer', 'kochi',25000, 3]

//oops

class Employee{
    //property
    empName
    empDesig
    empLocation
    empSalary
    //constructor
    constructor(ename,edesig,emplo,empsal){
        // this is an instance variable - inorder to access properties inside the class 
        this.empName = ename
        this.empDesig = edesig
        this.empLocation = emplo
        this.empSalary = empsal
    }
    //methods
    display(){
        console.log(`employee name is ${this.empName}`);
        
    }
}

//objects

const obj = new Employee("neel",'developer','kochi',25000)
obj.display()
const obj1 = new Employee('Anu','developer','ernakulam',50000)
obj1.display()