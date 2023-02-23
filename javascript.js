// veron matias gabriel  - entrega final 


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    notas: /^[0-9\,\.]{0,3}$/ // 0 a 2 numeros.
}
//Declaracion variables
let arrayNombre = [null];
let arrayApellido = [null];
let arrayTrimestre1 = [null];
let arrayTrimestre2 = [null];
let arrayTrimestre3 = [null];
let alumno = [{
    nombre: null,
    apellido: null,
    promedio: null,
}];
let todoBien = false;
let arrayAprobadosN = [];
let arrayAprobadosA = [];
let arrayDesaprobadosN = [];
let arrayDesaprobadosA = [];
let contadorDesaprobados = 0;
let contadorAprobados = 0;
let banderaA = 0;
let banderaD = 0;
let nombreEnStorage;

// FUNCION LOCALSTORAGE
obtenerLocalStorage();

function obtenerLocalStorage() {
    if (localStorage.getItem("nombre") === "null") {
        guardarLocal();
    } else {
        let nomb = localStorage.getItem("nombre");
        let ses = localStorage.getItem("ultima_Sesion");
        document.getElementById("spanProfe").innerHTML = nomb;
        document.getElementById("spanSesion").innerHTML = ses;
    }
}

function borrarLocal() {
    localStorage.setItem("nombre", null)
    localStorage.setItem("ultima_Sesion", null);
    console.log("Ejecutado");
}

function guardarLocal() {
    nProfe = prompt("Nombre profesor: ");
    // sweetPrompt();
    let now = new Date();
    let usuario = [{
        nombre: "",
        ultima_Sesion: "",
    }];
    localStorage.setItem("nombre", nProfe)
    localStorage.setItem("ultima_Sesion", now);
    usuario.push({
        nombre: nProfe,
        ultima_Sesion: now
    });
    console.log(localStorage.getItem("nombre"));
    console.log(localStorage.getItem("ultima_Sesion"));
    console.log(JSON.stringify(usuario));

}

function sweetPrompt() {
    const inputValue = "";
    const {
        value: valor1
    } = Swal.fire({
        title: 'NOMBRE: ',
        input: 'text',
        inputValue: inputValue,
        inputValidator: (value) => {
            if (!value) {
                return 'Escribe tu nombre'
            } else {
                Swal.fire(
                    'Hecho!',
                    'Dato modificado correctamente',
                    'success'
                )
                nombreEnStorage = value;
                console.log(nombreEnStorage);
            }
        }
    })
}

let mostrarMensaje;
setTimeout(() => {
    if (mostrarMensaje === "1" || localStorage.getItem("PopUp") === "1") {} else {
        AvisoFeriado();
    }
}, 4000)

