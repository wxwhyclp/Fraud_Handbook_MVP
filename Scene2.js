class Scene2 extends Phaser.Scene {

    constructor() {
        super("mainPage");
    }

    create() {
        this.desk = this.add.tileSprite(0, 0, 800, 800, "desk");
        this.desk.setOrigin(0, 0);
        //this.background = this.add.image(0, 0, "background_sky");
        //this.add.text(300, 200, "Main page", { fill: 0x040 })
        //this.music_1 = game.add.audio('bgm', 0.8, true);
       // this.music_1.play();   

        // this.add.text(100, 100, "$: 0");

        var btn_test_collect = this.add.sprite(340, 180,'collect_button').setInteractive();
        btn_test_collect.on('pointerdown', () => { this.scene.start('shopPage'); });

        var btn_test_target = this.add.text(610, 100, 'Target Information').setInteractive();
        btn_test_target.on('pointerdown', () => { this.scene.start('informationPage'); });

        var btn_test_result = this.add.sprite(600, 252, 'result_button').setInteractive();
        btn_test_result.on('pointerdown', () => { this.scene.start('tutor2'); });

        // var btn_test_shop = this.add.text(100, 50, 'Tutorial').setInteractive();
        // btn_test_shop.on('pointerdown', () => { this.scene.start('shopPage'); });
    }
}