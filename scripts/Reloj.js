tiempo = 0;
function Reloj(delta) {
  tiempo += delta;
  if (tiempo > 20) {
    tiempo -= 20;
    return 0.02;
  }
  return 0;
}

function ActivarReloj(tiempoActual, tiempoTotal) {
  return tiempoActual + tiempoTotal;
}
function DesactivarReloj(tiempoActual, tiempoFinal) {
  return tiempoActual >= tiempoFinal;
}

function ReiniciarReloj() {
  tiempo = 0;
}
