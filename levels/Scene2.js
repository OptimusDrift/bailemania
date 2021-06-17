var tiempoRestante;
var txt;
class Scene2 extends Phaser.Scene {
  constructor() {
    super("juegonivel1");
  }

  preload() {}
  create() {
    //Inicialización del Reloj
    gameGlobalOptions.tiempoTotal = 0;
    //Arreglo de flechas a agregar en el mapa
    this.flechasGrupo = this.add.group({
      removeCallback: function (flecha) {
        flecha.scene.flechaMPC.add(flecha);
      },
    });
    //Flechas en el mapa
    this.flechaMPC = this.add.group({
      removeCallback: function (flecha) {
        flecha.scene.flechasGrupo.add(flecha);
      },
    });
    //Pruebas
    AgregasrFlecha(this.flechaMPC, this.flechasGrupo, this.physics, 100, 100);
    AgregasrFlecha(this.flechaMPC, this.flechasGrupo, this.physics, 150, 150);
    txt = this.add.text(300, 300, "0", {
      fontFamily: "Zapf Chancery, cursive",
      fontSize: "32px",
      color: "#FFFFFF",
      fill: "#000",
    });
    txt.setVisible(true);
    t = 0;
  }
  update(time, delta) {
    gameGlobalOptions.tiempoTotal += Reloj(delta);
    console.log(DesactivarReloj(gameGlobalOptions.tiempoTotal, t));
    if (DesactivarReloj(gameGlobalOptions.tiempoTotal, t)) {
      AgregasrFlecha(this.flechaMPC, this.flechasGrupo, this.physics, 150, 150);
      t = ActivarReloj(gameGlobalOptions.tiempoTotal, 1);
    }
  }
}
var t;
