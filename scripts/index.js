const formulario_datos_pasajero = document.getElementById("data_user")


// pendiente a mover
const MAX_COL_ASIENTOS = 6


class info_asiento {
    disponibilidad = true;
    pasajero = null;
    numero_asiento = 0;
    clase = "";
    constructor() { }
}

const lista_pasajero = []

const asientos = [
    [], [], [], [],
    [], [], [], [],
    [], [], [], [],
    [], [], [], [],
    [], [], [], [],
    [], [], [], [],
]

// accines datos
formulario_datos_pasajero.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formulario_datos_pasajero)

    const nombre = formData.get("nombre")
    const apellido = formData.get("apellido")
    const edad = formData.get("edad")
    const rut = formData.get("rut")

    console.log(nombre, edad, apellido, rut)
})

//

actualizar_info_asientos();


function actualizar_info_asientos() {
    let asiento_indice = 0;

    for (let i = 0; i < asientos.length; i++) {
        for (let j = 0; j < MAX_COL_ASIENTOS; j++) {
            asiento_indice++
            const asiento_actual = new info_asiento();
            asiento_actual.numero_asiento = asiento_indice;
            asiento_actual.clase = asiento_indice < 11 ? "Primera clase" : "Segunda clase";
            asientos[i].push(asiento_actual);
        }
    }
}


function agregar_pasajero(datos_pasajero, asiento_reservado) {
    for (let i = 0; i < asientos.length; i++) {
        for (let j = 0; j < asientos[i].length; j++) {
            const asiento_actual = asientos[i][j]
            if (asiento_actual.numero_asiento === asiento_reservado) {
                if (asiento_actual.disponibilidad === true) {
                    //alert("asiento reservado exitosamente");
                    console.log("asiento reservado exitosamente");
                    asiento_actual.disponibilidad = false;
                    asiento_actual.pasajero = datos_pasajero;
                    lista_pasajero.push(`Pasajero : ${datos_pasajero.nombre} - asiento : ${asiento_reservado} - Clase : ${asiento_actual.clase}`)
                }
                else {
                    //alert("asiento no disponible actualmente");
                    console.log("asiento no disponible actualmente");
                }
            }
        }
    }
}





function asesinar_pasajero(rut) {
    for (let i = 0; i < asientos.length; i++) {
        asientos[i].forEach(e => {
            if (e.pasajero && e.pasajero.rut === rut) {
                console.log(e)
            } else {
                console.log("el pasajero no existe en esta aerolinea")
            }
        })
    }
}

/**
 * 
 * @param {string} rut 
 * @param {string} nombre 
 * @param {string} apellido 
 * @param {number} edad 
 * @returns {object}
 */
function crear_registro_pasajero(rut, nombre, apellido, edad) {
    return {
        rut: rut,
        nombre: nombre,
        apellido: apellido,
        edad: edad,
    }
}



function mostrar_pasajeros() {
    lista_pasajero.forEach(e => console.log(e))
}

