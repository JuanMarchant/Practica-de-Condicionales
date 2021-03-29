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
