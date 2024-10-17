accounts=[
  {
    acno: 1000, ac_type: 'savings', balance: 45000, transaction: [
    {
        to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay'
    },
    {
        to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
    },
    {
        to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
    },
    ]
  },
  {

    acno: 1001, ac_type: 'current', balance: 30000, transaction: [
    {
        to: 1000, amount: 1000, msg: 'grossary', mode: 'gpay'
    },
    {
        to: 1002, amount: 7000, msg: 'gift' ,mode: 'phonePay'
    },
    {
        to: 1003, amount: 10000, msg: 'emi', mode: 'neft'

    },
    ]
  },
  {
    acno: 1002, ac_type: 'fixed', balance: 100000, transaction: [
    {
            to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay'
    },
    {
            to: 1001, amount: 2000, msg: 'emi', mode: 'neft'
    },
    {
            to: 1003, amount: 1000, msg: 'recharge' , mode:'phonePay'
    },
   ]
  },
  {
    acno: 1003, ac_type: 'savings', balance: 30000, transaction: [
    {
        to: 1001, amount: 5000, msg: 'ebi11', mode: 'gpay'
    },
    {
        to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
    },
    {
        to: 1000, amount: 1000, msg: 'recharge', mode: 'phonePay'
    },
]
  },
]

//1. total number of accounts
console.log(`total number of accounts-${accounts.length}`);
console.log('------------------------------');

//2. print account number whose ac_type is savings)
accounts.filter(data => data.ac_type=='savings').forEach(item => console.log(item.acno))
console.log('------------------------------');

//3. print the balance of account number 1000
item = accounts.find(data => data.acno==1000)
console.log(item.balance);
console.log('------------------------------');

//4. print all gpay transactions
accounts.map(trans => trans.transaction).flat().filter(data => data.mode=='gpay').forEach(item=>console.log(item))
console.log('------------------------------');

//5. print all transaction whose amount › 5000
accounts.map(trans => trans.transaction).flat().filter(data => data.amount>5000).forEach(item => console.log(item))
console.log('------------------------------');

//6. print credit transaction of account 1002
console.log('credit transactions of 1002');
credit = accounts.map(x=>x.transaction).flat().filter(data => data.to==1002)
console.log(credit);

console.log('------------------------------');

//7. print debit transaction of account 1002
console.log('debit transactions of 1002');
debit = accounts.find(data => data.acno==1002).transaction
console.log(debit);

console.log('------------------------------');

//8. print transaction history of 1002
console.log('transaction history of 1002');
history = {}

history["credit"] = credit
history["debit"]  = debit
console.log(history);
console.log('------------------------------');
//spread operator(...)=>to combine two arrays
transHistory = [...credit,...debit]
console.log(transHistory);

console.log('------------------------------');

//9. print highest balance account details
item = accounts.reduce((a,b)=>a.balance>b.balance?a:b)
console.log(item);
console.log('------------------------------');


