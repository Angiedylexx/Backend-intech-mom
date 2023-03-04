// Punto 1
console.log ("Punto 1--->");
let nombre = "Domhnall"; //Nombre de mí personaje
let apellido = "Gleeson"; //Apellido de mí personaje
let edad = 21; //Edad de mí personaje

//Punto 2
console.log ("Punto 2--->");
console.log ("Nombre: " + nombre + ", " + "Tipo: " + typeof(nombre) );
console.log ("Apellido: " + apellido + ", " + "Tipo: " + typeof(apellido) );
console.log ("Edad: " + edad + ", " + "Tipo: " + typeof(edad) );

//Punto 3
console.log ("Punto 3--->");
let city;
city = "Londres";
console.log(city);
city = "Cambridge";
console.log(city);
city = "Birmingham";
console.log(city);
city = "Leeds";
console.log(city);
city = "Glasgow";
console.log(city);

//Punto 4
console.log ("Punto 4--->");
typeof(20)
// Predicción: number
console.log (20);
console.log (typeof(20));

typeof(true)
// Predicción: boolean
console.log (typeof(true));

"1" + "3" // concatenar
// Predicción: string
console.log ("1" + "3")
console.log (typeof("1" + "3"));

"hamburgers" - "s" // coerción de tipos, por operadores aritméticos sustracción_number
// Predicción: number
console.log ("hamburgers" - "s");
console.log (typeof("hamburgers" - "s"));

typeof(95.5)
// Predicción: number
console.log (typeof(95.5));

typeof(1 != 2)
// Predicción: boolean
console.log (typeof(1 != 2));

"johnny" + 5 // coerción de tipos, por operador +_string
// Predicción: string
console.log (typeof("johnny" + 5));

typeof(NaN) //Valor simbólico (Not a Number)
// Predicción: number
console.log (typeof(NaN));

"1" - "3" //coerción de tipos, por operadores aritméticos sustracción_number
// Predicción: number
console.log (typeof("1" - "3"));

"johnny" - 5 // coerción de tipos, por operadores aritméticos sustracción_number
// Predicción: number
console.log (typeof("johnny" - 5));

typeof("hello")
// Predicción: string
console.log (typeof("hello"));

"hamburgers" + "s" 
// Predicción: string
console.log (typeof("hamburgers" + "s"));

99 * "luftbaloons" // coerción de tipos, por operadores aritméticos
// Predicción: number
console.log (typeof(99 * "luftbaloons"));

//Punto 5
console.log ("Punto 5--->"); //Sin argumentos
console.log("al que madruga Dios le ayuda".toUpperCase());

//Punto 6
console.log ("Punto 6--->"); //Sin argumentos
console.log("MAS VALE PAJARO EN MANO QUE CIENTOS VOLANDO".toLowerCase());

//Punto 7
console.log ("Punto 7--->");
const saludo = "Hola";
const saludo2 = "mUnDo"
console.log(saludo.toLowerCase() + " " + saludo2.toUpperCase());

//Punto 8
console.log ("Punto 8--->");
let precio;
let descuento;
let precioConDescuento;
precio = 100;
descuento = 20;
precioConDescuento = precio - (precio * (descuento/100));
console.log("Su producto tiene un precio de " + precioConDescuento + ", " + "el descuento fue del " + descuento + "%" );

//Punto 9
console.log ("Punto 9--->");
let cincoNumeros = [2, 4, 6, 8, 6];
let suma = cincoNumeros.reduce((accumulator, currentValue) => accumulator + currentValue); 
let promedio = (suma/(cincoNumeros.length));
console.log("El promedio es = " + promedio);

//Punto 10
console.log ("Punto 10--->");
let diametro = 20;
const perimetro = (diametro * Math.PI);
console.log("El perimetro de un circulo de " + diametro + " es " + perimetro );

