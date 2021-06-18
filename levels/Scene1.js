class Scene1 extends Phaser.Scene {
  constructor() {
    super("inicio");
  }
  preload() {
    //menus
    this.load.image("Portada", "./assets/MenuInicio.png");
    this.load.image("UnJugador", "./assets/Unjugador.png");
    this.load.image("DosJugadores", "./assets/DosJugadores.png");
    this.load.image("StrikerGames", "./assets/StrikerGames.png");

    //assets levels
    //Contorno de las flechas
    this.load.image("FlechaJugador1", "./assets/FlechaJugador1.png");
    this.load.image("FlechaJugador2", "./assets/FlechaJugador2.png");
    //Flechas que reaparecen
    this.load.spritesheet("FlechasQueCaen", "./assets/FlechasQueCaen.png", {
      frameWidth: 56,
      frameHeight: 56,
    });
  }
  create() {
    this.add.image(400, 300, "Portada");

    var UnJugador = this.add.image(400, 330, "UnJugador");
    UnJugador.setInteractive();
    UnJugador.on("pointerdown", () => this.scene.start("juegonivel1"));

    var DosJugadores = this.add.image(400, 400, "DosJugadores");
    DosJugadores.setInteractive();
    DosJugadores.on("pointerdown", () => this.scene.start("Juegonivel2"));

    var StrikerGames = this.add.image(95, 580, "StrikerGames");
    StrikerGames.setInteractive();
    StrikerGames.on("pointerdown", () => this.scene.start("Creditos"));

    //Creación de Animaciones
    this.anims.create({
      key: "izquierda",
      frames: [{ key: "FlechasQueCaen", frame: 0 }],
    });
    this.anims.create({
      key: "abajo",
      frames: [{ key: "FlechasQueCaen", frame: 1 }],
    });
    this.anims.create({
      key: "arriba",
      frames: [{ key: "FlechasQueCaen", frame: 2 }],
    });
    this.anims.create({
      key: "derecha",
      frames: [{ key: "FlechasQueCaen", frame: 3 }],
    });
  }
}
