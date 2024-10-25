balano = {
    manufacturer : 'maruthi',
    model : 'hatch back',
    varient : ['automatic','manuel']
}

glanza = {
    manufacturer : 'toyota'
}

glanza.__proto__ = balano
console.log(glanza.model);
