var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 800,
    height: 600,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6],
};

var game = new Phaser.Game(config);

let gameGlobalOptions = {
  tiempoTotal: 0,
  vidas: 0,
  puntajeTotal: 0,
};
