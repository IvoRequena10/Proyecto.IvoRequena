let pudoSacarPrestamo = false;
let opcionMonto;
let opcionCuotas;
let montoElegido;
let cantidadDeCuotasElegidas;
const montos = [10000, 20000, 30000, 40000]
const cuotas = [3, 6, 9, 12]
let i, j;

for (i = 1; i <= 3; i++) {
  opcionMonto = prompt("Qué valor deseas pedir? Elija una de opciones " + opcionesDeMontos(montos));

  if (!opcionMontoEsCorrecta(opcionMonto, montos)) {
    alert("Opcion incorrecta!");
    continue;
  }

  for (j = 1; j <= 3; j++) {
    opcionCuotas = prompt("En cuantas cuotas queres pagarlo? Elija una de opciones " + opcionesDeCuotas(cuotas));

    if (!opcionCuotaEsCorrecta(opcionCuotas, cuotas)) {
      alert("Opcion incorrecta!");
      continue;
    }

    alert("Felicitaciones! Tu prestamo fue aprobado! El valor de cada cuota es: $" + calcularValorCuota(montoElegido, cantidadDeCuotasElegidas));
    pudoSacarPrestamo = true;
    break;
  }

  break;
}

if (!pudoSacarPrestamo) {
  alert("Te quedaste sin intentos!");
}

function opcionesDeMontos(montos) {
  let cadena = "";

  montos.forEach((monto, index) => {
    cadena += "\r" + (index + 1) + ". $ " + monto
  })

  return cadena;
}

function opcionesDeCuotas(cuotas) {
  let cadena = "";

  cuotas.forEach((cuota, index) => {
    cadena += "\r" + (index + 1) + ". " + cuota + " cuotas"
  })

  return cadena;
}

function opcionMontoEsCorrecta(opcion, montos) {
  let posicion = parseInt(opcion) - 1;

  if (montos[posicion]) {
    montoElegido = montos[posicion];
    return true;
  }

  return false;
}

function opcionCuotaEsCorrecta(opcion, cuotas) {
  let posicion = parseInt(opcion) - 1;

  if (cuotas[posicion]) {
    cantidadDeCuotasElegidas = cuotas[posicion];
    return true;
  }

  return false;
}

function calcularValorCuota(monto, cantidadDeCuotas) {
  let valorCuota = (monto / cantidadDeCuotas).toFixed(2);

  return valorCuota;
}