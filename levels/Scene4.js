class Scene4 extends Phaser.Scene {
  constructor() {
    super("Creditos");
  }

  preload() {
    this.load.image("Creditos", "./assets/EscenaCreditos.png");
    this.load.image("Regreso", "./assets/FlechaRegreso.png");
  }

  create() {
    var Creditos = this.add.image(400, 300, "Creditos");

    var Regreso = this.add.image(65, 560, "Regreso");
    Regreso.setInteractive();
    Regreso.on("pointerdown", () => this.scene.start("inicio"));
  }
}
