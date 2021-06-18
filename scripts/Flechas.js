//Muestra una flecha ya creada
function MostrarFlecha(flecha, velocidad, datosFlecha) {
  ReiniciarFlecha(flecha, velocidad, datosFlecha);
  flecha.active = true;
  flecha.visible = true;
}

//Crea una nueva flecha
function CrearFlecha(physics, velocidad, datosFlecha) {
  flecha = physics.add.sprite(-100, -100, "flecha");
  physics.add.overlap(collidersCasiPerfecto, flecha, CasiPerfecto, null, this);
  physics.add.overlap(collidersPerfecto, flecha, Perfecto, null, this);
  physics.add.overlap(collidersPerdido, flecha, Perdido, null, this);
  ReiniciarFlecha(flecha, velocidad, datosFlecha);
  flecha.body.setAllowGravity(false);
  flecha.setGravity(false);
  flecha.setImmovable(true);
  flecha.scene.flechasGrupo.add(flecha);
}

//Crea una flecha o muestra una del arreglo de flechas.
//Crear arreglo de flacha MPC
function SpawnFlechas(flechaMPC, physics, velocidad = 300) {
  datosFlecha = FlechaAleatoria();
  if (flechaMPC.getChildren().length >= 1) {
    flecha = flechaMPC.getChildren()[0];
    MostrarFlecha(flecha, velocidad, datosFlecha);
    flecha.scene.flechasGrupo.add(flecha);
    flechaMPC.remove(flecha);
  } else {
    CrearFlecha(physics, velocidad, datosFlecha);
  }
}
function CasiPerfecto(params) {
  if (
    Phaser.Input.Keyboard.JustDown(params.scene.keyX) &&
    params.scene.flechasGrupo.getChildren()[0] == params
  ) {
    EliminarFlecha(params);
  }
}
function Perfecto(params) {}
function Perdido(params) {
  EliminarFlecha(params);
}

//Elimina la primera flecha de la cola
function EliminarFlecha(colision) {
  flecha = colision.scene.flechasGrupo.getChildren()[0];
  flecha.x = -100;
  flecha.y = -100;
  flecha.scene.flechaMPC.add(flecha);
  flecha.setVelocityY(0);
  colision.scene.flechasGrupo.killAndHide(flecha);
  colision.scene.flechasGrupo.remove(flecha);
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
  flecha.clearTint();
  flecha.setVelocityY(velocidad);
  flecha.x = ObtenerPocicion(tipoDeFlecha[0]);
  flecha.setTexture(datosFlecha[3][0]);
  if (datosFlecha[3][0] == "flecha") {
    flecha.setTint(datosFlecha[1]);
    flecha.setRotation(datosFlecha[2]);
  } else {
    if (datosFlecha[3][2]) {
      flecha.setRotation(datosFlecha[2]);
    } else {
      flecha.setRotation(0);
    }
  }
  flecha.y = 0;
}

//El nombre lo dice todo OwO
function NumeroRandom(max, min) {
  return Math.random() * (max - min) + min;
}
colores = [0x57c96b, 0xe39cf0, 0xe0ca61, 0x7861c2];
//Devuelve el tipo de flecha a mostrar
function FlechaAleatoria() {
  sorteo = parseInt(NumeroRandom(4, 0));
  powerUp = PowerUp();
  if (parseInt(sorteo) == 0) {
    return ["izquierda", colores[sorteo], 0, powerUp];
  }
  if (parseInt(sorteo) == 1) {
    return ["abajo", colores[sorteo], 1.5, powerUp];
  }
  if (parseInt(sorteo) == 2) {
    return ["arriba", colores[sorteo], 3, powerUp];
  }
  return ["derecha", colores[sorteo], 4.5, powerUp];
}

function PowerUp() {
  p = NumeroRandom(100, 0);
  //Poder de bomba
  if (p < 5) {
    return ["bomba", 0x000000, false];
  }
  //Poder de hielo
  if (p < 10) {
    return ["flechaHielo", 0x00f6ff, true];
  }
  //Poder de fuego
  if (p < 20) {
    return ["flechaFuego", 0xc60025, true];
  }
  return ["flecha", 0x000000, false];
}
