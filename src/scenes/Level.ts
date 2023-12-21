import * as Phaser from "phaser";
import { AssetTypes, AssetSrc } from "../assets";
import { initializeAnimations } from "../animations";

import BackgroundManager from "../managers/BackgroundManager";
import EnemiesManager from "../managers/EnemiesManager";
import ShipManager from "../managers/ShipManager";

export default class Level extends Phaser.Scene {
  private _backgroundManager: BackgroundManager;
  private enemiesManager: EnemiesManager;
  private shipManager: ShipManager;

  private _cursorsKeys?: Phaser.Types.Input.Keyboard.CursorKeys;
  private _fireKey?: Phaser.Input.Keyboard.Key;

  constructor() {
    super("level");

    this._backgroundManager = new BackgroundManager(this);

    this.enemiesManager = new EnemiesManager(this);
    this.shipManager = new ShipManager(this);
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
    this.load.spritesheet(AssetTypes.EnemyBullet, AssetSrc.EnemyBullet, {
      frameWidth: 16,
      frameHeight: 16,
    });

    // Ship
    this.load.spritesheet(AssetTypes.Ship, AssetSrc.Ship, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.spritesheet(AssetTypes.ShipBullet, AssetSrc.ShipBullet, {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    this._cursorsKeys = this.input.keyboard!.createCursorKeys();
    this._fireKey = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    initializeAnimations(this);
    this._backgroundManager.initialize();
    this.enemiesManager.initialize();
    this.shipManager.initialize(this._cursorsKeys, this._fireKey);
  }

  update() {
    this._backgroundManager.update();
    this.enemiesManager.update();
    this.shipManager.update();
  }

  restart() {
    this.enemiesManager.reset();
    this.shipManager.reset();
  }
}
