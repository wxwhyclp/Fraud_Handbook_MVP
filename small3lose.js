class small3 extends Phaser.Scene {
    constructor() {
        super("sl3");
    }
    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.add.text(80, 250, "The police found you through the network and \n\nbrought you back to the police station for ideological education.");

        var btn_test_collect = this.add.text(670, 550, 'Try again', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn_test_collect.on('pointerdown', () => { this.scene.start("game1nextPage"); });
    }
}