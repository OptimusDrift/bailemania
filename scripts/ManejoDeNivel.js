//Puntaje total
puntosJ0 = 0;
puntosJ1 = 0;
//Flechas totales en perfecto
flechasAcertadasPerfectoJ0 = 0;
flechasAcertadasPerfectoJ1 = 0;
//Flechas totales en casi perfecto
flechasAcertadasCasiPerfectoJ0 = 0;
flechasAcertadasCasiPerfectoJ1 = 0;
//Flechas totales falladas
flechasFalladasJ0 = 0;
flechasFalladasJ1 = 0;
//Flechas totales
fechasJ0 = 0;
fechasJ1 = 0;

vidasJ0 = 3;
vidasJ1 = 3;
function AgregarPuntosCasiPerfecto() {
  puntosJ0 += 50;
}
function AgregarPuntosPerfecto() {
  puntosJ0 += 100;
}
function ReiniciarPuntos() {
  puntosJ0 = 0;
}

function AgregarPuntosCasiPerfectoJ1() {
  puntosJ1 += 50;
}
function AgregarPuntosPerfectoJ1() {
  puntosJ1 += 100;
}
function ReiniciarPuntosJ1() {
  puntosJ1 = 0;
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
function ReiniciarFlechasJ1() {
  fechasJ1 = 0;
}

function AgregarAcertadasPerfectoJ0() {
  flechasAcertadasPerfectoJ0 += 1;
}
function ReiniciarAcertadasPerfectoJ0() {
  flechasAcertadasPerfectoJ0 = 0;
}
function AgregarAcertadasPerfectoJ1() {
  flechasAcertadasPerfectoJ1 += 1;
}
function ReiniciarAcertadasPerfectoJ1() {
  flechasAcertadasPerfectoJ1 = 0;
}

function AgregarAcertadasCasiPerfectoJ0() {
  flechasAcertadasCasiPerfectoJ0 += 1;
}
function ReiniciarAcertadasCasiPerfectoJ0() {
  flechasAcertadasCasiPerfectoJ0 = 0;
}
function AgregarAcertadasCasiPerfectoJ1() {
  flechasAcertadasCasiPerfectoJ1 += 1;
}
function ReiniciarAcertadasCasiPerfectoJ1() {
  flechasAcertadasCasiPerfectoJ1 = 0;
}

function AgregarFalladasJ0() {
  flechasFalladasJ0 += 1;
}
function ReiniciarFalladasJ0() {
  flechasFalladasJ0 = 0;
}
function AgregarFalladasJ1() {
  flechasFalladasJ1 += 1;
  console.log(flechasFalladasJ1);
}
function ReiniciarFalladasJ1() {
  flechasFalladasJ1 = 0;
}

function PausarJuego(flechas) {
  PausarOReanudarFlechas(flechas);
  //PausarMusica();
  //Mostrar Menu
}

function ReanudarJuego(flechas) {
  PausarOReanudarFlechas(flechas, 200);
  //ReanudarMusica();
  //Ocultar Menu
}

function Porcentaje(a, b) {
  return parseInt((100 * a) / b);
}

function TerminoElJuego(tiempoTotal, tiempoFinal, flechas) {
  if (DesactivarReloj(tiempoTotal, tiempoFinal)) {
    FinDelJuego();
    PausarOReanudarFlechas(flechas);
    //Mostrar animaciones jugador y enemigo
    //Mostrar menu de puntaje
    return true;
  }
}

/*nota 0 = S, 
1 = A
2 = B
3 = C
4 = D
5 = F
*/
function FinDelJuego() {
  var notaJ0 = 5;
  var notaJ1 = 5;
  var j0 = flechasAcertadasPerfectoJ0 + flechasAcertadasCasiPerfectoJ0 / 2;
  var j1 = flechasAcertadasPerfectoJ1 + flechasAcertadasCasiPerfectoJ1 / 2;
  var porcentajeJ0 = Porcentaje(j0, fechasJ0);
  var porcentajeJ1 = Porcentaje(j1, fechasJ1);

  if (fechasJ0 == j0) {
    notaJ0 = 0;
  } else if (porcentajeJ0 >= 80) {
    notaJ0 = 1;
  } else if (porcentajeJ0 >= 70) {
    notaJ0 = 2;
  } else if (porcentajeJ0 >= 60) {
    notaJ0 = 3;
  } else if (porcentajeJ0 >= 50) {
    notaJ0 = 4;
  } else {
    notaJ0 = 5;
  }

  if (fechasJ1 == j1) {
    notaJ1 = 0;
  } else if (porcentajeJ1 >= 80) {
    notaJ1 = 1;
  } else if (porcentajeJ1 >= 70) {
    notaJ1 = 2;
  } else if (porcentajeJ1 >= 60) {
    notaJ1 = 3;
  } else if (porcentajeJ1 >= 50) {
    notaJ1 = 4;
  } else {
    notaJ1 = 5;
  }
  //MostrarNotas(notaJ0,notaJ1);
  if (notaJ0 <= notaJ1) {
    return false;
  }
  return true;
}
