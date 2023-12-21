import * as Phaser from "phaser";
import { AssetTypes } from "../assets";
import { AnimationTypes } from "../animations";

export default class EnemyBullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, AssetTypes.EnemyBullet);
    this.play(AnimationTypes.EnemyBullet);
  }
}
