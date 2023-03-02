export class Tower extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'shot')
		this.scene = scene
		//this.target = target
		this.scene.physics.add.existing(this)
		this.scene.add.existing(this)
		this.bs = 1000
			this.anims.create({
			key: "shot",
			frames: "ber",
			framerate: 100,
			repeat: -1,
			duration: 500

		})
		this.anims.play("pew")
		this.nextBullet = 0
		
	}
	preUpdate(time, delta) {
		this.nextBullet -= delta
		if (this.nextBullet <= 0) {
			this.nextBullet = this.bs
			this.scene.bullets.createBullet(this, 1)
			this.fillColor = 0xed7041

		}
	}
}

