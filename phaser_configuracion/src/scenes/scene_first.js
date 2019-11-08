class scene_first extends Phaser.Scene {
  constructor() {
    super({ key: "Scene_first" });
  }
  preload() {
    this.add.image(530, 220, "linea1");
    this.ScoreRight = this.add.text(290, 170, "Esperando conexión...", {
      color: "#ffffff",
      fontSize: 40
    });

    //Dimensiones de pantalla
    let center_width = this.sys.game.config.width / 2;
    let center_height = this.sys.game.config.height / 2;

    //Especificaciones de la Bola
    this.physics.world.setBoundsCollision(true, true, true, true);
    this.ball = this.physics.add.image(center_width, center_height, "ball");
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);
    this.ball.setVelocityY(Phaser.Math.Between(-1000, 1000));
    this.ball.setVelocityX(Phaser.Math.Between(-1000, 1000));
  }

  create() {
    // var music = this.sound.add("homeSound");
    // music.play();
    this.input.keyboard.on("keydown-ONE", () => {
      this.scene.start("Scene_play");
    });
  }

  update() {}
}
export default scene_first;
