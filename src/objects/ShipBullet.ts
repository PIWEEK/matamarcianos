import * as Phaser from "phaser";
import { AssetTypes } from "../assets";
import { AnimationTypes } from "../animations";

export default class ShipBullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, AssetTypes.ShipBullet);
    this.play(AnimationTypes.ShipBullet);
  }
}
