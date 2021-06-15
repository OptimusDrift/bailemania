class Scene1 extends Phaser.Scene {
  constructor() {
    super("inicio");
  }
  preload() 
  {
    this.load.image("Portada", "./assets/MenuInicio.png");
    this.load.image("UnJugador", "./assets/Unjugador.png");
    this.load.image("DosJugadores", "./assets/DosJugadores.png");
    this.load.image("StrikerGames", "./assets/StrikerGames.png");
  }
  create() 
  {
    var Portada = this.add.image(400, 300, "Portada")

    var UnJugador = this.add.image(400, 330, "UnJugador");
    UnJugador.setInteractive()
    UnJugador.on("pointerdown", () => this.scene.start("Juegonivel1") );

    var DosJugadores = this.add.image(400, 400, "DosJugadores");
    DosJugadores.setInteractive()
    DosJugadores.on("pointerdown", () => this.scene.start("Juegonivel2") );

    var StrikerGames = this.add.image(95, 580, "StrikerGames");
    StrikerGames.setInteractive()
    StrikerGames.on("pointerdown", () => this.scene.start("Creditos") );

  }
  
}
