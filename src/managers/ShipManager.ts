import * as Phaser from "phaser";
import Ship from "../objects/Ship";

const ORIGIN_Y = 500;
const ORIGIN_X = 392;

export default class ShipManager {
  private _ship?: Phaser.Physics.Arcade.Sprite;
  private _cursorsKeys?: Phaser.Types.Input.Keyboard.CursorKeys;
  private _fireKey?: Phaser.Input.Keyboard.Key;

  constructor(private _scene: Phaser.Scene) {}

  public get ship() {
    if (!this._ship) throw new Error("ShipManager: ship not initialized");

    return this._ship;
  }

  public get cursorsKeys() {
    if (!this._cursorsKeys)
      throw new Error("ShipManager: cursorsKeys not initialized");

    return this._cursorsKeys;
  }

  public get fireKey() {
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

    // if (this.fireKey.isDown) {
    //   this._fireBullet();
    // }
  }

  reset() {
    this.ship.setPosition(ORIGIN_X, ORIGIN_Y);
  }
}
