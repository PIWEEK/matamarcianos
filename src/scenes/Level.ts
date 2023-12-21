import * as Phaser from "phaser";
import { AssetTypes, AssetSrc } from "../assets";
import { initializeAnimations } from "../animations";

import BackgroundManager from "../managers/BackgroundManager";
import EnemiesManager from "../managers/EnemiesManager";
import ShipManager from "../managers/ShipManager";

export default class Level extends Phaser.Scene {
  private _backgroundManager: BackgroundManager;
  private _enemiesManager: EnemiesManager;
  private _shipManager: ShipManager;

  private _cursorsKeys?: Phaser.Types.Input.Keyboard.CursorKeys;
  private _fireKey?: Phaser.Input.Keyboard.Key;

  constructor() {
    super("level");

    this._backgroundManager = new BackgroundManager(this);
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
    this._cursorsKeys = this.input.keyboard!.createCursorKeys();
    this._fireKey = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    initializeAnimations(this);
    this._backgroundManager.initialize();
    this._enemiesManager.initialize();
    this._shipManager.initialize(this._cursorsKeys, this._fireKey);
  }

  update() {
    this._backgroundManager.update();
    this._shipManager.update();
  }

  restart() {
    this._enemiesManager.reset();
    this._shipManager.reset();
  }
}
