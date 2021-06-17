tiempo = 0;
//Cuenta el tiempo y lo formatea
function Reloj(delta) {
  tiempo += delta;
  if (tiempo > 20) {
    tiempo -= 20;
    return 0.02;
  }
  return 0;
}

//Crea un temporizador
function ActivarReloj(tiempoActual, tiempoTotal) {
  return tiempoActual + tiempoTotal;
}

//Revisa si el temporizador ya termino
function DesactivarReloj(tiempoActual, tiempoFinal) {
  return tiempoActual >= tiempoFinal;
}

//Reinciia el reloj global
function ReiniciarReloj() {
  tiempo = 0;
}
