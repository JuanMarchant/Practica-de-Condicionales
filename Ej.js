function calcularDias(dias){
    var numAnos = Math.floor(dias / 365);                                                                            Diagrama T
    var diasRestantes = dias % 365 ;                                                                        ------------------------------
    var numMeses = Math.floor(diasRestantes / 30);                                                           numAnos      | 6.42 //6
    diasRestantes = diasRestantes % 30; //5                                                                  diasRestantes| 155 -> 155 % 30-> 5
    alert("Ha vivido " + numAnos + " años, " + numMeses + " meses y " + diasRestantes + " días.");           numMeses     | 5.16 //5
}

calcularDias(2345)
// Ha vivido 6 años, 5 meses y 5 dias.
/*-------------------------------------------------------*/
                                                                    Diagrama T                                        
var ax = 2;                                               ----------------------------------  
var ay = 4;                                                       ax     | 2
var bx = 6;                                                       ay     | 4
var by = 8;                                                       bx     | 6
                                                                  by     | 8
function calcularDistancia(){

    var comp_horizontal = (bx-ax);
    var comp_vertical = (by-ay);
    comp_horizontal = comp_horizontal * comp_horizontal;
    comp_vertical = comp_vertical * comp_vertical;
    var distancia = Math.sqrt(comp_horizontal + comp_vertical);

    alert("La distancia entre los puntos es " + distancia);
}

/*-------------------------------------------------------*/
  2 + 1 -> 3, 
function sumaActual(nums) {                                     Diagrama T
    for (var i = 1; i < nums.length; i++) {              -------------------------
        console.log("Numero: " + nums[i]);                arreglo   | [1,3,6,10,15]
        nums[i] += nums[i - 1]; // nums[i] + nums[i-1]              | numero 2 , 
    }                                                               |
    return nums;                                                    |
}
// Numero: 2 , Numero: 3 , Numero: 4, Numero: 5
var arreglo = [1, 2, 3, 4, 5];
var suma = sumaActual(arreglo);
/*---------------------------------------------------*/
for (var i = 0; i < suma.length; i++) {
    console.log("La suma va en: " + suma[i]);
}
//



