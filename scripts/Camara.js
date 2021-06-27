var timpoTemblor;
function TemblorCamara() {
  if (!DesactivarReloj(gameGlobalOptions.tiempoTotal, timpoTemblor)) {
    if (NumeroRandom(0, 10) <= 5) {
      camera.rotation += 0.01;
    } else {
      camera.rotation -= 0.01;
    }
  } else {
    camera.rotation = 0;
  }
}
