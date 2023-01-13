export class StartMenu extends Phaser.Scene {
	constructor() {
		super({ key: "start-menu", active: true });
	}

	preload() {
		this.load.image("title", "assets/Title.png")
				this.load.spritesheet("gfc", "assets/gfc.png", { frameWidth: 64, frameHeight: 64 })
					this.load.spritesheet("glock", "assets/glock.png", { frameWidth: 64, frameHeight: 64 })
					this.load.spritesheet("lcd", "assets/LCD.png", { frameWidth: 64, frameHeight: 64 })
					this.load.spritesheet("shot", "assets/Shotty.png", { frameWidth: 64, frameHeight: 32 })

	}

	create() {
		this.title = this.add.image(400,0,'title')
		this.kbStart = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
		this.physics.add.existing(this.title)
		this.title.body.collideWorldBounds = true
		this.title.body.setBounce(0.5)
		this.title.body.setAngularVelocity(0)
				this.anims.create({
			key: "Idle",
			frames: this.anims.generateFrameNumbers("gfc", { start: 0, end: 12, first: 0 }),
			framerate: 0,
			repeat: -1,
			duration: 2000
		})
				this.anims.create({
			key: "sped",
			frames: this.anims.generateFrameNumbers("glock", { start: 0, end: 3, first: 0 }),
			framerate: 0,
			repeat: -1,
			duration: 500
		})
				this.anims.create({
			key: "lld",
			frames: this.anims.generateFrameNumbers("lcd", { start: 0, end: 3, first: 0 }),
			framerate: 0,
			repeat: -1,
			duration: 500
		})
						this.anims.create({
			key: "pew",
			frames: this.anims.generateFrameNumbers("shot", { start: 0, end: 7, first: 0 }),
			framerate: 0,
			repeat: -1,
			duration: 500
		})
		this.add.sprite(150, 100, "gfc").play("Idle")
		this.add.sprite(300, 100, "clock").play("sped")
		this.add.sprite(450, 100, "lcd").play("lld")
		this.add.sprite(600, 100, "shot").play("pew")
	}
	update() {
			if (this.kbStart.isDown) {
				this.add.text(100, 200, 'Loading...')
				this.scene.start('main-level')
			}

	}
}