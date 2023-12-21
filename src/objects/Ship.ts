import * as Phaser from "phaser";
import { AssetTypes } from "../assets";

export default class Ship extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, AssetTypes.Ship, 1);

    // add the ship to the scene physics
    scene.physics.add.sys.displayList.add(this);
    scene.physics.add.sys.updateList.add(this);

    // create a dynamic body for it
    scene.physics.add.existing(this);

    // set screen limits
    this.setCollideWorldBounds(true);
  }
}
