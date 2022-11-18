// OBJETOS


function Locales(ciudad, calle, numero) {

    this.ciudad = ciudad;
    this.calle = calle;
    this.numero = numero;

}
const local1 = new Locales("Arroyo Seco", "San nicolas", 784)
const local2 = new Locales("G.Lagos", "Belgrano", 300)

console.log(local1)
console.log(local2)


// ARRAYS


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


// DOM


function getSelectValue() {
    const selectedValue = document.getElementById
        ("selector").value;
    console.log("El precio de este articulo es:", (selectedValue));
    document.getElementById("chau").innerHTML = selectedValue
    
}
function getSelectValue2() {
    const selectedValue = document.getElementById 
        ("LocalesD").value;
    document.getElementById("Lokl").innerHTML = selectedValue
}


// EVENTOS 


Notification.requestPermission().then(function(result) {
    console.log(result);
  });


//   FETCH, PROMESAS Y JSON LOCAL


function miFuncion(){

    fetch('archivo.json')
    .then(response=>response.json())
    .then(data=>console.log(data));
}

function miFuncion2(){

    fetch('archivo2.json')
    .then(response=>response.json())
    .then(data=>console.log(data));
}

function miFuncion3(){

    fetch('archivo3.json')
    .then(response=>response.json())
    .then(data=>console.log(data));
}


// ASYNC Y PROMIS


const horarios = [{
    id: 1,
    title: "Horarios de Lunes a Sabados",
    Horarios: "Lunes a viernes de 8hs a 16hs, Sabados 7hs a 14hs. " 
}];

const getDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(horarios);
        }, 2500);
    })
}
 async function fetchingHorarios (){
    const horariosfetched = await getDatos();
console.log(horarios);
}
fetchingHorarios();