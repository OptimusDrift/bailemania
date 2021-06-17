function AgregasrFlecha(flechaMPC, flechasGrupo, physics, x, y) {
  let flecha;

  // The number of members of the group
  console.log(flechaMPC.getLength());
  if (flechaMPC.getLength()) {
    flecha = flechaMPC.getFirst();
    flecha.x = 300;
    flecha.y = 300;
    flecha.active = true;
    flecha.visible = true;
    flechaMPC.remove(flecha);
  } else {
    flecha = physics.add.sprite(x, y, "flecha");
    flecha.body.setAllowGravity(false);
    flecha.setGravity(false);
    flecha.setImmovable(true);
    flecha.setVelocityY(300);
    flechasGrupo.add(flecha);
  }
}
