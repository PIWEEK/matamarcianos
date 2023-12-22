import * as Phaser from "phaser";
import Ship from "../objects/Ship";
import ShipBullet from "../objects/ShipBullet";

const ORIGIN_Y = 500;
const ORIGIN_X = 392;

export default class ShipManager {
  private _ship?: Ship;
  private _bullets?: Phaser.Physics.Arcade.Group;
  private _cursorsKeys?: Phaser.Types.Input.Keyboard.CursorKeys;
  private _fireKey?: Phaser.Input.Keyboard.Key;

  constructor(private _scene: Phaser.Scene) {}

  get ship() {
    if (!this._ship) throw new Error("ShipManager: ship not initialized");

    return this._ship;
  }

  get bullets() {
    if (!this._bullets)
      throw new Error("ShipManager: bullets group not initialized");

    return this._bullets;
  }

  get cursorsKeys() {
    if (!this._cursorsKeys)
      throw new Error("ShipManager: cursorsKeys not initialized");

    return this._cursorsKeys;
  }

  get fireKey() {
    if (!this._fireKey) throw new Error("ShipManager: fireKey not initialized");

    return this._fireKey;
  }

  initialize(
    cursorsKeys: Phaser.Types.Input.Keyboard.CursorKeys,
    fireKey: Phaser.Input.Keyboard.Key
  ) {
    this._cursorsKeys = cursorsKeys;
    this._fireKey = fireKey;

    this._ship = new Ship(this._scene, ORIGIN_X, ORIGIN_Y);

    this._bullets = this._scene.physics.add.group({
      max: 0,
      classType: ShipBullet,
      runChildUpdate: true,
    });
  }

  update() {
    if (!this._ship || !this._cursorsKeys || !this._fireKey) return;

    const shipBody = this.ship.body as Phaser.Physics.Arcade.Body;

    shipBody.setVelocity(0, 0);

    if (this.cursorsKeys.left.isDown) {
      shipBody.setVelocityX(-200);
    } else if (this.cursorsKeys.right.isDown) {
      shipBody.setVelocityX(200);
    }

    if (Phaser.Input.Keyboard.JustDown(this.fireKey)) {
      this._fireBullet();
    }
  }

  reset() {
    this.bullets.clear(true, true);
    this.ship.destroy();
    this.initialize(this.cursorsKeys, this.fireKey);
  }

  private _fireBullet() {
    const bullet: ShipBullet = this.bullets.get();

    if (bullet) {
      bullet.setPosition(this.ship.x, this.ship.y);
      this._scene.physics.moveTo(bullet, this.ship.x, -1000, 120);
    }
  }
}
