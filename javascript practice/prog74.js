//inheritance

class A{
    methoda(){
        console.log('inside method a');
        
    }
}

class B extends A{
    methodb(){
        console.log('inside method b');
        
    }
}

class C extends B{
    methodc(){
        console.log('inside method c');
        
    }
}

const obj = new C()
obj.methodb()
obj.methoda()
obj.methodc()