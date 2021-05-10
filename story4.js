class story4Scene extends Phaser.Scene {
    constructor() {
        super("story4Page");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.add.text(85, 200, "Woaw, You Got a loooot of money! \n\nYou don't need to work for many years with these money!");

        var btn_test_collect = this.add.text(670, 550, 'Go next', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn_test_collect.on('pointerdown', () => { this.scene.start('resultPage'); });
    }
}