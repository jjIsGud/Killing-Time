import { Enemy } from '../objects/Enemy.js'
import { Tower } from '../objects/Tower.js'
import { BulletGroup } from '../objects/Bullet.js'
export class MainLevel extends Phaser.Scene {
	constructor() {
		super({ key: "main-level" });
	}
	preload() {
		console.log("loading MainLevel");

	}

	create() {
		this.nextEnemy = 5000
		this.path = new Phaser.Curves.Path(700, 110)
		this.path.lineTo(100, 110)
		this.enemies = []
		this.bullets = new BulletGroup(this)
		console.log(this.bullets)

		this.e = new Enemy(this, 700, 110)
		new Tower(this, 50, 110)

		this.e.setEnemyPath(this.path)
		this.enemies.push(this.e)
		this.createColliders();
		//this.enemies.push(new Enemy(this, 0, 0).play('ber'))
		if
		this.physics.add.collider(this.bullets, this.enemies, (b, e) => { b.destroy() })
	}

	update(timestamp, delta) {
		this.nextEnemy -= delta;
		if (this.nextEnemy < 0) {
			const e = new Enemy(this, 700, 110);
			e.setEnemyPath(this.path)
			this.enemies.push(e)
			this.nextEnemy = 5000;

		}
	}


	createColliders() {

	}
}
