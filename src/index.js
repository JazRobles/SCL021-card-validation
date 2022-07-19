import validator from './validator.js';


const btnvalidar = document.getElementById('btn');

btnvalidar.addEventListener('click',finvalidacion);
let guardado = guardado;

function finvalidacion(){




  
}


























onload = function(){ 
  var ele = document.querySelectorAll('.validar')[0];
  ele.onkeypress = function(e) {
     if(isNaN(this.value+String.fromCharCode(e.charCode)))
        return false;
  }
  ele.onpaste = function(e){
     e.preventDefault();
  }
}



console.log(validator);

//valida campo de letras


/////////////////////////////////////////////