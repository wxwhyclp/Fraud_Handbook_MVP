class loseScene extends Phaser.Scene {
    constructor() {
        super("losePage");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.add.text(200, 200, "You lost , get the virus through the progress");


        var btn1 = this.add.text(200, 500, 'Try again').setInteractive();
        btn1.on('pointerdown', () => { this.scene.start('shopPage'); });
    }
}
