class shop extends Phaser.Scene {

    constructor() {
        super("shopPage");
    }

    create() {
        this.desk = this.add.tileSprite(0, 0, 800, 800, "tutor");
        this.desk.setOrigin(0, 0);


        var btn_b = this.add.text(720, 550, 'Back', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn_b.on('pointerdown', () => { this.scene.start('mainPage'); });

        var btn_go = this.add.text(650, 500, 'Start Game 1', { fontSize: '20px', fill: '#f00' }).setInteractive();
        btn_go.on('pointerdown', () => { this.scene.start('minigame1Page'); });
    }
}