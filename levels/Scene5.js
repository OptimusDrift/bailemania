//Tiempo de la cancion
var tiempoRestante;
//Colisiones con las flechas
//Jugador 0
var collidersPerfectoJ0;
var collidersPerdidoJ0;
var collidersCasiPerfectoJ0;
//Jugador 1
var collidersPerfectoJ1;
var collidersPerdidoJ1;
var collidersCasiPerfectoJ1;
//Pausa del juego
var pausa;
var finDelJuego;
//Menu
var resultado;
var btnContinuar;
var btnReintentar;

class Scene5 extends Phaser.Scene {
  constructor() {
    super("juegonivel3");
  }

  preload() {}
  create() {
    //Inicialización del Reloj
    gameGlobalOptions.tiempoTotal = 0;

    this.modo = 1;

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
    collidersPerfectoJ0.setVisible(false);

    collidersCasiPerfectoJ0 = this.physics.add.staticGroup();
    collidersCasiPerfectoJ0.create(200, 520, "perfecto");
    collidersCasiPerfectoJ0.create(200, 420, "perfecto");
    collidersCasiPerfectoJ0.setVisible(false);

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
    collidersPerdidoJ0.setVisible(false);

    //Colisiiones J1
    collidersPerfectoJ1 = this.physics.add.staticGroup();
    collidersPerfectoJ1.create(600, 470, "perfecto");
    collidersPerfectoJ1.setVisible(false);

    collidersCasiPerfectoJ1 = this.physics.add.staticGroup();
    collidersCasiPerfectoJ1.create(600, 520, "perfecto");
    collidersCasiPerfectoJ1.create(600, 420, "perfecto");
    collidersCasiPerfectoJ1.setVisible(false);

    collidersPerdidoJ1 = this.physics.add.staticGroup();
    collidersPerdidoJ1.create(600, 590, "perfecto");
    collidersPerdidoJ1.setVisible(false);

    //Variables escene
    this.powerUpActivoJ0 = "";
    this.powerUpActivoJ1 = "";
    this.jugador0 = false;
    this.jugador1 = false;
    //Tiempo congelado
    this.congelarJ0 = 0;
    this.congelarJ1 = 0;
    this.quemadoJ0 = 0;
    this.quemadoJ1 = 0;
    this.girar = 0;
    //Spawn de flechas
    this.spawnJ0 = true;
    this.spawnJ1 = true;

    //Tiempo de la cancion
    this.tiempoCanncion = 3;

    //Menu de nivel superado o no superado
    resultado = this.add.image(400, 300, "Resultados");
    resultado.setVisible(false);
    resultado.setDepth(9);
    btnContinuar = this.add.image(610, 490, "BotonContinuar");
    btnContinuar.setVisible(false);
    btnContinuar.setDepth(10);
    btnContinuar.setInteractive();
    btnContinuar.on("pointerdown", () => this.scene.start("creditos"));
    btnReintentar = this.add.image(190, 490, "BotonReintentar");
    btnReintentar.setVisible(false);
    btnReintentar.setDepth(10);
    btnReintentar.setInteractive();
    btnReintentar.on("pointerdown", () => this.scene.start("juegonivel3"));

    pausa = false;
    finDelJuego = false;
    t = 0;
    //Teclas Jugador 0
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

    ReiniciarEstadisticas();
  }
  update(time, delta) {
    if (Phaser.Input.Keyboard.JustDown(this.keyP)) {
      pausa = !pausa;
      if (pausa) {
        PausarJuego(this.flechaMPCJ0);
      } else {
        ReanudarJuego(this.flechaMPCJ0);
      }
    }
    if (!pausa && !finDelJuego) {
      //Reloj del juego
      gameGlobalOptions.tiempoTotal += Reloj(delta);
      if (
        !TerminoElJuego(
          gameGlobalOptions.tiempoTotal,
          this.tiempoCanncion,
          this.flechaMPCJ0
        )
      ) {
        //PowerUps
        if (this.powerUpActivoJ0 == "bomba") {
          if (this.jugador0 == true) {
            PowerUpBombaJ1(this.flechaMPCJ1);
          }
        }
        if (this.powerUpActivoJ1 == "bomba") {
          if (this.jugador1 == true) {
            PowerUpBombaJ0(this.flechaMPCJ0);
          }
        }
        if (this.powerUpActivoJ0 == "flechaHielo") {
          if (this.jugador0 == true) {
            this.congelarJ0 = ActivarReloj(
              gameGlobalOptions.tiempoTotal,
              PowerUpCongelarJ0(this.flechaMPCJ0)
            );
          }
        }
        if (this.powerUpActivoJ1 == "flechaHielo") {
          if (this.jugador1 == true) {
            this.congelarJ1 = ActivarReloj(
              gameGlobalOptions.tiempoTotal,
              PowerUpCongelarJ1(this.flechaMPCJ1)
            );
          }
        }
        if (this.powerUpActivoJ0 == "flechaFuego") {
          if (this.jugador0 == true) {
            this.quemadoJ0 = ActivarReloj(
              gameGlobalOptions.tiempoTotal,
              PowerUpFuegoJ0(this.flechaMPCJ0)
            );
          }
        }
        if (this.powerUpActivoJ1 == "flechaFuego") {
          if (this.jugador1 == true) {
            this.quemadoJ1 = ActivarReloj(
              gameGlobalOptions.tiempoTotal,
              PowerUpFuegoJ1(this.flechaMPCJ1)
            );
          }
        }
        if (this.powerUpActivoJ0 == "flechaGiratoria") {
          if (this.jugador0 == true) {
            this.girar = ActivarReloj(
              gameGlobalOptions.tiempoTotal,
              PowerUpFuegoJ1(this.flechaMPCJ0)
            );
          }
        }
        //ReiniciarPowerUps
        this.powerUpActivoJ0 = "";
        this.powerUpActivoJ1 = "";
        this.jugador0 = false;
        this.jugador1 = false;

        //Ejecutar PowerUps
        if (!DesactivarReloj(gameGlobalOptions.tiempoTotal, this.congelarJ0)) {
          PowerUpCongelarJ0(this.flechaMPCJ0);
          this.spawnJ0 = false;
        } else if (
          !DesactivarReloj(gameGlobalOptions.tiempoTotal, this.quemadoJ0)
        ) {
          PowerUpFuegoJ0(this.flechaMPCJ0);
        } else {
          PowerUpDescongelarJ0(this.flechaMPCJ0);
          this.spawnJ0 = true;
        }

        if (!DesactivarReloj(gameGlobalOptions.tiempoTotal, this.congelarJ1)) {
          PowerUpCongelarJ1(this.flechaMPCJ1);
          this.spawnJ1 = false;
        } else if (
          !DesactivarReloj(gameGlobalOptions.tiempoTotal, this.quemadoJ1)
        ) {
          PowerUpFuegoJ1(this.flechaMPCJ1);
        } else {
          PowerUpDescongelarJ1(this.flechaMPCJ1);
          this.spawnJ1 = true;
        }
        if (!DesactivarReloj(gameGlobalOptions.tiempoTotal, this.girar)) {
          PowerUpGirarFlechas(this.flechaMPCJ0);
        }
        //Pruebas
        if (DesactivarReloj(gameGlobalOptions.tiempoTotal, t)) {
          if (this.spawnJ0) {
            SpawnFlechas(this.flechaMPCJ0, this.physics, 0);
          }
          if (this.spawnJ1) {
            SpawnFlechas(this.flechaMPCJ1, this.physics, "IA2");
          }
          t = ActivarReloj(
            gameGlobalOptions.tiempoTotal,
            NumeroRandom(0.5, 0.2)
          );
        }
        if (DesactivarReloj(gameGlobalOptions.tiempoTotal, j)) {
          j = ActivarReloj(gameGlobalOptions.tiempoTotal, 3);
        }
      }
    }
  }
}
//variabnles a borrar
var t;
var j = 3;
