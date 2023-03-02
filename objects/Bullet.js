export class BulletGroup extends Phaser.Physics.Arcade.Group {
	constructor(scene) {
		super(scene.physics.world, scene)
		this.scene = scene
		this.immovable = true
		this.collideWorldBounds = true
		this.runChildUpdate = false
		
		
	}
	createBullet(shooter, damage) {
		this.add(new Bullet(this.scene, shooter, damage))
	}
}
class Bullet extends Phaser.GameObjects.Ellipse {
	constructor(scene, shooter, color, damage) {
		super(scene, shooter.x, shooter.y, 5, 5, 0xf0f0f0)
		this.sceene = scene
		this.shooter = shooter
		this.damage = damage
		this.name = Date.now() + '' + Math.random()
		this.scene.add.existing(this)
		this.scene.physics.add.existing(this)
	}
	preUpdate() {
		if (!this.first) {
			this.scene.physics.velocityFromRotation(this.shooter.rotation, 750, this.body.velocity)
			this.first = true
		}
	}
}