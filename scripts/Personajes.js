//Teclas J0
function PrecionarTecla(flecha) {
  if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyA)) {
    j1.anims.play("leftJ1");
    return "izquierda";
  } else if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyD)) {
    j1.anims.play("rightJ1");
    return "derecha";
  } else if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyS)) {
    j1.anims.play("downJ1");
    return "abajo";
  } else if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyW)) {
    j1.anims.play("upJ1");
    return "arriba";
  }

  return "";
}

function PrecionarTeclaJ1(flecha) {
  if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyLeft)) {
    j2.anims.play("leftJ2");
    return "izquierda";
  } else if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyRight)) {
    j2.anims.play("rightJ2");
    return "derecha";
  } else if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyDown)) {
    j2.anims.play("downJ2");
    return "abajo";
  } else if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyUp)) {
    j2.anims.play("upJ2");
    return "arriba";
  }
  return "";
}
