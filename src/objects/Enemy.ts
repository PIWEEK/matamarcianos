import * as Phaser from "phaser";
import { AssetTypes } from "../assets";

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, AssetTypes.Enemy);
  }
}
