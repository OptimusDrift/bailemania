var tiempoRestante;
var keyX;
class Scene2 extends Phaser.Scene {
  constructor() {
    super("juegonivel1");
  }

  preload() {}
  create() {
    //Inicialización del Reloj
    gameGlobalOptions.tiempoTotal = 0;

    //Arreglos de flechas a agregar en el mapa
    this.flechasGrupo = this.add.group();

    //Flechas que estan activas en el mapa
    this.flechaMPC = this.add.group();

    //Pruebas borrar
    SpawnFlechas(this.flechaMPC, this.physics);
    SpawnFlechas(this.flechaMPC, this.physics);
    t = 0;
    keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
  }
  update(time, delta) {
    //Reloj del juego
    gameGlobalOptions.tiempoTotal += Reloj(delta);
    //Pruebas
    if (DesactivarReloj(gameGlobalOptions.tiempoTotal, t)) {
      SpawnFlechas(this.flechaMPC, this.physics);
      t = ActivarReloj(gameGlobalOptions.tiempoTotal, NumeroRandom(1, 0.2));
    }
    //console.log(Phaser.Input.Keyboard);
    //a;
    if (Phaser.Input.Keyboard.JustDown(keyX)) {
      EliminarFlecha(this.flechasGrupo, "arriba");
    }
  }
}
//variabnles a borrar
var t;
