class information extends Phaser.Scene {

    constructor() {
        super("informationPage");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.minigame1_background.setOrigin(0, 0);

        this.character = this.add.image(600, 200, "character");

        var btn1 = this.add.text(650, 550, 'Back', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn1.on('pointerdown', () => { this.scene.start('mainPage'); });

        this.add.text(100, 200, "Target: Your Boss");
        this.add.text(100, 300, "Age: 46");
        this.add.text(100, 400, "Like: Basketball, Twitter and Netflix");
        this.add.text(50, 450, "Our mission is use Computer to collect the clues we need,  ")
        this.add.text(50, 475, "Deception also takes time, so we'll test your reaction, ")
        this.add.text(50, 500, "and when you've successfully obtained the clue, ")
        this.add.text(50, 525, "use your phone to piece together the clue and post your masterpiece! ")

    }






}