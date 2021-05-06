class g1winScene extends Phaser.Scene {
    constructor() {
        super("game1Success");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        //this.add.text(200, 200, "Times up! You have collected " + numclue + " ");
        this.add.text(100, 200, "Well Done! You Got enough clues and not get trapped. ", { fontSize: '20px', fill: '#f00' });

        this.add.text(100, 300, "Now, go back to desk and click Phone to attack and gain money!");
        //this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        //this.minigame1_background.setOrigin(0, 0);

        var btns_1 = this.add.text(350, 500, 'Next Step').setInteractive();
        btns_1.on('pointerdown', () => { this.scene.start('mainPage'); });
        
        //this.scene.start('mainPage');
    }

    
}
