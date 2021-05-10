class story3Scene extends Phaser.Scene {
    constructor() {
        super("story3Page");
    }

    // create() {
    //     this.add.text(100, 100, "After successfully eluding the cyber police, \nwe finally reached the final step, \nusing our mobile phones to hack into the BOSS's bank account");

    //     var btn_test_collect = this.add.text(750, 550, 'Go Next').setInteractive();
    //     btn_test_collect.on('pointerdown', () => { this.scene.start('mainPage'); });
    // }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        //this.add.text(200, 200, "Times up! You have collected " + numclue + " ");
        this.add.text(100, 250, "After successfully escape from the cyber police, \n\nwe finally reached the final step, \n\nusing your mobile phones to hack into the BOSS's bank account. ");

        //this.add.text(100, 300, "Now, go back to desk and click Phone to attack and gain money!");
        //this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        //this.minigame1_background.setOrigin(0, 0);

        var btns_1 = this.add.text(670, 550, 'Next Step', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btns_1.on('pointerdown', () => { this.scene.start('mainPage'); });
        
        //this.scene.start('mainPage');
    }
}