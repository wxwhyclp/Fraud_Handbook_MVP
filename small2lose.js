class small2 extends Phaser.Scene {
    constructor() {
        super("sl2");
    }
    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.add.text(80, 250, "The virus invaded your computer, \n\nyou didn't get any money and even lost all your money...");


        var btn_back = this.add.text(670, 550, 'Try again', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn_back.on('pointerdown', () => { this.scene.start('level2Page'); });
    }
}