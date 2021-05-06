class Scene3 extends Phaser.Scene {

    constructor() {
        super("settingPage");
    }

    create() {
        this.setting_background = this.add.tileSprite(0, 0, 800, 600, "setting_background");
        this.setting_background.setOrigin(0, 0);

        //this.background = this.add.image(0, 0, "background_sky");
        this.add.text(300, 200, "setting Page");
        this.add.text(300, 300, "change BGM:");

        this.add.text(300, 400, "change Volume:");

        var btn_back = this.add.text(100,500, 'back to menu').setInteractive();
        btn_back.on('pointerdown', () => { this.scene.start('Startmenu'); });
    }
}