var resultado;
var btnMenuPrincipal;
var txtResultadoTotal;
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
    txtResultadoTotal = this.add.text(
      450,
      300,
      gameGlobalOptions.puntajeTotal,
      {
        fontSize: 64,
      }
    );
    txtResultadoTotal.setDepth(11);
  }
  update(time, delta) {}
}
