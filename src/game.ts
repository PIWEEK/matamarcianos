import * as Phaser from "phaser";

import Level from "./scenes/Level";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
  },
  scene: Level,
};

export default new Phaser.Game(config);
