velocidad = 200;

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
  datosFlecha = FlechaAleatoria(jugador);
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

function TeclaPrecionadaIgualAFlecha(flecha, tecla) {
  return flecha.name == tecla;
}
//Jugador 0
function CasiPerfectoJ0(flecha) {
  var tecla = PrecionarTecla(flecha);
  if (tecla != "") {
    if (flecha.scene.flechasGrupoJ0.getChildren()[0]) {
      EliminarFlecha(flecha, 0);
      AgregarFlechasJ0();
    }
    if (TeclaPrecionadaIgualAFlecha(flecha, tecla)) {
      AgregarPuntosCasiPerfecto();
      AgregarAcertadasCasiPerfectoJ0();
    } else {
      timpoTemblor = ActivarReloj(gameGlobalOptions.tiempoTotal, 0.1);
      AgregarFalladasJ0();
    }
  }
}
function PerfectoJ0(flecha) {
  var tecla = PrecionarTecla(flecha);
  if (tecla != "") {
    if (flecha.scene.flechasGrupoJ0.getChildren()[0]) {
      EliminarFlecha(flecha, 0);
      AgregarFlechasJ0();
    }
    if (TeclaPrecionadaIgualAFlecha(flecha, tecla)) {
      AgregarPuntosPerfecto();
      AgregarAcertadasPerfectoJ0();
      flecha.scene.powerUpActivoJ1 = flecha.texture.key;
      flecha.scene.jugador1 = true;
    } else {
      timpoTemblor = ActivarReloj(gameGlobalOptions.tiempoTotal, 0.1);
      AgregarFalladasJ0();
    }
  }
}
function PerdidoJ0(params) {
  EliminarFlecha(params, 0);
  timpoTemblor = ActivarReloj(gameGlobalOptions.tiempoTotal, 0.1);
  console.log(timpoTemblor);
  AgregarFalladasJ0();
  AgregarFlechasJ0();
}
//Jugador 1
function CasiPerfectoJ1(flecha) {
  var tecla;
  if (flecha.scene.modo == 1) {
    if (IACasiPerfecto(flecha)) {
      EliminarFlecha(flecha, 1);
      AgregarAcertadasCasiPerfectoJ1();
      AgregarFlechasJ1();
    }
  } else {
    tecla = PrecionarTeclaJ1(flecha);
    if (tecla != "") {
      if (flecha.scene.flechasGrupoJ1.getChildren()[0]) {
        EliminarFlecha(flecha, 1);
        AgregarFlechasJ1();
      }
      if (TeclaPrecionadaIgualAFlecha(flecha, tecla)) {
        AgregarPuntosPerfectoJ1();
        AgregarAcertadasCasiPerfectoJ1();
      }
    }
  }
}
function PerfectoJ1(flecha) {
  var tecla;
  if (flecha.scene.modo == 1) {
    if (IAPerfecto(flecha)) {
      EliminarFlecha(flecha, 1);
      AgregarFlechasJ1();
      AgregarAcertadasPerfectoJ1();
      flecha.scene.powerUpActivoJ0 = flecha.texture.key;
      flecha.scene.jugador0 = true;
    }
  } else {
    tecla = PrecionarTeclaJ1(flecha);
    if (tecla != "") {
      if (flecha.scene.flechasGrupoJ1.getChildren()[0]) {
        EliminarFlecha(flecha, 1);
        AgregarFlechasJ1();
      }
      if (TeclaPrecionadaIgualAFlecha(flecha, tecla)) {
        flecha.scene.powerUpActivoJ0 = flecha.texture.key;
        flecha.scene.jugador0 = true;
        AgregarPuntosPerfectoJ1();
        AgregarAcertadasPerfectoJ1();
      }
    }
  }
}
function PerdidoJ1(params) {
  EliminarFlecha(params, 1);
  AgregarFalladasJ1();
  AgregarFlechasJ1();
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
function FlechaAleatoria(jugador) {
  sorteo = parseInt(NumeroRandom(4, 0));
  powerUp = PowerUp(jugador);
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

function PowerUp(jugador) {
  p = NumeroRandom(100, 0);
  if (Jugador0(jugador) || jugador == "IA2" || jugador == 1) {
    //Poder de bomba
    if (p < 2) {
      return ["bomba", 0x000000, false];
    }
    //Poder de hielo
    if (p < 5) {
      return ["flechaHielo", 0x00f6ff, true];
    }
    //Poder de fuego
    if (p < 8) {
      return ["flechaFuego", 0xc60025, true];
    }
    if (p < 20 && jugador == "IA2") {
      return ["flechaGiratoria", 0xc60025, true];
    }
  }
  return ["flecha", 0x000000, false];
}

function PausaJ0(params, velocidad) {
  params.scene.flechasGrupoJ0.getChildren().forEach((element) => {
    element.setVelocity(0, velocidad);
  });
}

function PausaJ1(params, velocidad) {
  params.scene.flechasGrupoJ1.getChildren().forEach((element) => {
    element.setVelocity(0, velocidad);
  });
}

function PausarOReanudarFlechas(params, velocidad = 0) {
  PausaJ0(params, velocidad);
  PausaJ1(params, velocidad);
}

function LimpiarFlechasEnPantalla(params, jugador) {
  var i = 0;
  if (jugador == 0) {
    i = params.scene.flechasGrupoJ0.getChildren().length;
  } else {
    i = i = params.scene.flechasGrupoJ1.getChildren().length;
  }
  for (let index = 0; index < i; index++) {
    EliminarFlecha(params, jugador);
    AgregarPuntosPerfecto();
  }
}

function GirarFlechas(params) {
  params.scene.flechasGrupoJ0.getChildren().forEach((element) => {
    element.rotation += 0.05;
  });
}
