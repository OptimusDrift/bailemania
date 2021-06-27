var papa;
class Scene4 extends Phaser.Scene {
  constructor() {
    super("creditos");
  }

  preload() {}

  create() {
    this.add.image(400, 300, "creditos");
    papa = [];
    papa[0] = this.physics.add.sprite(100, 280, "goldPapa");
    papa[1] = this.physics.add.sprite(300, 100, "goldPapa");
    papa[2] = this.physics.add.sprite(400, 480, "goldPapa");
    papa.forEach((p) => {
      p.setVisible(false);
    });
    this.btn = this.physics.add
      .sprite(400, 470, "empresario")
      .setScale(3)
      .setInteractive();
    this.btn1 = this.physics.add
      .sprite(400, 320, "empresario")
      .setScale(3)
      .setInteractive();
    this.btn2 = this.physics.add
      .sprite(400, 195, "empresario")
      .setScale(3)
      .setInteractive();
    this.btn.on("pointerdown", function (pointer) {
      papa[0].setVisible(true);
    });
    this.btn1.on("pointerdown", function (pointer) {
      papa[1].setVisible(true);
    });
    this.btn2.on("pointerdown", function (pointer) {
      papa[2].setVisible(true);
    });

    var Regreso = this.add.image(65, 560, "Regreso");
    Regreso.setInteractive();
    Regreso.on(
      "pointerdown",
      function (pointer) {
        if (pointer.leftButtonReleased) {
          MusicaCredits.stop();
          this.scene.start("inicio");
        }
      },
      this
    );

    //Salto = this.sound.add("Jump");
    var MusicaCredits = this.sound.add("MusicaCreditos");
    MusicaCredits.play();
  }
}
