//Teclas J0
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

function PrecionarTeclaJ1(flecha) {
  try {
    if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyLeft)) {
      return "izquierda";
    }
  } catch (error) {}
  try {
    if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyRight)) {
      return "derecha";
    }
  } catch (error) {}

  try {
    if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyDown)) {
      return "abajo";
    }
  } catch (error) {}
  try {
    if (Phaser.Input.Keyboard.JustDown(flecha.scene.keyUp)) {
      return "arriba";
    }
  } catch (error) {}
  return "";
}
