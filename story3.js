class story3Scene extends Phaser.Scene {
    constructor() {
        super("story3Page");
    }

    create() {
        this.add.text(100, 100, "After successfully eluding the cyber police, \nwe finally reached the final step, \nusing our mobile phones to hack into the BOSS's bank account");

        var btn_test_collect = this.add.text(750, 550, 'Go Next').setInteractive();
        btn_test_collect.on('pointerdown', () => { this.scene.start('mainPage'); });
    }
}