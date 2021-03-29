/* ----------------------- */


function a() {
    console.log('hola');
}
console.log('Dojo'); // Dojo 

/* ----------------------- */
                                    Diagrama T
                            ---------------------------
function b() {                    x      | 15
    console.log('hola');                 |  
    return 15;                           | 
}
var x = b();
console.log('x es', x); // hola, x es 15


/* ----------------------- */
                                    Diagrama T
                            ---------------------------
function a(n) {                   x      | 18 
    console.log('n es', n);       n      | 3
    return n+15;                         | 
}
var x = a(3);
console.log('x es', x); // n es 3, x es 18


/* ----------------------- */
                                    Diagrama T  
                            ---------------------------  
var z = 15;                        z     | 15
console.log(z);                    b     | 10 
function a(z){                           |   
   console.log(z);   
   return z;
}
var b = a(10);
console.log(b);
console.log(z); //15,10,10,15


/* ----------------------- */
                                    Diagrama T  
                            ---------------------------  
var c = 15;                        c     | 15
console.log(c);                    e     | 20
function d(c){                           | 
   console.log(c);   
   return c*2;
}
var e = d(10);
console.log(e);
console.log(c); //15,10,20,15 


/* ----------------------- */
                                    Diagrama T
                            ---------------------------  
function a(n) {                     x    |  6 + 10-> 16  
    console.log('n es', n);         n    |  3 -> 5   
    y = n*2;                             |
    return y;
}
var x = a(3) + a(5);
console.log('x es', x); // n es 3 , n es 5, x es 16


/* ----------------------- */
                            
                            
function x(num1, num2) {    
   return num1+num2;        
}                           
console.log(x(2,3)) 
console.log(x(3,5)) // 5,8


/* ----------------------- */
                           
                            
function y(num1, num2) {                
   console.log(num1);                       
   return num1+num2;
}
console.log(y(2,3))
console.log(y(3,5))// 2,5,3,8


/* ----------------------- */
                                       Diagrama T  
                            ------------------------------
function z(a,b) {                     c    | 5 -> 8     
    var c = a + b;                    x    | 5 + 8 -> 13             
    console.log('c es', c);                |     
    return c;
}
var x = z(2,3) + z(3,5);
console.log('x es', x); // c es 5, c es 8, x es 13


/* ----------------------- */


function d(a,b) {
    var c = a + b;
    console.log('c es', c);
    return c;
}
var x = d(2,3) + d(3,d(2,1)) + d(d(2,1),d(2,3));
console.log('x es', x);


/* ----------------------- */











