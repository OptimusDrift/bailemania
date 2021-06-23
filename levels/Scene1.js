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
    this.load.image("flechaJugador1", "./assets/FlechaJugador1.png");
    this.load.image("flechaJugador2", "./assets/FlechaJugador2.png");
    //Flechas
    this.load.image("flecha", "./assets/flecha.png");
    //PowerUps
    this.load.image("bomba", "./assets/bomba.png");
    this.load.image("flechaHielo", "./assets/flechaHielo.png");
    this.load.image("flechaFuego", "./assets/flechaFuego.png");
    //Colliders
    this.load.image("perfecto", "./assets/perfecto.png");
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
  }
}
