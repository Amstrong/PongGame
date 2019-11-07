import Bootloader from "./bootloader.js";
import Scene_play from "./scenes/scene_play.js";
import scene_first from "./scenes/scene_first.js";
const config = {
  widht: 640,
  height: 400,
  parent: "container",
  physics: {
    default: "arcade"
  },
  scene: [Bootloader, Scene_play, scene_first]
};
var game = new Phaser.Game(config);
