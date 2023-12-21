const ASSET_SRC_DIR = "assets";

export enum AssetTypes {
  Background = "asset-background",
  EnemyAlan = "asset-enemy-alan",
  EnemyBonbon = "asset-enemy-bonbon",
  EnemyLips = "asset-enemy-lips",
  EnemyBullet = "asset-enemy-bullet",
  Ship = "asset-ship",
  ShipBullet = "asset-ship-bullet",
}

export enum AssetSrc {
  Background = `${ASSET_SRC_DIR}/minipixelpack3/space_bg.png`,
  EnemyAlan = `${ASSET_SRC_DIR}/minipixelpack3/enemies/alan_sp.png`,
  EnemyBonbon = `${ASSET_SRC_DIR}/minipixelpack3/enemies/bonbon_sp.png`,
  EnemyLips = `${ASSET_SRC_DIR}/minipixelpack3/enemies/lips_sp.png`,
  EnemyBullet = `${ASSET_SRC_DIR}/minipixelpack3/enemies/bullet_sp.png`,
  Ship = `${ASSET_SRC_DIR}/minipixelpack3/ship/ship_sp.png`,
  ShipBullet = `${ASSET_SRC_DIR}/minipixelpack3/ship/bullet_sp.png`,
}
