class thankPage extends Phaser.Scene {
    constructor() {
        super("thankpage");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.add.text(200, 200, "Game Developer:");
        this.add.text(150, 300, "Yunfan Zhou, Haoyu Wang, Jiabao Guo, Haosen Wang");



    }
}