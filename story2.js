class story2Scene extends Phaser.Scene {
    constructor() {
        super("story2Page");
    }

    create() {
        this.add.text(100, 100, "OMG, it turns out, is a virus sent by the Internet Police. \nThis virus is transmitted by email. It causes you to lose control of your computer");
        var btn_test_collect = this.add.text(750, 550, 'Go next').setInteractive();
        btn_test_collect.on('pointerdown', () => { this.scene.start('game1nextPage'); });
    }
}