var MusicaInicio;
class Scene1 extends Phaser.Scene {
  constructor() {
    super("inicio");
  }
  preload() {
    //menus
    this.load.image("Portada", "./assets/MenuInicio.png");
    this.load.image("UnJugador", "assets/UnJugadorcito.png");
    this.load.image("DosJugadores", "./assets/DosJugadores.png");
    this.load.image("StrikerGames", "./assets/StrikerGames.png");

    //Assets Pantalla Resultados
    this.load.image("Resultados", "./assets/RESULTADOS.png");
    this.load.image("BotonContinuar", "./assets/BotonContinuar.png");
    this.load.image("BotonReintentar", "./assets/BotonReintentar.png");

    //Sprites jugador 1
    this.load.spritesheet("j1Idle", "assets/J1Idle.png", {
      frameWidth: 51,
      frameHeight: 103,
    });

    this.load.spritesheet("j1Up", "assets/J1Up.png", {
      frameWidth: 55,
      frameHeight: 128,
    });

    this.load.spritesheet("j1Down", "assets/J1Down.png", {
      frameWidth: 88,
      frameHeight: 89,
    });

    this.load.spritesheet("j1Right", "assets/J1Derecha.png", {
      frameWidth: 58,
      frameHeight: 102,
    });

    this.load.spritesheet("j1Left", "assets/J1Left.png", {
      frameWidth: 58,
      frameHeight: 102,
    });

    this.load.spritesheet("j1Victory", "assets/J1Victory.png", {
      frameWidth: 84,
      frameHeight: 123,
    });

    this.load.spritesheet("j1Derrota", "assets/J1Derrota.png", {
      frameWidth: 63,
      frameHeight: 101,
    });
    //Sprites jugador 2
    this.load.spritesheet("j2Idle", "assets/J2Idle.png", {
      frameWidth: 51,
      frameHeight: 103,
    });

    this.load.spritesheet("j2Up", "assets/J2Up.png", {
      frameWidth: 55,
      frameHeight: 128,
    });

    this.load.spritesheet("j2Down", "assets/J2Down.png", {
      frameWidth: 88,
      frameHeight: 89,
    });

    this.load.spritesheet("j2Right", "assets/J2Derecha.png", {
      frameWidth: 58,
      frameHeight: 102,
    });

    this.load.spritesheet("j2Left", "assets/J2Left.png", {
      frameWidth: 58,
      frameHeight: 102,
    });

    this.load.spritesheet("j2Victory", "assets/J2Victory.png", {
      frameWidth: 84,
      frameHeight: 123,
    });

    this.load.spritesheet("j2Derrota", "assets/J2Derrota.png", {
      frameWidth: 63,
      frameHeight: 101,
    });
    //Enemigo 1
    this.load.spritesheet("enemigo1Idle", "assets/Enemigo1Idle.png", {
      frameWidth: 50,
      frameHeight: 105,
    });

    this.load.spritesheet("enemigo1Up", "assets/Enemigo1Up.png", {
      frameWidth: 63,
      frameHeight: 123,
    });
    this.load.spritesheet("enemigo1Down", "assets/Enemigo1Down.png", {
      frameWidth: 83,
      frameHeight: 85,
    });

    this.load.spritesheet("enemigo1Derecha", "assets/Enemigo1Derecha.png", {
      frameWidth: 69,
      frameHeight: 106,
    });

    this.load.spritesheet("enemigo1Izquierda", "assets/Enemigo1Izquierda.png", {
      frameWidth: 60,
      frameHeight: 106,
    });

    this.load.spritesheet("enemigo1Victory", "assets/Enemigo1Victory.png", {
      frameWidth: 70,
      frameHeight: 104,
    });

    this.load.spritesheet("enemigo1Derrota", "assets/Enemigo1Derrota.png", {
      frameWidth: 62,
      frameHeight: 103,
    });

    //Enemigo 2
    this.load.spritesheet("enemigo2Idle", "assets/Enemigo2Idle.png", {
      frameWidth: 53,
      frameHeight: 104,
    });

    this.load.spritesheet("enemigo2Up", "assets/Enemigo2Up.png", {
      frameWidth: 53,
      frameHeight: 105,
    });
    this.load.spritesheet("enemigo2Down", "assets/Enemigo2Down.png", {
      frameWidth: 87,
      frameHeight: 87,
    });

    this.load.spritesheet("enemigo2Derecha", "assets/Enemigo2Derecha.png", {
      frameWidth: 74,
      frameHeight: 104,
    });

    this.load.spritesheet("enemigo2Izquierda", "assets/Enemigo2Izquierda.png", {
      frameWidth: 51,
      frameHeight: 103,
    });

    this.load.spritesheet("enemigo2Victory", "assets/Enemigo2Victory.png", {
      frameWidth: 57,
      frameHeight: 105,
    });

    this.load.spritesheet("enemigo2Derrota", "assets/Enemigo2Derrota.png", {
      frameWidth: 58,
      frameHeight: 104,
    });

    //Vidas
    this.load.image("Vida", "./assets/Vida.png");
    this.load.image("VidaPerdida", "./assets/VidaPerdida.png");

    //Pantalla Pausa
    this.load.image("EscenaPausa", "./assets/PantallaPausa.png");

    //Pantallas Juego Terminado
    this.load.image("JcJ", "./assets/JuegoTerminadoJcJ.png");
    this.load.image("JcE", "./assets/JuegoTerminadoJcE.png");
    this.load.image("VolverInicio", "./assets/BotonVolverInicio.png");

    //Fondos niveles
    this.load.image("lv1", "./assets/fondo1.png");
    this.load.image("lv2", "./assets/fondo2.png");

    //assets levels
    //Contorno de las flechas
    this.load.image("flechaJugador1", "./assets/FlechaJugador1.png");
    this.load.image("flechaJugador2", "./assets/FlechaJugador2.png");
    //Flechas
    this.load.image("flecha", "./assets/flecha.png");
    //Creditos
    this.load.image("creditos", "assets/EscenaCreditos.png");
    this.load.image("Regreso", "./assets/FlechaRegreso.png");
    //PowerUps
    this.load.image("bomba", "./assets/bomba.png");
    this.load.image("goldPapa", "assets/goldPapa.png");
    this.load.image("flechaHielo", "./assets/flechaHielo.png");
    this.load.image("flechaFuego", "./assets/flechaFuego.png");
    this.load.image("flechaGiratoria", "./assets/flechaGiratoria.png");

    //Colliders
    this.load.image("perfecto", "./assets/perfecto.png");
    this.load.image("empresario", "./assets/empresario.png");

    //Musica
    this.load.audio("MusicaPrincipal", "./sound/MusicaMenuPrincipal.mp3");
    this.load.audio("MusicaCreditos", "./sound/MusicaCreditos.mp3");
    this.load.audio("MusicaUnJugadorLv1", "./sound/MusicaUnJugadorLv1.mp3");
    this.load.audio("MusicaUnJugadorLv2", "./sound/MusicaUnJugadorLv2.mp3");
    this.load.audio("MusicaDosJugadores", "./sound/MusicaDosJugadores.mp3");

    //Efectos Especiales
    this.load.audio("Hielo", "./sound/EfectoHielo.mp3");
    this.load.audio("Fuego", "./sound/EfectoFuego.mp3");
    this.load.audio("Spin", "./sound/EfectoSpin.mp3");
    this.load.audio("Explosion", "./sound/ExplosionEfecto.mp3");
  }
  create() {
    this.add.image(400, 300, "Portada");

    var UnJugador = this.add.image(400, 330, "UnJugador");
    UnJugador.setInteractive();
    UnJugador.on(
      "pointerdown",
      function (pointer) {
        if (pointer.leftButtonReleased) {
          MusicaInicio.stop();
          this.scene.start("juegonivel1");
        }
      },
      this
    );
    //Sprites Jugador 1
    this.anims.create({
      key: "idleJ1",
      frames: this.anims.generateFrameNumbers("j1Idle", {
        start: 0,
        end: 7,
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "downJ1",
      frames: this.anims.generateFrameNumbers("j1Down", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: "upJ1",
      frames: this.anims.generateFrameNumbers("j1Up", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "rightJ1",
      frames: this.anims.generateFrameNumbers("j1Right", {
        start: 0,
        end: 2,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "leftJ1",
      frames: this.anims.generateFrameNumbers("j1Left", {
        start: 0,
        end: 3,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "victoryJ1",
      frames: this.anims.generateFrameNumbers("j1Victory", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: "derrotaJ1",
      frames: this.anims.generateFrameNumbers("j1Derrota", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    //Sprites Enemigo 1
    this.anims.create({
      key: "enemigo1Idle",
      frames: this.anims.generateFrameNumbers("enemigo1Idle", {
        start: 0,
        end: 7,
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "enemigo1Up",
      frames: this.anims.generateFrameNumbers("enemigo1Up", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: "enemigo1Down",
      frames: this.anims.generateFrameNumbers("enemigo1Down", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "enemigo1Derecha",
      frames: this.anims.generateFrameNumbers("enemigo1Derecha", {
        start: 0,
        end: 2,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "enemigo1Izquierda",
      frames: this.anims.generateFrameNumbers("enemigo1Izquierda", {
        start: 0,
        end: 3,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "enemigo1Victory",
      frames: this.anims.generateFrameNumbers("enemigo1Victory", {
        start: 0,
        end: 3,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: "enemigo1Derrota",
      frames: this.anims.generateFrameNumbers("enemigo1Derrota", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    //Sprites Jugador 2
    this.anims.create({
      key: "idleJ2",
      frames: this.anims.generateFrameNumbers("j2Idle", {
        start: 0,
        end: 7,
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "downJ2",
      frames: this.anims.generateFrameNumbers("j2Down", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: "upJ2",
      frames: this.anims.generateFrameNumbers("j2Up", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "rightJ2",
      frames: this.anims.generateFrameNumbers("j2Right", {
        start: 0,
        end: 2,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "leftJ2",
      frames: this.anims.generateFrameNumbers("j2Left", {
        start: 0,
        end: 3,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "victoryJ2",
      frames: this.anims.generateFrameNumbers("j2Victory", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: "derrotaJ2",
      frames: this.anims.generateFrameNumbers("j2Derrota", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    //Sprites Enemigo 1
    this.anims.create({
      key: "enemigo1Idle",
      frames: this.anims.generateFrameNumbers("enemigo1Idle", {
        start: 0,
        end: 7,
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "enemigo1Up",
      frames: this.anims.generateFrameNumbers("enemigo1Up", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: "enemigo1Down",
      frames: this.anims.generateFrameNumbers("enemigo1Down", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "enemigo1Derecha",
      frames: this.anims.generateFrameNumbers("enemigo1Derecha", {
        start: 0,
        end: 2,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "enemigo1Izquierda",
      frames: this.anims.generateFrameNumbers("enemigo1Izquierda", {
        start: 0,
        end: 3,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "enemigo1Victory",
      frames: this.anims.generateFrameNumbers("enemigo1Victory", {
        start: 0,
        end: 3,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: "enemigo1Derrota",
      frames: this.anims.generateFrameNumbers("enemigo1Derrota", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    //Sprites Enemigo 2
    this.anims.create({
      key: "enemigo2Idle",
      frames: this.anims.generateFrameNumbers("enemigo2Idle", {
        start: 0,
        end: 7,
      }),
      frameRate: 5,
      repeat: -1,
    });
    this.anims.create({
      key: "enemigo2Up",
      frames: this.anims.generateFrameNumbers("enemigo2Up", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: "enemigo2Down",
      frames: this.anims.generateFrameNumbers("enemigo2Down", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "enemigo2Derecha",
      frames: this.anims.generateFrameNumbers("enemigo2Derecha", {
        start: 0,
        end: 2,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "enemigo2Izquierda",
      frames: this.anims.generateFrameNumbers("enemigo2Izquierda", {
        start: 0,
        end: 3,
      }),
      frameRate: 15,
      repeat: -1,
    });

    this.anims.create({
      key: "enemigo2Victory",
      frames: this.anims.generateFrameNumbers("enemigo2Victory", {
        start: 0,
        end: 3,
      }),
      frameRate: 15,
      repeat: -1,
    });
    this.anims.create({
      key: "enemigo2Derrota",
      frames: this.anims.generateFrameNumbers("enemigo2Derrota", {
        start: 0,
        end: 7,
      }),
      frameRate: 15,
      repeat: -1,
    });

    /*this.add.text(310, 315, "Un Jugador", 
    { 
      color: "#61b4cf", 
      fontSize: 30,
      fontFamily: "Tipografia"
    });*/

    /*const configText = 
    {
      x: 310,
      y: 315,
      text: "Un Jugador",
      style: 
      {
        fontFamily: "Tipografia",
        backgroundColor: "#61b4cf",
        fontSize: 30,
      }
    }*/

    MusicaInicio = this.sound.add("MusicaPrincipal");
    ReproducirMusica(MusicaInicio);
    var DosJugadores = this.add.image(400, 400, "DosJugadores");
    DosJugadores.setInteractive();
    DosJugadores.on(
      "pointerdown",
      function () {
        PararMusica(MusicaInicio);
        this.scene.start("Juegonivel2");
      },
      this
    );

    var StrikerGames = this.add.image(95, 580, "StrikerGames");
    StrikerGames.setInteractive();
    //StrikerGames.on("pointerdown", () => this.scene.start("Creditos"));
    StrikerGames.on(
      "pointerdown",
      function () {
        PararMusica(MusicaInicio);
        this.scene.start("creditos");
      },
      this
    );

    ReiniciarVidas();
  }
}
