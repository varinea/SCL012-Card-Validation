var userNumInput = document.getElementById("userNum"); 

function getUserInput(){ 
   return userNumInput.value;   //Con input el tomo el valor que el usuario me da
}

//una vez obtenido el la númeracion de la tarjeta de credito.
function luhnCheck(){  //Aqui veremos si la información entregada es real, asi que se crea un boolano
  var ccNum = getUserInput() //Se toma la numeracion de la CreditCard
  var ccNumSplit = ccNum.split("") //con split estamos dividiendo para convertirlo en una serie de cadenas
  var sum = 0;  // sumamos
  var singleNums = [] //array vacia
  var doubleNums = [] 
  var finalArry = undefined; //
  var validCard = false;
  
  //Ahora paso a verificar si hay datos validos utilizando if

  if((!/\d{15,16}/g.test(ccNum)) || (ccNum.length > 16)){
  //  \d{15,16}/  aqui quiero un digito de 15,16 de longitud  
  // g hace que todo sea global y para eso necesito test  para probar ccNum || (o) ccNum quiero que su longitud sea mayor a 16
  //Con la expresion  !   estoy revertir la logica, si no tengo numeros se rechazara.
   //   busque estas expresiones en  https://regex101.com/
     return false;  
  }

  if(ccNum.length === 15){  
     for(var i = ccNumSplit.length-1; i>=0; i--){  //en for coloco -- para que comienze por la derecha 
        if(i % 2 === 0){ //Aqui le digo con % si el modulo 2 es igual a 0
           singleNums.push(ccNumSplit[i]);
        }else{
           doubleNums.push((ccNumSplit[i] * 2).toString()); // aca multiplico *2 la variable doubleNum 
        }
     }
  }else if(ccNum.length === 16){
     for(var i = ccNumSplit.length-1; i>=0; i--){
        if(i % 2 !== 0){ //AQUI OBTENGO LA POSICION PAR DE CC
           singleNums.push(ccNumSplit[i]);
        }else{
           doubleNums.push((ccNumSplit[i] * 2).toString());
        }
     }
  }
  //joining makes an array to a string and I split them up again
  //so that every number is a single digit and convert back to array
  
  doubleNums = doubleNums.join("").split("");  
  finalArry = doubleNums.concat(singleNums);
  
  for(var j = 0; j<finalArry.length; j++){
     sum += parseInt(finalArry[j]);
  }
  
  if(sum % 10 === 0){
     validCard = true;
  }
  return validCard;
}



document.getElementById("submitBtn").addEventListener("click", function(){ //Evento DOM Aqui se le da la respuesta al usuario despues de que haya apretado el boton para saber la respuesta
   document.getElementById("resultDiv").innerHTML = luhnCheck();
});