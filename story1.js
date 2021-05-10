class story1Scene extends Phaser.Scene {
    constructor() {
        super("story1Page");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.add.text(80, 250, "You successfully collected the BOSS's information and knew his secret, \n\nbut suddenly, your computer is getting attacked by someone,  \n\navoid the virus, and get more clues!");

        var btn_test_collect = this.add.text(690, 550, 'Go next', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn_test_collect.on('pointerdown', () => { this.scene.start('level2Page'); });
    }
}