class small2 extends Phaser.Scene {
    constructor() {
        super("sl2");
    }
    create() {
        this.add.text(100, 100, "The virus invaded your computer, \nyou didn't get any money and even lost all your money...");


        var btn_back = this.add.text(100, 500, 'Try again').setInteractive();
        btn_back.on('pointerdown', () => { this.scene.start('level2Page'); });
    }
}