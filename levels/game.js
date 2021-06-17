var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 350 },
      debug: false,
    },
  },
  scene: [Scene1, Scene2, Scene3, Scene4],
};

var game = new Phaser.Game(config);

let gameGlobalOptions = {
  tiempoTotal: 0,
};
