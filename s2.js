class s2 extends Phaser.Scene {

    constructor() {
        super("s2Page");
    }
    create() {
        this.backG = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.backG.setOrigin(0, 0);
        this.add.text(80, 200, "Accidentally, you find a news is broadcasting a piece of information\n about network fraud. ");
        this.add.text(80, 280, "At this time, you remember the hacking skills you learned \nwhen you were a child, and through your understanding \nof your superiors, you also want to try to get the 'salary' \nyou think is your due through network fraud.");

        //this.add.text(200, 400, "and through your understanding of your superiors,");
        //this.add.text(250, 500, " you also want to try to get the 'salary' you think is your due through network fraud.");

        var btn_back = this.add.text(100, 500, 'Next').setInteractive();
        btn_back.on('pointerdown', () => { this.scene.start('s3Page'); });
    }
}