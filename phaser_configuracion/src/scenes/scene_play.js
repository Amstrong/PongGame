import Palas from "../gameObjects/palas.js";
class Scene_play extends Phaser.Scene {
  constructor() {
    super({ key: "Scene_play" });
  }
  create() {
    let center_width = this.sys.game.config.width / 2;
    let center_height = this.sys.game.config.height / 2;
    let screen = this.sys.game.config.width;
    //Separador
    this.add.image(center_width, center_height, "separador");
    //Palas
    this.izquierda = new Palas(this, 30, center_height, "izquierda");
    this.derecha = new Palas(this, screen - 30, center_height, "derecha");

    //Bola
    this.physics.world.setBoundsCollision(true, true, true, true);
    this.ball = this.physics.add.image(center_width, center_height, "ball");
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);
    this.ball.setVelocityX(-180);

    //Fisicas
    this.physics.add.collider(
      this.ball,
      this.izquierda,
      this.chocaPala,
      null,
      this
    );
    this.physics.add.collider(
      this.ball,
      this.derecha,
      this.chocaPala,
      null,
      this
    );

    //Controles
    //Pala derecha
    this.cursor = this.input.keyboard.createCursorKeys();
    //Pala izquierda
    this.cursor_W = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.W
    );
    this.cursor_S = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );
  }
  update() {
    //Control de las palas
    //Pala derecha
    if (this.cursor.down.isDown) {
      this.derecha.body.setVelocityY(160);
    } else if (this.cursor.up.isDown) {
      this.derecha.body.setVelocityY(-160);
    } else {
      this.derecha.body.setVelocityY(0);
    }
    //Pala izquierda
    if (this.cursor_S.isDown) {
      this.izquierda.body.setVelocityY(160);
    } else if (this.cursor_W.isDown) {
      this.izquierda.body.setVelocityY(-160);
    } else {
      this.izquierda.body.setVelocity(0);
    }
  }

  // Esto en el ejemplo planteado, es para cuando la bola salga del container
  // se vuelva a poner en el centro, es bueno tenerla de referencia pero no necesario
  // en nuestro caso.
  // update() {
  //   if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
  //     this.ball.setPosition(this.sys.game.config.width/2,this.sys.game.config.width/2);
  //   }
  // }
  chocaPala() {
    this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
  }
}
export default Scene_play;
