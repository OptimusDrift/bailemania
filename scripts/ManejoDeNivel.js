puntos = 0;
fechasJ0 = 0;
fechasJ1 = 0;
function AgregarPuntosCasiPerfecto() {
  puntos += 50;
}
function AgregarPuntosPerfecto() {
  puntos += 100;
}
function ReiniciarPuntos() {
  puntos = 0;
}

function AgregarFlechasJ0() {
  fechasJ0 += 1;
}
function ReiniciarFlechasJ0() {
  fechasJ0 = 0;
}
function AgregarFlechasJ1() {
  fechasJ1 += 1;
}
function AgregarFlechasJ1() {
  fechasJ1 = 0;
}

function PausarJuego(params) {
  PausarOReanudarFlechas(params);
  //PausarMusica();
  //Mostrar Menu
}

function ReanudarJuego(params) {
  PausarOReanudarFlechas(params, 200);
  //ReanudarMusica();
  //Ocultar Menu
}
