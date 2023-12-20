import * as Phaser from "phaser";
// import { AnimationTypes } from "../animations";
import Ship from "../objects/Ship";

const ORIGIN_Y = 500;
const ORIGIN_X = 392;

export default class ShipManager {
  private _ship?: Phaser.Physics.Arcade.Sprite;

  constructor(private _scene: Phaser.Scene) {}

  get ship() {
    if (!this._ship) throw new Error("ShipManager: ship not initialized");

    return this._ship;
  }

  initialize() {
    this._ship = new Ship(this._scene, ORIGIN_X, ORIGIN_Y);
    this._scene.add.existing(this.ship);
  }

  reset() {
    this.ship.setPosition(ORIGIN_X, ORIGIN_Y);
  }
}
