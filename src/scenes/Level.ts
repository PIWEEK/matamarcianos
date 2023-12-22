import * as Phaser from "phaser";
import { initializeAssets } from "../assets";
import { initializeAnimations } from "../animations";

import BackgroundManager from "../managers/BackgroundManager";
import EffectsManager from "../managers/EffectsManager";
import EnemiesManager from "../managers/EnemiesManager";
import ShipManager from "../managers/ShipManager";

import Explosion from "../objects/Explosion";
import Enemy from "../objects/Enemy";
import EnemyBullet from "../objects/EnemyBullet";
import Ship from "../objects/Ship";
import ShipBullet from "../objects/ShipBullet";

export default class Level extends Phaser.Scene {
  private _backgroundManager: BackgroundManager;
  private _effectsManager: EffectsManager;
  private _enemiesManager: EnemiesManager;
  private _shipManager: ShipManager;

  private _cursorsKeys?: Phaser.Types.Input.Keyboard.CursorKeys;
  private _fireKey?: Phaser.Input.Keyboard.Key;
  private _resetKey?: Phaser.Input.Keyboard.Key;

  constructor() {
    super("level");

    this._backgroundManager = new BackgroundManager(this);
    this._effectsManager = new EffectsManager(this);
    this._enemiesManager = new EnemiesManager(this);
    this._shipManager = new ShipManager(this);
  }

  preload() {
    initializeAssets(this);
  }

  create() {
    this._cursorsKeys = this.input.keyboard!.createCursorKeys();
    this._fireKey = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this._resetKey = this.input.keyboard!.addKey(
      Phaser.Input.Keyboard.KeyCodes.R
    );

    initializeAnimations(this);
    this._backgroundManager.initialize();
    this._effectsManager.initialize();
    this._enemiesManager.initialize();
    this._shipManager.initialize(this._cursorsKeys, this._fireKey);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this._resetKey!)) {
      this.restart();
      return;
    }

    this._backgroundManager.update();
    this._enemiesManager.update();
    this._shipManager.update();

    // Colisions with ship bullets
    this.physics.overlap(
      this._shipManager.bullets,
      this._enemiesManager.enemies,
      this._shipBulletHitEnemy,
      undefined,
      this
    );

    // Colisions with enemies bullets
    this.physics.overlap(
      this._enemiesManager.bullets,
      this._shipManager.ship,
      this._enemyBulletHitShip,
      undefined,
      this
    );
  }

  restart() {
    this._enemiesManager.reset();
    this._shipManager.reset();
  }

  private _enemyBulletHitShip(
    shipGO:
      | Phaser.Types.Physics.Arcade.GameObjectWithBody
      | Phaser.Tilemaps.Tile,
    bulletGO:
      | Phaser.Types.Physics.Arcade.GameObjectWithBody
      | Phaser.Tilemaps.Tile
  ) {
    const bullet = bulletGO as EnemyBullet;
    const ship = shipGO as Ship;
    const explosion: Explosion = this._effectsManager.explosions.get();
    bullet.destroy();
    ship.kill(explosion);
    this.restart();
  }

  private _shipBulletHitEnemy(
    bulletsGO:
      | Phaser.Types.Physics.Arcade.GameObjectWithBody
      | Phaser.Tilemaps.Tile,
    enemyGO:
      | Phaser.Types.Physics.Arcade.GameObjectWithBody
      | Phaser.Tilemaps.Tile
  ) {
    const bullet = bulletsGO as ShipBullet;
    const enemy = enemyGO as Enemy;
    const explosion: Explosion = this._effectsManager.explosions.get();

    bullet.destroy();
    enemy.kill(explosion);

    if (this._enemiesManager.enemies.countActive() === 0) {
      this.restart();
    }
  }
}
