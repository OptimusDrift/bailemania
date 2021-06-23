var tiempoRestante;
var collidersPerfectoJ0;
var collidersPerdidoJ0;
var collidersCasiPerfectoJ0;
var collidersPerfectoJ1;
var collidersPerdidoJ1;
var collidersCasiPerfectoJ1;

class Scene2 extends Phaser.Scene {
  constructor() {
    super("juegonivel1");
  }

  preload() {}
  create() {
    //Inicialización del Reloj
    gameGlobalOptions.tiempoTotal = 0;

    //Arreglos de flechas a agregar en el mapa Jugador 0
    this.flechasGrupoJ0 = this.add.group();

    //Flechas que estan activas en el mapa Jugador 0
    this.flechaMPCJ0 = this.add.group();

    //Arreglos de flechas a agregar en el mapa Jugador 1
    this.flechasGrupoJ1 = this.add.group();

    //Flechas que estan activas en el mapa Jugador 1
    this.flechaMPCJ1 = this.add.group();

    //Colisiiones J0
    collidersPerfectoJ0 = this.physics.add.staticGroup();
    collidersPerfectoJ0.create(200, 470, "perfecto");
    //collidersPerfecto.setVisible(false);

    collidersCasiPerfectoJ0 = this.physics.add.staticGroup();
    collidersCasiPerfectoJ0.create(200, 520, "perfecto");
    collidersCasiPerfectoJ0.create(200, 420, "perfecto");
    //collidersCasiPerfecto.setVisible(false);

    //Contorno Flechas Jugador1
    this.add.image(70, 470, "flechaJugador1");
    var FlechaAba1 = this.add.image(155, 470, "flechaJugador1");
    FlechaAba1.setRotation(4.5);
    var FlechaArr1 = this.add.image(240, 470, "flechaJugador1");
    FlechaArr1.setRotation(1.5);
    var FlechaDer1 = this.add.image(325, 470, "flechaJugador1");
    FlechaDer1.setRotation(3);

    //Contorno Flechas Jugador2
    this.add.image(470, 470, "flechaJugador2");
    var FlechaAba2 = this.add.image(555, 470, "flechaJugador2");
    FlechaAba2.setRotation(4.5);
    var FlechaArr2 = this.add.image(640, 470, "flechaJugador2");
    FlechaArr2.setRotation(1.5);
    var FlechaDer2 = this.add.image(725, 470, "flechaJugador2");
    FlechaDer2.setRotation(3);

    collidersPerdidoJ0 = this.physics.add.staticGroup();
    collidersPerdidoJ0.create(200, 590, "perfecto");

    //Colisiiones J1
    collidersPerfectoJ1 = this.physics.add.staticGroup();
    collidersPerfectoJ1.create(600, 470, "perfecto");
    //collidersPerfecto.setVisible(false);

    collidersCasiPerfectoJ1 = this.physics.add.staticGroup();
    collidersCasiPerfectoJ1.create(600, 520, "perfecto");
    collidersCasiPerfectoJ1.create(600, 420, "perfecto");
    //collidersCasiPerfecto.setVisible(false);

    collidersPerdidoJ1 = this.physics.add.staticGroup();
    collidersPerdidoJ1.create(600, 590, "perfecto");

    //Pruebas borrar
    t = 0;
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }
  update(time, delta) {
    //Reloj del juego
    gameGlobalOptions.tiempoTotal += Reloj(delta);
    //Pruebas
    if (DesactivarReloj(gameGlobalOptions.tiempoTotal, t)) {
      SpawnFlechas(this.flechaMPCJ1, this.physics, 1);
      SpawnFlechas(this.flechaMPCJ0, this.physics, 0);
      t = ActivarReloj(gameGlobalOptions.tiempoTotal, NumeroRandom(0.5, 0.2));
    }
    PowerUpGirarFlechas(this.flechaMPCJ0);
    if (DesactivarReloj(gameGlobalOptions.tiempoTotal, j)) {
      j = ActivarReloj(gameGlobalOptions.tiempoTotal, 3);
    } else {
    }
  }
}
//variabnles a borrar
var t;
var j = 3;
