let nombre = prompt("Ingrese (vale) para iniciar, luego pediremos la contraseña")

while (nombre != "vale") {
    nombre = prompt("Nombre incorrecto, escribalo nuevamente.")
    alert("Nombre correcto")
}

let contraseña = prompt("Ingrese la contraseña: 123")

while (contraseña != "123") {
    contraseña = prompt("Contraseña incorrecta, vuelva a intentarlo escribiendo (123).")
    alert("Contraseña correcta")
}
alert("Muy bien, has ingresado correctamente, a continuación te pediremos unos datos.")
let localidad = prompt("Ingrese su localidad: ")
let edad = prompt("Ingrese su edad: ")
let precio = 50000
let cuotas = parseInt(prompt("elija la cantidad de cuotas que desee. (3 cuotas sin interes, 6 o 12.)"))

// objetos

function Locales (ciudad, calle, numero) {

    this.ciudad = ciudad;
    this.calle = calle;
    this.numero = numero;

}
const local1 = new Locales ("Arroyo Seco", "San nicolas", 784)
const local2 = new Locales ("G.Lagos", "Belgrano", 300)
console.log (local1)
console.log (local2)

// arrays

const total = ["3 cuotas sin interes de", 16666.66, "6 cuotas con interes de", 11250, "12 cuotas con interes de 1.7", 7083.33,]

for (let i = 0; i < 6; i++) {
    console.log(total[i])
}

const articulos = [

    { nombre: 'Ventana', precio: 35000 },
    { nombre: 'Puerta', precio: 50000 },
    { nombre: 'Porton', precio: 85000 },
    
]

const resultado = articulos.filter((el) => el.nombre.includes('Ventana'))
const resultado2 = articulos.filter((el) => el.precio < 90000)

console.log(resultado)
console.log(resultado2)


//CONDICIONAL

if (cuotas == "3") {
    alert("el precio final es de: " + (precio) / 3)
}
if (cuotas == "6") {
    alert("el precio final es de: " + ((precio) * 1.35) / 6)
}
if (cuotas == "12") {
    alert("el precio final es de: " + ((precio) * 1.7) / 12)
}
if (cuotas != 3 && cuotas != 6 && cuotas != 12) {
    alert("Las cuotas permitidas son de 3, 6 y 12. Vuelva a intentar todo de nuevo, gracias.")
}
const pregunta = prompt("te está gustando nuestra página? Responder con si o no")
if (pregunta == "si") {
    alert("Muchisimas gracias, seguiremos mejorando para que esto siga así")

}
if (pregunta !== "si") {
    alert("Muchas gracias, tomaremos tu opinion al respecto.")
}

// DOM

const titulo = document.getElementById ("titulo2")

titulo. className = ("titulo-nuevo")