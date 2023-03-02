 export class Enemy extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, target) {
		super(scene, x, y, 'bear')
		this.scene = scene
		this.target = target
		this.scene.physics.add.existing(this)
		this.scene.add.existing(this)
		this.body.collideWorldBounds = true
		this.timeAlive = 0
		this.anims.create({
			key: "bear",
			frames: "ber",
			framerate: 100,
			repeat: -1,
			duration: 500

		})
		this.anims.play("ber")
	}
	setEnemyPath(p) {
		this.path = p
	}
	preUpdate(time, delta) {
		super.preUpdate(time, delta)
		this.timeAlive += delta * 0.0001
		if (this.timeAlive > 1) {
			this.destroy()

		} else {
			const point = this.path.getPoint(this.timeAlive)
	//		console.log(point, this.timeAlive)
			this.setPosition(point.x, point.y)
		}
	}

}
export class EnemyAlt extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, target) {
		super(scene, x, y, 'bear')
		this.scene = scene
		this.target = target
		this.scene.physics.add.existing(this)
		this.scene.add.existing(this)
		this.body.collideWorldBounds = true
		this.timeAlive = 0
		this.anims.create({
			key: "bear",
			frames: "ber",
			framerate: 100,
			repeat: -1,
			duration: 500

		})
		this.anims.play("ber")
	}
	setEnemyPath(p) {
		this.path = p
	}
	preUpdate(time, delta) {
		super.preUpdate(time, delta)
		this.timeAlive += delta * 0.0001
		if (this.timeAlive > 1) {
			this.destroy()

		} else {
			const point = this.path.getPoint(this.timeAlive)
	//		console.log(point, this.timeAlive)
			this.setPosition(point.x, point.y)
		}
	}

}
