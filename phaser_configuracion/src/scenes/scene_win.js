import Scene_play from "../scenes/scene_play.js";
class Scene_win extends Phaser.Scene {
  constructor() {
    super({ key: "Scene_win" });
  }
  preload() {
    this.infoScene = this.add.text(290, 170, "Nota: Jugador Ganador", {
      color: "#ffffff",
      fontSize: 30
    });
  }
  create() {
    var restartScene = this.add.image(250, 280, "boton").setInteractive();
    restartScene.on(
      "pointerdown",
      function(event) {
        this.scene.start("Scene_play");
      },
      this
    );
    var returnHome = this.add.image(730, 280, "boton").setInteractive();
    returnHome.on(
      "pointerdown",
      function(event) {
        this.scene.start("Scene_first");
      },
      this
    );
  }
}
export default Scene_win;
