class story2Scene extends Phaser.Scene {
    constructor() {
        super("story2Page");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.add.text(80, 250, "OMG, it turns out, is a virus sent by the Internet Police!!! \n\nThis virus is transmitted by an email. It causes you \n\nto lose control of your computer!");
        
        var btn_test_collect = this.add.text(690, 550, 'Go next', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn_test_collect.on('pointerdown', () => { this.scene.start('game1nextPage'); });
    }
}