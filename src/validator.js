/* const validator = {
  // ...
};

export default validator;
*/


function validator(number){ //Creo la funcion validator:
  
  arr=[];  //Hago un array vacio:

  
  for (var i = 0; i < number.length ; i++) { //Hago otro un bucle que recorrera number: 
       
    arr.push(number[i]); //Con el método push. agrego elementos al array vacio: 
  }
  
  var reverse = arr.reverse(); //con el método reverse hago que se invierta el array. quedando El primer elemento último y el último en primero. 
  var one = 0; //Inicializamos sum en 0
  var two = 0; //Inicializamos double en 0  


  //Creamos un bucle que recorra el array, ya al reves:   
  
  for (var j = 0; j < reverse.length ; j++){
    
    /*Condicional para saber si los elementos, con indice pares, 
    multiplicados por 2 son mayor a 9: */ 
    if(reverse[j] * 2 > 9){

      one += parseInt((reverse[j] * 2) / 10) + (reverse[j] * 2) % 10; //Se suman las cifras de el numero y se van acumulando

    }else{
      two += reverse[j] * 2 //Se van acumulando los que multiplicados por 2 no son mayor que 9
    }
  }
  
  //Cuando se llame la función, retornará la suma de todos los numeros:
  return (two + one) + reverse[j-1];

}


//Llamamos a la funcion y condicionamos para saber si es una tarjeta valida:
if (validator(prompt('Ingrese numero de Tarjeta'))){

    alert('Tarjeta Valida');
}else{

    alert('Tarjeta Invalida')
}