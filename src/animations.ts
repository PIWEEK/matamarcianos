import { AssetTypes } from "./assets";

export enum AnimationTypes {
  Enemy = "animation-enemy",
}

export function initializeAnimations(scene: Phaser.Scene) {
  scene.anims.create({
    key: AnimationTypes.Enemy,
    frames: scene.anims.generateFrameNumbers(AssetTypes.Enemy, {
      start: 0,
      end: 5,
    }),
    frameRate: 10,
    repeat: -1,
  });
}
