const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = (valueInDollar / 1.2)*127.9;
    // retornamos el valor
    return Number(valueInYen.toFixed(2));
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = (valueInYen / 127.9) * 0.8;
    // retornamos el valor
    return Number(valueInPound.toFixed(2));
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
