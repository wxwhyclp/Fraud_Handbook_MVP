class loseScene extends Phaser.Scene {
    constructor() {
        super("losePage");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.add.text(200, 200, "Oh No, you were trapped! \n\nTry to avoid them while getting more clues.");


        var btn1 = this.add.text(300, 450, 'Try again', { fontSize: '20px', fill: '#f00' }).setInteractive();
        btn1.on('pointerdown', () => { this.scene.start('shopPage'); });
    }
}
