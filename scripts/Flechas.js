//Muestra una flecha ya creada
function MostrarFlecha(flecha, x, y, velocidad) {
  flecha.x = x;
  flecha.y = y;
  flecha.active = true;
  flecha.visible = true;
  flecha.setVelocityY(velocidad);
}

//Crea una nueva flecha
function CrearFlecha(physics, x, y, velocidad) {
  flecha = physics.add.sprite(x, y, "flecha");
  flecha.body.setAllowGravity(false);
  flecha.setGravity(false);
  flecha.setImmovable(true);
  flecha.setVelocityY(velocidad);
  return flecha;
}
function AgregasrFlecha(
  flechaMPC,
  flechasGrupo,
  physics,
  x,
  y,
  velocidad = 300
) {
  console.log(flechaMPC.getChildren().length);
  if (flechaMPC.getChildren().length >= 1) {
    flecha = flechaMPC.getChildren()[0];
    MostrarFlecha(flecha, x, y, velocidad);
    flecha.scene.flechasGrupo.add(flecha);
    //flechaMPC.killAndHide(flecha);
    flechaMPC.remove(flecha);
  } else if (flechasGrupo.getChildren().length < 3) {
    flecha = CrearFlecha(physics, x, y, velocidad);
    flecha.scene.flechasGrupo.add(flecha);
  }
}

function EliminarFlecha(flechasGrupo) {
  if (flechasGrupo.getChildren().length > 0) {
    console.log(flechasGrupo.getChildren().length);
    flecha = flechasGrupo.getChildren()[0];
    flecha.scene.flechaMPC.add(flecha);
    //flechasGrupo.killAndHide(A);
    flechasGrupo.remove(flecha);
  }
}
