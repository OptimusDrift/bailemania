var tiempoRestante;
var keyX;
class Scene2 extends Phaser.Scene {
  constructor() {
    super("juegonivel1");
  }

  preload() {}
  create() {
    //Inicialización del Reloj
    gameGlobalOptions.tiempoTotal = 0;

    //Arreglo de flechas a agregar en el mapa
    this.flechasGrupo = this.add.group();
    //this.flechasGrupo.maxSize = 3;

    //Flechas que estan activas en el mapa
    this.flechaMPC = this.add.group();

    //Pruebas borrar
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
    keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
  }
  update(time, delta) {
    //Reloj del juego
    gameGlobalOptions.tiempoTotal += Reloj(delta);

    //Pruebas
    if (DesactivarReloj(gameGlobalOptions.tiempoTotal, t)) {
      AgregasrFlecha(this.flechaMPC, this.flechasGrupo, this.physics, 150, 150);
      t = ActivarReloj(gameGlobalOptions.tiempoTotal, 1);
    }
    //console.log(Phaser.Input.Keyboard);
    //a;
    if (Phaser.Input.Keyboard.JustDown(keyX)) {
      EliminarFlecha(this.flechasGrupo);
    }
  }
}
//variabnles a borrar
var t;
var txt;
