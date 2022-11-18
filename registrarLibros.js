// // STORAGE, JSON, FUNCIONES, CONDICIONAL//


var RegistrosList = [];


function addDatos (pid, papellido, pcontraseña, pemail){

    var newRegistros = {
        id: pid,
        Apellido : papellido,
        Contraseña : pcontraseña,
        Email : pemail
    };
    console.log(newRegistros);
    RegistrosList.push(newRegistros);
    localStorageDatos(RegistrosList);
}

function getRegistrosList(){
    var storedList = localStorage.getItem('localRegistroslist')
    if(storedList == null){
        RegistrosList = [];
    }
    else{
        RegistrosList = JSON.parse(storedList);
    }

    return RegistrosList;

}

function localStorageDatos(plist){
    localStorage.setItem('localRegistroslist', JSON.stringify((plist)));
}
document.querySelector('#btnEnviar').addEventListener('click', guardarDato)
tablaDatos();

function guardarDato(){
    var sId = document.querySelector('#txtId').value
    var sApellido = document.querySelector('#txtApellido').value
    var sContraseña = document.querySelector('#txtContraseña').value
    var sEmail = document.querySelector('#txtEmail').value;

    addDatos(sId, sApellido, sContraseña, sEmail);
    tablaDatos();
}

function tablaDatos(){
    var list = getRegistrosList(),
    tbody = document.querySelector('#datosTabla tbody');


    tbody.innerHTML = '';

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i),
            idCell = row.insertCell(0),
            ApellidoCell = row.insertCell(1),
            ContraseñaCell = row.insertCell(2),
            EmailCell = row.insertCell(3);



        idCell.innerHTML = list[i].id;
        ApellidoCell.innerHTML = list[i].Apellido;
        ContraseñaCell.innerHTML = list[i].Con;
        EmailCell.innerHTML = list[i].Email;

        var inputSelect = document.createElement('input');
        inputSelect.type = 'radio';
        inputSelect.value = list[i].id;






      tbody.appendChild(row);
    }
}