import * as Phaser from "phaser";
import { AssetTypes, AssetSrc } from "../assets";
import { initializeAnimations } from "../animations";

import EnemiesManager from "../managers/EnemiesManager";

export default class Level extends Phaser.Scene {
  constructor() {
    super("level");
  }

  preload() {
    // Background
    this.load.image(AssetTypes.Background, AssetSrc.Background);

    // Enemies
    this.load.spritesheet(AssetTypes.Enemy, AssetSrc.Enemy, {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    // Initialize animations
    initializeAnimations(this);

    // Set background
    this.add.tileSprite(400, 300, 800, 600, AssetTypes.Background);

    // Create enemies
    new EnemiesManager(this);
  }

  update() {}

  // restart() {
  //   if (this._enemiesManager) this._enemiesManager.reset();
  // }
}
