class lose2 extends Phaser.Scene {
    constructor() {
        super("lose2Page");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.add.text(200, 200, "Oh No!  you were caught by police");

        var btn1 = this.add.text(650, 550, 'Try again', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn1.on('pointerdown', () => { this.scene.start('tutor2'); });
    }
}