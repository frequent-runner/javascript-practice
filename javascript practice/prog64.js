var car = {
    name : 'boleno',
    model : 'hatch back',
    manufacturer : 'maruthi',
    price : '10lakh'
}

// print price, model and manufacturer name of the given var

console.log(`price of the car is ${car['price']},model is ${car['model']} and manufacturer is ${car['manufacturer']}`);


//add a new key varient with the value 'manuel'
console.log('-------------------------');

car ['varient'] = ['manuel']
console.log(car);

//add a new value 'automatic' to the key varient
car.varient.push('automatic')
console.log(car);

//add a new key 'colour' - with values as red, blue and white
car ['color'] = ['red', 'blue', 'white']
console.log(car);

