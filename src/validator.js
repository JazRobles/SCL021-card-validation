const validator = {
  
    
  
  //se crea el onjeto enmascarador 
  maskify:(creditCardNumber) => {
    let numerosArray = creditCardNumber.split('');
    //declaro la variable que contendrá los numeros de la tarjeta transformador en array
    let point = numerosArray.length - 4
    //creo una variable que contenga todas las posiciones menos las ultimas 4
    let numMask = [ ]
    //creo una variable que contendra los resultados de la iteración del for
    for (let it = 0; it < point; it++) {
      numMask.push("#");
    }
    //se enmascaran las posiciones del array
    for (let it = 0; it < 4; it++) {
      numMask.push(numerosArray[point+it]);
    }
    //se agregan los 4 ultimos numeros no enmascarados
    return numMask.join("")
  } //junto el resultado de las iteraciones
  
  // ...
};

export default validator;
