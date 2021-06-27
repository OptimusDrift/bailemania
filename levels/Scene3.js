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
//Musica
var musica;
//
var resultado;
var btnMenuPrincipal;
var j1;
var j2;
var iAActiva = 1;

//Txt's
var txtPerfectas;
var txtBuenas;
var txtErradas;
var txtNota;
var txtPuntaje;
var txtGanador;

var btnPausa;
var txtTiempo;
//FX
var hieloPW;
var fuegoPW;
var bombaPW;

class Scene3 extends Phaser.Scene {
  constructor() {
    super("Juegonivel2");
  }

  preload() {}
  create() {
    iAActiva = 1;
    //Inicialización del Reloj
    gameGlobalOptions.tiempoTotal = 0;
    this.modo = 2;
    //Arreglos de flechas a agregar en el mapa Jugador 0
    this.flechasGrupoJ0 = this.add.group();

    //Flechas que estan activas en el mapa Jugador 0
    this.flechaMPCJ0 = this.add.group();

    //Arreglos de flechas a agregar en el mapa Jugador 1
    this.flechasGrupoJ1 = this.add.group();

    //Flechas que estan activas en el mapa Jugador 1
    this.flechaMPCJ1 = this.add.group();

    this.tiempoCancion = 237;

    //Colisiiones J0
    collidersPerfectoJ0 = this.physics.add.staticGroup();
    collidersPerfectoJ0.create(200, 470, "perfecto");
    collidersPerfectoJ0.setVisible(false);

    collidersCasiPerfectoJ0 = this.physics.add.staticGroup();
    collidersCasiPerfectoJ0.create(200, 520, "perfecto");
    collidersCasiPerfectoJ0.create(200, 420, "perfecto");
    collidersCasiPerfectoJ0.setVisible(false);

    //Contorno Flechas Jugador1
    var FlechaAba1 = this.add.image(70, 470, "flechaJugador1");
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

    //FX
    hieloPW = this.sound.add("Hielo");
    fuegoPW = this.sound.add("Fuego");
    bombaPW = this.sound.add("Explosion");

    collidersPerdidoJ0 = this.physics.add.staticGroup();
    collidersPerdidoJ0.create(200, 590, "perfecto");
    collidersPerdidoJ0.setVisible(false);

    btnPausa = this.add.image(400, 300, "EscenaPausa");
    btnPausa.setVisible(false);
    btnPausa.setDepth(10);
    btnPausa.setInteractive();

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
    //Spawn de flechas
    this.spawnJ0 = true;
    this.spawnJ1 = true;

    pausa = false;
    t = 0;
    //Menu de resultados
    //Comandos Temporales (Borrar)
    //this.add.image(400, 300, "Resultados");
    //this.add.image(610, 490, "BotonContinuar");
    //this.add.image(190, 490, "BotonReintentar");

    //Musica
    musica = this.sound.add("MusicaDosJugadores");
    musica.play();

    //Jugadores
    //this.add.image(400, 300, "JcJ");
    //this.add.image(400, 550, "VolverInicio");
    //Pausa
    //this.add.image(400, 300, "EscenaPausa");

    //Comandos a borrar despues
    this.keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
    this.keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);

    //Vidas
    resultado = this.add.image(400, 300, "JcJ");
    resultado.setDepth(9);
    resultado.setVisible(false);

    btnMenuPrincipal = this.add.image(400, 480, "VolverInicio");
    btnMenuPrincipal.setDepth(10);
    btnMenuPrincipal.setInteractive();
    btnMenuPrincipal.on("pointerdown", () => this.scene.start("inicio"));
    btnMenuPrincipal.setVisible(false);
    //this.add.image(400, 50, "Vida");
    //this.add.image(400, 100, "Vida");
    //this.add.image(400, 150, "VidaPerdida");

