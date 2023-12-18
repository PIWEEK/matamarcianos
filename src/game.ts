import * as Phaser from "phaser";

import Demo from "./scenes/Demo";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [Demo],
};

export default new Phaser.Game(config);
