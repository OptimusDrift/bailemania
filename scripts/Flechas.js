//Muestra una flecha ya creada
function MostrarFlecha(flecha, velocidad, datosFlecha, jugador) {
  ReiniciarFlecha(flecha, velocidad, datosFlecha, jugador);
  flecha.active = true;
  flecha.visible = true;
}

function CrearColisiones(flecha, physics, jugador) {
  if (Jugador0(jugador)) {
    physics.add.overlap(
      collidersCasiPerfectoJ0,
      flecha,
      CasiPerfectoJ0,
      null,
      this
    );
    physics.add.overlap(collidersPerfectoJ0, flecha, PerfectoJ0, null, this);
    physics.add.overlap(collidersPerdidoJ0, flecha, PerdidoJ0, null, this);
  } else {
    physics.add.overlap(
      collidersCasiPerfectoJ1,
      flecha,
      CasiPerfectoJ1,
      null,
      this
    );
    physics.add.overlap(collidersPerfectoJ1, flecha, PerfectoJ1, null, this);
    physics.add.overlap(collidersPerdidoJ1, flecha, PerdidoJ1, null, this);
  }
}

//Crea una nueva flecha
function CrearFlecha(physics, velocidad, datosFlecha, jugador) {
  flecha = physics.add.sprite(-100, -100, "flecha");
  ReiniciarFlecha(flecha, velocidad, datosFlecha, jugador);
  CrearColisiones(flecha, physics, jugador);
  flecha.body.setAllowGravity(false);
  flecha.setGravity(false);
  flecha.setImmovable(true);
  if (Jugador0(jugador)) {
    flecha.scene.flechasGrupoJ0.add(flecha);
  } else {
    flecha.scene.flechasGrupoJ1.add(flecha);
  }
}

//Crea una flecha o muestra una del arreglo de flechas.
//Crear arreglo de flacha MPC
function SpawnFlechas(flechaMPC, physics, jugador = 0, velocidad = 200) {
  datosFlecha = FlechaAleatoria();
  if (flechaMPC.getChildren().length >= 1) {
    flecha = flechaMPC.getChildren()[0];
    MostrarFlecha(flecha, velocidad, datosFlecha, jugador);
    if (Jugador0(jugador)) {
      flecha.scene.flechasGrupoJ0.add(flecha);
    } else {
      flecha.scene.flechasGrupoJ1.add(flecha);
    }
    flechaMPC.remove(flecha);
  } else {
    CrearFlecha(physics, velocidad, datosFlecha, jugador);
  }
}

//Colisiones
function PrecionarTecla(flecha) {
  try {
    if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyA)) {
      return "izquierda";
    }
  } catch (error) {}
  try {
    if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyD)) {
      return "derecha";
    }
  } catch (error) {}

  try {
    if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyS)) {
      return "abajo";
    }
  } catch (error) {}
  try {
    if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyW)) {
      return "arriba";
    }
  } catch (error) {}
  return "";
}

function TeclaPrecionadaIgualAFlecha(flecha, tecla) {
  return flecha.name == tecla;
}
//Jugador 0
function CasiPerfectoJ0(flecha) {
  var tecla = PrecionarTecla(flecha);
  if (tecla != "") {
    if (flecha.scene.flechasGrupoJ0.getChildren()[0]) {
      EliminarFlecha(flecha, 0);
    }
    if (TeclaPrecionadaIgualAFlecha(flecha, tecla)) {
      AgregarPuntosCasiPerfecto();
    }
  }
  AgregarFlechasJ0();
}
function PerfectoJ0(flecha) {
  var tecla = PrecionarTecla(flecha);
  if (tecla != "") {
    if (flecha.scene.flechasGrupoJ0.getChildren()[0]) {
      EliminarFlecha(flecha, 0);
    }
    if (TeclaPrecionadaIgualAFlecha(flecha, tecla)) {
      AgregarPuntosPerfecto();
    }
  }
  AgregarFlechasJ0();
}
function PerdidoJ0(params) {
  EliminarFlecha(params, 0);
  AgregarFlechasJ0();
}
//Jugador 1
function CasiPerfectoJ1(params) {
  if (
    Phaser.Input.Keyboard.JustDown(params.scene.keyA) &&
    params.scene.flechasGrupoJ1.getChildren()[0] == params
  ) {
    //EliminarFlecha(params, 1);
  }
}
function PerfectoJ1(params) {}
function PerdidoJ1(params) {
  //EliminarFlecha(params, 1);
}

//Elimina la primera flecha de la cola
function EliminarFlecha(flecha, jugador) {
  if (Jugador0(jugador)) {
    flecha = flecha.scene.flechasGrupoJ0.getChildren()[0];
    flecha.scene.flechaMPCJ0.add(flecha);
    flecha.scene.flechasGrupoJ0.remove(flecha);
  } else {
    flecha = flecha.scene.flechasGrupoJ1.getChildren()[0];
    flecha.scene.flechaMPCJ1.add(flecha);
    flecha.scene.flechasGrupoJ1.remove(flecha);
  }
  flecha.x = -100;
  flecha.y = -100;
  flecha.setVelocityY(0);
}

function Jugador0(jugador) {
  return jugador == 0;
}
//Obtener pocicion
function ObtenerPocicion(fecha, jugador) {
  if (Jugador0(jugador)) {
    if (fecha.name == "izquierda") {
      return 70;
    }
    if (fecha.name == "abajo") {
      return 155;
    }
    if (fecha.name == "arriba") {
      return 240;
    }
    if (fecha.name == "derecha") {
      return 325;
    }
  }
  if (fecha.name == "izquierda") {
    return 470;
  }
  if (fecha.name == "abajo") {
    return 555;
  }
  if (fecha.name == "arriba") {
    return 640;
  }
  if (fecha.name == "derecha") {
    return 725;
  }
}

function ReiniciarFlecha(flecha, velocidad, tipoDeFlecha, jugador) {
  flecha.clearTint();
  flecha.setVelocityY(velocidad);
  flecha.name = tipoDeFlecha[0];
  flecha.x = ObtenerPocicion(flecha, jugador);
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
    return ["arriba", colores[sorteo], 1.5, powerUp];
  }
  if (parseInt(sorteo) == 2) {
    return ["derecha", colores[sorteo], 3, powerUp];
  }
  return ["abajo", colores[sorteo], 4.5, powerUp];
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
