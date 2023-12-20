import * as Phaser from "phaser";
import { AssetTypes, AssetSrc } from "../assets";
import { initializeAnimations } from "../animations";

import EnemiesManager from "../managers/EnemiesManager";
import ShipManager from "../managers/ShipManager";

export default class Level extends Phaser.Scene {
  private _enemiesManager: EnemiesManager;
  private _shipManager: ShipManager;

  constructor() {
    super("level");

    this._enemiesManager = new EnemiesManager(this);
    this._shipManager = new ShipManager(this);
  }

  preload() {
    // Background
    this.load.image(AssetTypes.Background, AssetSrc.Background);

    // Enemies
    this.load.spritesheet(AssetTypes.EnemyAlan, AssetSrc.EnemyAlan, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet(AssetTypes.EnemyBonbon, AssetSrc.EnemyBonbon, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet(AssetTypes.EnemyLips, AssetSrc.EnemyLips, {
      frameWidth: 16,
      frameHeight: 16,
    });

    // Ship
    this.load.spritesheet(AssetTypes.Ship, AssetSrc.Ship, {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    // animations
    initializeAnimations(this);
    // background
    this.add.tileSprite(400, 300, 800, 600, AssetTypes.Background);
    // enemies
    this._enemiesManager.initialize();
    // ship
    this._shipManager.initialize();
  }

  update() {}

  restart() {
    this._enemiesManager.reset();
    this._shipManager.reset();
  }
}
