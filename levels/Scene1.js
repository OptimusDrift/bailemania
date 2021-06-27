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

    //Assets Pantalla Resultados
    this.load.image("Resultados", "./assets/RESULTADOS.png");
    this.load.image("BotonContinuar", "./assets/BotonContinuar.png");
    this.load.image("BotonReintentar", "./assets/BotonReintentar.png");

    //Vidas
    this.load.image("Vida", "./assets/Vida.png");
    this.load.image("VidaPerdida", "./assets/VidaPerdida.png")

    //Pantalla Pausa
    this.load.image("EscenaPausa", "./assets/PantallaPausa.png");

    //Pantallas Juego Terminado
    this.load.image("JcJ", "./assets/JuegoTerminadoJcJ.png");
    this.load.image("JcE", "./assets/JuegoTerminadoJcE.png");
    this.load.image("VolverInicio", "./assets/BotonVolverInicio.png");

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
    this.load.image("flechaGiratoria", "./assets/flechaGiratoria.png");
    //Colliders
    this.load.image("perfecto", "./assets/perfecto.png");
  }
  create() {
    this.add.image(400, 300, "Portada");

    var UnJugador = this.add.image(400, 330, "UnJugador");
    UnJugador.setInteractive();
    UnJugador.on("pointerdown", () => this.scene.start("juegonivel1"));
    /*this.add.text(310, 315, "Un Jugador", 
    { 
      color: "#61b4cf", 
      fontSize: 30,
      fontFamily: "Tipografia"
    });*/

    /*const configText = 
    {
      x: 310,
      y: 315,
      text: "Un Jugador",
      style: 
      {
        fontFamily: "Tipografia",
        backgroundColor: "#61b4cf",
        fontSize: 30,
      }
    }*/

    var DosJugadores = this.add.image(400, 400, "DosJugadores");
    DosJugadores.setInteractive();
    DosJugadores.on("pointerdown", () => this.scene.start("Juegonivel2"));

    var StrikerGames = this.add.image(95, 580, "StrikerGames");
    StrikerGames.setInteractive();
    StrikerGames.on("pointerdown", () => this.scene.start("Creditos"));

    ReiniciarVidas();
  }
}
