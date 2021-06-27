var resultado;
var btnMenuPrincipal;
class Scene6 extends Phaser.Scene {
  constructor() {
    super("resultados");
  }

  preload() {}
  create() {
    resultado = this.add.image(400, 300, "JcE");
    resultado.setDepth(9);

    btnMenuPrincipal = this.add.image(400, 480, "VolverInicio");
    btnMenuPrincipal.setDepth(10);
    btnMenuPrincipal.setInteractive();
    btnMenuPrincipal.on("pointerdown", () => this.scene.start("inicio"));
  }
  update(time, delta) {}
}
