function Animaciones(flecha) {
  if (iAActiva == "IA") {
    if (flecha.name == "izquierda") {
      j2.anims.play("enemigo1Idle");
    } else if (flecha.name == "derecha") {
      j2.anims.play("enemigo1Derecha");
    } else if (flecha.name == "abajo") {
      j2.anims.play("enemigo1Down");
    } else if (flecha.name == "arriba") {
      j2.anims.play("enemigo1Up");
    }
  } else {
    if (flecha.name == "izquierda") {
      j2.anims.play("enemigo2Idle");
    } else if (flecha.name == "derecha") {
      j2.anims.play("enemigo2Derecha");
    } else if (flecha.name == "abajo") {
      j2.anims.play("enemigo2Down");
    } else if (flecha.name == "arriba") {
      j2.anims.play("enemigo2Up");
    }
  }
}

function IAPerfecto(flecha) {
  x = NumeroRandom(0, 100);
  if (x <= 3) {
    Animaciones(flecha);
    return true;
  }
  return false;
}

function IACasiPerfecto(flecha) {
  x = NumeroRandom(0, 100);
  if (x >= 97) {
    Animaciones(flecha);
    return true;
  }
  return false;
}
