//Muestra una flecha ya creada
function MostrarFlecha(flecha, velocidad, tipoDeFlecha) {
  flecha.active = true;
  ReiniciarFlecha(flecha, velocidad, tipoDeFlecha);
  flecha.visible = true;
}

//Crea una nueva flecha
function CrearFlecha(physics, velocidad, tipoDeFlecha) {
  flecha = physics.add.sprite(-100, -100, "FlechasQueCaen");
  ReiniciarFlecha(flecha, velocidad, tipoDeFlecha);
  flecha.body.setAllowGravity(false);
  flecha.setGravity(false);
  flecha.setImmovable(true);
  flecha.scene.flechasGrupo.add(flecha);
}
//Crea una flecha o muestra una del arreglo de flechas.
//Crear arreglo de flacha MPC
function SpawnFlechas(flechaMPC, flechasGrupo, physics, velocidad = 300) {
  tipoDeFlecha = FlechaAleatoria();
  if (flechaMPC.getChildren().length >= 1) {
    flecha = flechaMPC.getChildren()[0];
    MostrarFlecha(flecha, velocidad, tipoDeFlecha);
    flecha.scene.flechasGrupo.add(flecha);
    flechaMPC.remove(flecha);
  } else {
    CrearFlecha(physics, velocidad, tipoDeFlecha);
  }
}

//Elimina la primera flecha de la cola
function EliminarFlecha(flechasGrupo) {
  if (flechasGrupo.getChildren().length > 0) {
    flecha = flechasGrupo.getChildren()[0];
    flecha.scene.flechaMPC.add(flecha);
    flechasGrupo.killAndHide(flecha);
    flecha.setVelocityY(0);
    flechasGrupo.remove(flecha);
  }
}

//Obtener pocicion
function ObtenerPocicion(tipoDeFlecha) {
  if (tipoDeFlecha == "izquierda") {
    return 115;
  }
  if (tipoDeFlecha == "abajo") {
    return 200;
  }
  if (tipoDeFlecha == "arriba") {
    return 285;
  }
  if (tipoDeFlecha == "derecha") {
    return 370;
  }
}

function ReiniciarFlecha(flecha, velocidad, tipoDeFlecha) {
  flecha.setVelocityY(velocidad);
  flecha.anims.play(tipoDeFlecha, true);
  flecha.x = ObtenerPocicion(tipoDeFlecha);
  flecha.y = 0;
}

//El nombre lo dice todo OwO
function NumeroRandom(max, min) {
  return Math.random() * (max - min) + min;
}

//Devuelve el tipo de flecha a mostrar
function FlechaAleatoria() {
  sorteo = NumeroRandom(5, 1);
  if (parseInt(sorteo) == 1) {
    return "izquierda";
  }
  if (parseInt(sorteo) == 2) {
    return "abajo";
  }
  if (parseInt(sorteo) == 3) {
    return "arriba";
  }
  return "derecha";
}
