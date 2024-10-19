//write methods for solving the given questions

class Bank{
    //property
    accountingDetails = {
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000}

    }
//method

//validate a given account number
accountNumber(acno){
    //return is used to access a function outside the class
 return acno in this.accountingDetails?'valid Account':'Invalid Account'
}
//authenticate the account
accountAutho(username,password){
    return username&&password in this.accountingDetails?'valid username and password':'invalid password or username'
}

//check the balance

//fund transfer
}

//object
const obj = new Bank()
console.log(obj.accountNumber(1000));

const obj1 = new Bank()
console.log(obj.accountAutho('userone'));
