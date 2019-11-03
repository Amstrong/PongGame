const config = {
  widht: 320 * 2,
  height: 180 * 2,
  parent: "container",
  type: Phaser.AUTO,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        //y: 500
      }
    }
  }
};

var game = new Phaser.Game(config);
function preload() {
  this.load.image("bird", "./assets/bird.png");
}
function create() {
  this.pajaro = this.physics.add.image(100, 50, "bird");
  // this.input.keyboard.on("keydown_RIGHT", () => {
  //   this.pajaro.setAcceleration(100, 0);
  // });
  // this.input.keyboard.on("keyup_RIGHT", () => {
  //   this.pajaro.setAcceleration(0, 0);
  //   this.pajaro.setVelocity(0);
  // });
  this.cursor = this.input.keyboard.createCursorKeys();
}
function update(time, delta) {
  if (this.cursor.right.isDown) {
    this.pajaro.x++;
  }
}