    //Teclas Jugador 0
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
    //Jugador 1
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyDown = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN
    );
    this.keyLeft = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT
    );
    this.keyRight = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );

    puntosJ0 = 0;
    puntosJ1 = 0;

    //Sprites jugadores
    j1 = this.physics.add.sprite(200, 300, "j1Idle").setScale(2);
    j1.anims.play("idleJ1");
    j2 = this.physics.add.sprite(600, 300, "j2Idle").setScale(2);
    j2.anims.play("idleJ2");
    //Fondo
    var fondo = this.physics.add.staticGroup();
    fondo.create(400, 300, "lv2");
    fondo.setDepth(-2);
    //txt's
    txtPerfectas = this.add.text(450, 215, "", {
      fontSize: 32,
    });

    txtPerfectas.setDepth(11);

    txtBuenas = this.add.text(450, 270, "", {
      fontSize: 32,
    });
    txtBuenas.setDepth(11);

    txtErradas = this.add.text(450, 325, "", {
      fontSize: 32,
    });
    txtErradas.setDepth(11);

    txtNota = this.add.text(450, 370, "", {
      fontSize: 64,
    });
    txtNota.setDepth(11);

    txtPuntaje = this.add.text(450, 355, "0", {
      fontSize: 64,
    });
    txtPuntaje.setDepth(11);
    txtPuntaje.setVisible(false);
    txtGanador = this.add.text(450, 255, "0", {
      fontSize: 64,
    });
    ReiniciarEstadisticas();
    finDelJuego = false;
    txtGanador.setDepth(11);
    txtGanador.setVisible(false);

    txtTiempo = this.add.text(350, 520, this.tiempoCancion, {
      fontSize: 64,
    });
    txtTiempo.setDepth(11);
  }
  update(time, delta) {
    if (Phaser.Input.Keyboard.JustDown(this.keyP) && !finDelJuego) {
      pausa = !pausa;
      if (pausa) {
        PausarJuego(this.flechaMPCJ0);
      } else {
        ReanudarJuego(this.flechaMPCJ0);
      }
    }
    if (!pausa && !finDelJuego) {
      //Reloj del juego
      txtTiempo.setText(
        parseInt(this.tiempoCancion - gameGlobalOptions.tiempoTotal)
      );
      gameGlobalOptions.tiempoTotal += Reloj(delta);
      if (
        !TerminoElJuego(
          gameGlobalOptions.tiempoTotal,
          this.tiempoCancion,
          this.flechaMPCJ0,
          this.modo
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
            hieloPW.play();
          }
        }
        if (this.powerUpActivoJ1 == "flechaHielo") {
          if (this.jugador1 == true) {
            this.congelarJ1 = ActivarReloj(
              gameGlobalOptions.tiempoTotal,
              PowerUpCongelarJ1(this.flechaMPCJ1)
            );
            hieloPW.play();
          }
        }
        if (this.powerUpActivoJ0 == "flechaFuego") {
          if (this.jugador0 == true) {
            this.quemadoJ0 = ActivarReloj(
              gameGlobalOptions.tiempoTotal,
              PowerUpFuegoJ0(this.flechaMPCJ0)
            );
            fuegoPW.play();
          }
        }
        if (this.powerUpActivoJ1 == "flechaFuego") {
          if (this.jugador1 == true) {
            this.quemadoJ1 = ActivarReloj(
              gameGlobalOptions.tiempoTotal,
              PowerUpFuegoJ1(this.flechaMPCJ1)
            );
            fuegoPW.play();
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
        //Pruebas
        if (DesactivarReloj(gameGlobalOptions.tiempoTotal, t)) {
          if (this.spawnJ0) {
            SpawnFlechas(this.flechaMPCJ0, this.physics, 0);
          }
          if (this.spawnJ1) {
            SpawnFlechas(this.flechaMPCJ1, this.physics, iAActiva);
          }
          t = ActivarReloj(
            gameGlobalOptions.tiempoTotal,
            NumeroRandom(0.5, 0.2)
          );
        }
      }
    }
  }
}
//variables a borrar
var t;
