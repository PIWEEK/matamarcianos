import * as Phaser from "phaser";
import Explosion from "../objects/Explosion";

export default class EffectsManager {
  private _explosions?: Phaser.Physics.Arcade.Group;

  constructor(private _scene: Phaser.Scene) {}

  get explosions() {
    if (!this._explosions)
      throw new Error("EffectsManager: explosions group not initialized");

    return this._explosions;
  }

  initialize() {
    this._explosions = this._scene.physics.add.group({
      max: 0,
      classType: Explosion,
      runChildUpdate: true,
    });
  }

  reset() {
    this._explosions?.clear(true, true);
  }
}
