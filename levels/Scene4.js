class Scene4 extends Phaser.Scene {
  constructor() {
    super("creditos");
  }

  preload() {
    this.load.image("Creditos", "./assets/EscenaCreditos.png");
    this.load.image("Regreso", "./assets/FlechaRegreso.png");
    
  }

  create() {
    this.add.image(400, 300, "Creditos");

    var Regreso = this.add.image(65, 560, "Regreso");
    Regreso.setInteractive();
    Regreso.on("pointerdown", function (pointer)
    {
      if(pointer.leftButtonReleased)
      {
        MusicaCredits.stop();
        this.scene.start("inicio");
      }
    }, this);

    //Salto = this.sound.add("Jump");
    var MusicaCredits = this.sound.add("MusicaCreditos");
    MusicaCredits.play();
  }
}
