function IAPerfecto(params) {
  x = NumeroRandom(0, 100);
  if (x <= 3) {
    return true;
  }
  return false;
}

function IACasiPerfecto(params) {
  x = NumeroRandom(0, 100);
  if (x >= 97) {
    return true;
  }
  return false;
}
