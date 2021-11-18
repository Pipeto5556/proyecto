/*1. es un programa en js que me diga cuando se cumplan las iguientes condiciones

1. si un numero es par
2. si el numero es impar
3. si el numero es 0


3.un programa que entregandole un numero cualquiera me debe decir lo siguiente

1. si el numero esta entre 60 y 90 debe decir que es mayor  o igual que 60 y menor o igual a 90
2. si el numero es mayor que 100 debe decir que el numero es mayor que 100 y menor de 300
3. si el numero es mayor o igual a 300 debe decir que es mayor o menor que 1000
4 si el numero es mayor a 1000 debe decir que la cantidad es demasiado grande
*/

//parte 1 

let numero_1 = 0

//console.log(`condicion = ${numero_1 %2 === 0}`)
//console.log(`condicion 2 = ${numero_1 %2 != 0}`)
//console.log(`condicion 3 = ${numero_1 === 0}`)



if(numero_1 %2 === 0){
    console.log("El numero es par")
} else if(numero_1 %2 !== 0){
    console.log("El numero es impar")
} else if(numero_1 === 0){
    console.log("El numero es 0")
}

//parte 2

let numero = 12021

/*console.log(`condicion = ${numero >= 60 && numero <= 90}`)
console.log(`condicion 2 = ${numero >= 100 && numero < 300}`)
console.log(`condicion 3 = ${numero >= 300 && numero < 1000}`)
console.log(`condicion 3 = ${numero >= 1000}`)*/

if(numero <= 90 && numero >= 60){
    console.log("Esta entre 60 & 90")
} 

else if(numero >= 100 && numero < 300){
    console.log("Es mayor que 100 y menor que 300")
} 

else if(numero >= 300 && numero < 1000){
    console.log("es mayor o menor que 1000")
} 

if(numero >= 1000){
    console.log("La cantidad es demasiado grande")
} 

