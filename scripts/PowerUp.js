tiempoCongelado = 2;
tiempoFuego = 2;
velocidadFuego = 300;
tiempoGiro = 2;

function PowerUpCongelarJ0(params) {
  PausaJ0(params, 0);
  return tiempoCongelado;
}

function PowerUpCongelarJ1(params) {
  PausaJ1(params, 0);
  return tiempoCongelado;
}

function PowerUpBombaJ0(params) {
  LimpiarFlechasEnPantalla(params, 0);
}

function PowerUpBombaJ1(params) {
  LimpiarFlechasEnPantalla(params, 1);
}

function PowerUpFuegoJ0(params) {
  PausaJ0(params, velocidadFuego);
  return tiempoFuego;
}

function PowerUpFuegoJ1(params) {
  PausaJ1(params, velocidadFuego);
  return tiempoFuego;
}

function PowerUpGirarFlechas(params) {
  GirarFlechas(params);
  return tiempoGiro;
}
