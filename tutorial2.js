class tutorial2 extends Phaser.Scene {

    constructor() {
        super("tutor2");
    }

    create() {
        this.desk = this.add.tileSprite(0, 0, 800, 800, "tutor");
        this.desk.setOrigin(0, 0);


        var btn_b = this.add.text(750, 550, 'Back').setInteractive();
        btn_b.on('pointerdown', () => { this.scene.start('mainPage'); });

        var btn_go = this.add.text(680, 500, 'Start Game 2').setInteractive();
        btn_go.on('pointerdown', () => { this.scene.start('minigame2Page'); });
    }
}