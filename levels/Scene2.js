var tiempoRestante;
var collidersPerfecto;
var collidersCasiPerfecto;
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

    collidersPerfecto = this.physics.add.staticGroup();
    collidersPerfecto.create(100, 425, "perfecto");
    //collidersPerfecto.setVisible(false);

    collidersCasiPerfecto = this.physics.add.staticGroup();
    collidersCasiPerfecto.create(200, 225, "casiPerfecto");
    collidersCasiPerfecto.create(200, 225, "casiPerfecto");
    //collidersCasiPerfecto.setVisible(false);

    //Pruebas borrar
    SpawnFlechas(this.flechaMPC, this.physics);
    SpawnFlechas(this.flechaMPC, this.physics);
    t = 0;
    this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
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
    //if (Phaser.Input.Keyboard.JustDown(this.keyX)) {
    //EliminarFlecha(this.flechasGrupo, "arriba");
    //}
  }
}
//variabnles a borrar
var t;
