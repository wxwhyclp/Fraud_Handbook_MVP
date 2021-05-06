class resultScene extends Phaser.Scene {
    constructor() {
        super("resultPage");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.add.text(50, 200, "After fighting with the firewall, you finally broke through \n\nthe defense line of the boss's mobile phone and succeeded in \n\ngetting your salary and extra money. But are you doing the right thing?")
        //this.add.text(50, 300, "of the boss's mobile phone and succeeded in getting your salary and extra money.");
        //this.add.text(50, 400, "But are you doing the right thing?");

        var btn_test_end = this.add.text(250, 550, 'No!').setInteractive();
        btn_test_end.on('pointerdown', () => { this.scene.start('endPage'); });

        var btn_test_end = this.add.text(450, 550, 'Still No!').setInteractive();
        btn_test_end.on('pointerdown', () => { this.scene.start('endPage'); });
    }
}