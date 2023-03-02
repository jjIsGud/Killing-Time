export class Mouse extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y)
		this.scene.physics.add.existing(this)
		this.scene.add.existing(this)
		this.body.setCollideWorldBounds(true)

	}
	preUpdate(time, delta) {
		super.preUpdate(time, delta)

	}
}