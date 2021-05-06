class story1Scene extends Phaser.Scene {
    constructor() {
        super("story1Page");
    }

    create() {

        this.add.text(100, 100, "You successfully collected the BOSS's favorite, \nknow his hobby, but at this time, your computer suddenly infected with a virus,\n  avoid the virus, and collected information will be stolen!");

        var btn_test_collect = this.add.text(750, 550, 'Go next').setInteractive();
        btn_test_collect.on('pointerdown', () => { this.scene.start('level2Page'); });
    }
}