function AvisoFeriado() {
    const inputValue = "";
    const {
        value: valor1
    } = Swal.fire({
        icon: 'info',
        title: 'ATENCION',
        text: 'El proximo 24/3/2023 no habra clases por feriado Nacional',
        input: 'checkbox',
        inputValue: 0,
        inputPlaceholder: 'No mostrar mas este mensaje',
        footer: '<a href="https://www.argentina.gob.ar/interior/feriados-nacionales-2023">Ver los feriados del 2023</a>',
        inputValidator: (value) => {
            mostrarMensaje = value;
            localStorage.setItem("PopUp", mostrarMensaje);
            console.log(localStorage.getItem("PopUp"));
            typeof (localStorage.getItem("PopUp"));
        }
    })
}
// FUNCIONES 
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombreAlumno":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById(`inputNombre`).classList.remove('cajaInputIncorrecto');
                document.getElementById(`inputNombre`).classList.add('cajaInputCorrecto');
                console.log("Datos correctos");
                todoBien = true;
            } else {
                todoBien = false;
                document.getElementById(`inputNombre`).classList.remove('cajaInputCorrecto');
                document.getElementById(`inputNombre`).classList.add('cajaInputIncorrecto');
                console.log("Ingrese los datos correctamente");
            }
            break;
        case "apellidoAlumno":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById(`inputApellido`).classList.remove('cajaInputIncorrecto');
                document.getElementById(`inputApellido`).classList.add('cajaInputCorrecto');
                todoBien = true;
            } else {
                document.getElementById(`inputApellido`).classList.remove('cajaInputCorrecto');
                document.getElementById(`inputApellido`).classList.add('cajaInputIncorrecto');
                todoBien = false;
            }
            break;
        case "nota1":
            if (expresiones.notas.test(e.target.value)) {
                document.getElementById(`inputNota1`).classList.remove('cajaInputIncorrecto');
                document.getElementById(`inputNota1`).classList.add('cajaInputCorrecto');
                todoBien = true;
            } else {
                document.getElementById(`inputNota1`).classList.remove('cajaInputCorrecto');
                document.getElementById(`inputNota1`).classList.add('cajaInputIncorrecto');
                todoBien = false;
            }
            break;
        case "nota2":
            if (expresiones.notas.test(e.target.value)) {
                document.getElementById(`inputNota2`).classList.remove('cajaInputIncorrecto');
                document.getElementById(`inputNota2`).classList.add('cajaInputCorrecto');
                todoBien = true;
            } else {
                document.getElementById(`inputNota2`).classList.remove('cajaInputCorrecto');
                document.getElementById(`inputNota2`).classList.add('cajaInputIncorrecto');
                todoBien = false;
            }
            break;
        case "nota3":
            if (expresiones.notas.test(e.target.value)) {
                document.getElementById(`inputNota3`).classList.remove('cajaInputIncorrecto');
                document.getElementById(`inputNota3`).classList.add('cajaInputCorrecto');
                todoBien = true;
            } else {
                document.getElementById(`inputNota3`).classList.remove('cajaInputCorrecto');
                document.getElementById(`inputNota3`).classList.add('cajaInputIncorrecto');
                todoBien = false;
            }
            break;

    }
}
inputs.forEach((input) => {
    //input.addEventListener('keyup', ()=>{ console.log("tecla levantada")});
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

function removerEstilos() {
    document.getElementById(`inputNota3`).classList.remove('cajaInputCorrecto');
    document.getElementById(`inputNota1`).classList.remove('cajaInputCorrecto');
    document.getElementById(`inputNota2`).classList.remove('cajaInputCorrecto');
    document.getElementById(`inputNota3`).classList.remove('cajaInputIncorrecto');
    document.getElementById(`inputNota1`).classList.remove('cajaInputIncorrecto');
    document.getElementById(`inputNota2`).classList.remove('cajaInputIncorrecto');
    document.getElementById(`inputApellido`).classList.remove('cajaInputCorrecto');
    document.getElementById(`inputApellido`).classList.remove('cajaInputIncorrecto');
    document.getElementById(`inputNombre`).classList.remove('cajaInputIncorrecto');
    document.getElementById(`inputNombre`).classList.remove('cajaInputCorrecto');

}

function notaEvaluada(nota) {
    parseFloat(nota);
    if (nota >= 7) {
        document.querySelector(".thPromedio").style.background = "green";
    } else if (nota >= 4 && nota <= 7) {
        document.querySelector(".thPromedio").style.background = "yellow";
    } else {
        document.querySelector(".thPromedio").style.background = "red";
    }
};

function notaValida(numero) {
    numero = parseInt(numero);
    if (numero <= 0 || numero >= 11 || isNaN(numero)) {
        console.log("Numero no valido");
        return false;
    } else {
        return true;
    }
}
let buscar = 0;

function buscarApellido() {
    let tamanioArray = alumno.length;
    let auxCont = 0;
    let noEncontrado = 0;
    if (tamanioArray === 1) {
        console.log("NO HAGO NADA")
    } else {
        let datoBuscado = document.getElementById("inputBuscarApellido").value;
        datoBuscado = datoBuscado.toString();
        datoBuscado = datoBuscado.toUpperCase();
        const newArray = alumno.filter(alumnoFiltrado => {
            auxCont++;
            console.log(auxCont);
            if (alumnoFiltrado.apellido === datoBuscado) {
                console.log("APELLIDO ENCONTRADO");
                noEncontrado = 1;
                let listar = document.querySelector(".mostrarApellido");
                let li = document.createElement("h3");
                let auxNombre = alumnoFiltrado.nombre;
                let auxApellido = alumnoFiltrado.apellido;
                let auxPromedio = alumnoFiltrado.promedio;
                auxNombre = document.createTextNode("- Nombre: " + auxNombre); // appenchild no puedo mostrar objeto, pero si el texto del objeto almacenado en una var
                auxApellido = document.createTextNode(" - Apellido: " + auxApellido);
                auxPromedio = document.createTextNode(" - Promedio: " + auxPromedio + " -");
                listar.appendChild(li);
                li.appendChild(auxNombre);
                listar.appendChild(li);
                li.appendChild(auxApellido);
                listar.appendChild(li);
                li.appendChild(auxPromedio);
                buscar++;
            } else if (auxCont === tamanioArray && noEncontrado === 0) {
                buscar++;
                apellidoNoEncontrado();
            }
        });
        document.getElementById("inputBuscarApellido").value = null;
        noEncontrado = 0;
    }
}

function apellidoNoEncontrado() {
    let listar = document.querySelector(".mostrarApellido");
    let li = document.createElement("h3");
    let aux = "- Apellido no encontrado. Intentelo nuevamente -";
    li.textContent = aux;
    listar.appendChild(li);
}

function limpiarBuscarApellido() {
    if (buscar === 0) {
        console.log("Sin limpiar.Veces que se hizo clic en buscar apellido: " + buscar);
    } else {
        let padre = document.getElementById("idMostrarApellido").getElementsByTagName("h3")[0];
        let hijo = padre.getElementsByTagName("h3")[0];
        let eliminado = padre.removeChild(hijo);
        buscar = buscar - 1;
    }
}


function funcionCargar() {
    todoBien = false;
    let n1 = parseFloat(document.getElementById("inputNota1").value);
    let n2 = parseFloat(document.getElementById("inputNota2").value);
    let n3 = parseFloat(document.getElementById("inputNota3").value);
    if (notaValida(n1) === true && notaValida(n2) === true && notaValida(n3) === true) {
        todoBien = true;
    }
    if (todoBien === true) {
        let nombre = document.getElementById("inputNombre").value;
        nombre = nombre.toString();
        nombre = nombre.toUpperCase();
        let apellido = document.getElementById("inputApellido").value;
        apellido = apellido.toString();
        apellido = apellido.toUpperCase();
        let trimestre1 = parseFloat(document.getElementById("inputNota1").value);
        let trimestre2 = parseFloat(document.getElementById("inputNota2").value);
        let trimestre3 = parseFloat(document.getElementById("inputNota3").value);
        let acumulador = trimestre1 + trimestre2 + trimestre3;
        promedio = parseFloat(acumulador / 3);
        if (promedio >= 7) {
            contadorAprobados++;
            arrayAprobadosN.push(nombre);
            arrayAprobadosA.push(apellido);
            banderaA = 1;
            let nombreMostrar = nombre;
            let apellidoMostrar = apellido;
            let nombreyapellido = nombreMostrar + " " + apellidoMostrar;
            console.log("Alumno: " + nombreyapellido);
            cord = document.createElement("p");
            valor = document.getElementById("AprobadosPadre");
            cord.textContent = nombreyapellido
            valor.appendChild(cord);
        } else {
            contadorDesaprobados++;
            arrayDesaprobadosN.push(nombre);
            arrayDesaprobadosA.push(apellido);
            banderaD = 1;

            let nombreMostrar = nombre;
            let apellidoMostrar = apellido;
            let nombreyapellido = nombreMostrar + " " + apellidoMostrar;
            let cord = document.createElement("p");
            let valor = document.getElementById("DesaprobadosPadre");
            cord.textContent = nombreyapellido
            valor.appendChild(cord);
        }

        arrayNombre.push(nombre.value);
        arrayApellido.push(apellido.value);
        arrayTrimestre1.push(trimestre1.value);
        arrayTrimestre2.push(trimestre2.value);
        arrayTrimestre3.push(trimestre3.value);
        alumno.push({
            nombre: nombre,
            apellido: apellido,
            promedio: promedio
        });
        document.getElementById("inputNombre").value = null;
        document.getElementById("inputApellido").value = null;
        document.getElementById("inputNota1").value = null;
        document.getElementById("inputNota2").value = null;
        document.getElementById("inputNota3").value = null;
        document.getElementById("inputNombre").focus();
        console.log("Datos enviados");
        todoBien = false;
        removerEstilos();
        document.getElementById("avisoOk").innerHTML = "Elementos cargados correctamente ✓";
        document.getElementById("avisoError").innerHTML = null;

        // MUESTRA NOMBRE APELLIDO Y PROMEDIO DESPUES DE CLIC AL BOTON ENVIAR
        let lista = document.querySelector(".thNombre");
        let li1 = document.createElement("td");
        let li = document.createElement("tr");
        li.textContent = nombre;
        lista.appendChild(li1);
        lista.appendChild(li);
        lista = document.querySelector(".thApellido");
        li1 = document.createElement("td");
        li = document.createElement("tr");
        li.textContent = apellido;
        lista.appendChild(li1);
        lista.appendChild(li);

        lista = document.querySelector(".thPromedio");
        li1 = document.createElement("td");
        li = document.createElement("tr");
        notaEvaluada(promedio);
        li.textContent = promedio;
        lista.appendChild(li1);
        lista.appendChild(li);
    } else {
        document.getElementById("inputNombre").value = null;
        document.getElementById("inputApellido").value = null;
        document.getElementById("inputNota1").value = null;
        document.getElementById("inputNota2").value = null;
        document.getElementById("inputNota3").value = null;
        document.getElementById("inputNombre").focus();
        console.log("NO ENVIADO");
        removerEstilos();
        todoBien = false;
        document.getElementById("avisoOk").innerHTML = null;
        document.getElementById("avisoError").innerHTML = "Error! Elementos no enviados X";
    }
}
let mostrarA = 0;
function mostrarAprobados() {
    if (mostrarA === 0) {
        mostrarA = 1;
    } else if (mostrarA === 1) {
        document.getElementById("AprobadosPadre").classList.add("divAprobados2");
        mostrarA = 2;
    } else {
        document.getElementById("AprobadosPadre").classList.remove("divAprobados2");
        mostrarA = 1;
    }
}
let mostrarD = 0;
function mostrarDesaprobados() {
    if (mostrarD === 0) {
        mostrarD = 1;
    } else if (mostrarD === 1) {
        document.getElementById("DesaprobadosPadre").classList.add("divAprobados2");
        mostrarD = 2;
    } else {
        document.getElementById("DesaprobadosPadre").classList.remove("divAprobados2");
        mostrarD = 1;
    }
}

let divUsuario = document.querySelector("#divUsuarios");
let banderaAjax = 0;
function cargarLoader() {
    let tempo = setInterval(() => {
        document.getElementById("loader").classList.add("loader");
    }, 100);
    setTimeout(() => {
        clearInterval(tempo);
        document.getElementById("loader").classList.remove("loader");
        directivo();
    }, 1500);
}

function directivo() {
    if (banderaAjax === 0) {
        var usuarios = [];
        fetch("https://reqres.in/api/users?page=2")
            .then(data => data.json())
            .then(users => {
                usuarios = users.data;
                console.log(usuarios);
                usuarios.map((user, i) => {
                    let nombre = document.createElement("p");
                    // nombre.innerHTML ="ID: "+ i + " NOMBRE: " + user.first_name + " APELLIDO: "+ user.last_name+" CORREO: " + user.email;
                    nombre.innerHTML = `
                <h4><i>LEGAJO: ${i}</i></h4>
                <p></i>Nombre y apellido:</i><STRONG> ${user.first_name} ${user.last_name}</STRONG> <i>- Correo: </i><STRONG>${user.email}</STRONG> </p>
                <p><img src="${user.avatar}"></p>
                <hr>
                `
                    divUsuario.appendChild(nombre);
                });
                banderaAjax = 1;
            });
    } else if (banderaAjax === 1) {
        document.getElementById("divUsuarios").classList.add("divUsuarios2");
        banderaAjax = 2;
    } else {
        document.getElementById("divUsuarios").classList.remove("divUsuarios2");
        banderaAjax = 1;
    }
}