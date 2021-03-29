function imprimeHasta(x) {

if(x > 1){ 
    for( var i=0; i < x + 1 ; i++){
      var z = 0;
      z += i;
      console.log(z);
}
}else{
  return x = 'false';
     }   
}
imprimeHasta(1000000); // debe imprimir todos los enteros desde el 1 hasta el 1000000
y = imprimeHasta(-10); 
console.log(y);



/*--------------------------------------*/


function printSum(x) {
    var sum = 0;
    for(var i = 0; i < x + 1; i++){
        sum += i;
        console.log(sum);
}
    return sum
}
y = printSum(255) // debe imprimir todos los enteros desde el o hasta el 255, y la suma parcial en cada punto
console.log(y) // debe imprimir 32640



/*--------------------------------------*/
