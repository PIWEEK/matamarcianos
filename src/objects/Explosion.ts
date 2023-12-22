import * as Phaser from "phaser";
import { AssetTypes } from "../assets";

export default class Explosion extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, type: AssetTypes) {
    super(scene, x, y, type);
  }
}
