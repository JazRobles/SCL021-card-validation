

/*importamos nuestra función validator y maskify de un módulo exclusivo para estas funciones*/
import validator from './validator.js';
console.log(validator);

// Input número de tarjeta
document.getElementById("Ncard").addEventListener('keyup', (e)  => {
  let valorInput = e.target.value
  document.getElementById("Ncard").value = valorInput
  // Se dejan de permitir espacios en blancos
  .replace(/\s/g, '')
  // Permitimos que se escriban sólo carácteres numéricos
  .replace(/\D/g, '')
})

/* declaramos variable para el botón Validar */
let z = document.getElementById("btnValidar");
z.addEventListener("click", btnValid);

/*creamos función para traer string del número de tarjeta y transformarlo en array con un .split y simultáneamente
convertirlo en valor númerico con un .map */
function btnValid() {
    let ccNumber = document.getElementById("Ncard").value;
    console.log(typeof(ccNumber))
    let creditCardNumber = ccNumber.split("").map(Number);
    console.log(creditCardNumber)

  /* a través de una condicional aplicamos función validator a nuestra variable creditCardNumber y en simultáneo
  llamamos a la función Maskify para retornar string enmascarado */

    if (validator.isValid(creditCardNumber)==true) {
        document.getElementById('validacion').innerHTML = 'Tu tarjeta es válida';
        document.getElementById('Ncard').value = validator.maskify(creditCardNumber);
        alert (" Tarjeta Valida")
    }
        else {
        document.getElementById('validacion').innerHTML = 'Tu tarjeta es inválida, vuelve a intentarlo';
        document.getElementById('Ncard').value = validator.maskify(creditCardNumber);
        alert (" Tarjeta Invalida, vuelve a intentarlo")
      }
}
