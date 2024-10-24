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
accountAutho(accno,pass){
    for(let i in this.accountingDetails){

        if(this.accountingDetails[i].acno==accno && this.accountingDetails[i].password==pass){
            console.log('Authentication success');
            return
        }
            console.log('Authentication failed');
            break
    }
}

//check the balance
balance(accno,pass){
        if(accno in this.accountingDetails && this.accountingDetails[accno].password == pass){
            console.log(this.accountingDetails[accno].balance);
        }
        else{
            console.log('Account not found');
        }
        
    }

//fund transfer
trans(acc1,acc2,fund,pass){
    if(acc1 in this.accountingDetails && acc2 in this.accountingDetails && this.accountingDetails[acc1].password == pass){
        if(this.accountingDetails[acc1].balance>=fund){
        this.accountingDetails[acc1].balance -= fund
        this.accountingDetails[acc2].balance += fund
        console.log(`Amount of ${fund} is transfered from ${acc1} to ${acc2}`);
        console.log(this.accountingDetails);
        }

        else{
            console.log(`Insufficient balance`);
        }
        
    }

    else{
        console.log(`Account number not found`);
    }
   
}


}
//object
const obj = new Bank()
console.log(obj.accountNumber(1000));
console.log('------------------------');

obj.accountAutho(1000,'userone')
console.log('------------------------');

obj.balance(1001,'usertwo')
console.log('------------------------');

obj.trans(1000,1003,3000,'userone')
