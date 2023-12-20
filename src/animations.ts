import { AssetTypes } from "./assets";

export enum AnimationTypes {
  EnemyAlan = "animation-enemy-alan",
  EnemyBonbon = "animation-enemy-bonbon",
  EnemyLips = "animation-enemy-lips",
}

export function initializeAnimations(scene: Phaser.Scene) {
  scene.anims.create({
    key: AnimationTypes.EnemyAlan,
    frames: scene.anims.generateFrameNumbers(AssetTypes.EnemyAlan, {
      start: 0,
      end: 5,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: AnimationTypes.EnemyBonbon,
    frames: scene.anims.generateFrameNumbers(AssetTypes.EnemyBonbon, {
      start: 0,
      end: 5,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: AnimationTypes.EnemyLips,
    frames: scene.anims.generateFrameNumbers(AssetTypes.EnemyLips, {
      start: 0,
      end: 5,
    }),
    frameRate: 10,
    repeat: -1,
  });
}
