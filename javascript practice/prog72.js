class Student{
    //constructor - is also a method , constructor automatically invokes automatically.

    constructor(id,name,mark){
        this.sid = id
        this.sname = name
        this.smark = mark
        this.studentDisplay()
    }
    //method
    studentDisplay(){
        console.log(`Student details: id is ${this.sid} name is ${this.sname} and mark is ${this.smark}`);
        
    }
}

//object
const obj = new Student(1,'anu',90)
const obj1 = new Student(2,'abhi',95)
const obj2 = new Student(3,'abhishek',60)