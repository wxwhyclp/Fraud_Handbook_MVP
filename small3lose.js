class small3 extends Phaser.Scene {
    constructor() {
        super("sl3");
    }
    create() {
        this.add.text(100, 100, "The police found you through the network and \nbrought you back to the police station for ideological education");

        var btn_test_collect = this.add.text(750, 550, 'Try again').setInteractive();
        btn_test_collect.on('pointerdown', () => { this.scene.start("game1nextPage"); });
    }
}