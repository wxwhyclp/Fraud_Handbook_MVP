class endScene extends Phaser.Scene {
    constructor() {
        super("endPage");
    }

    create() {

        this.endback = this.add.tileSprite(0, 0, 800, 800, "endback");
        this.endback.setOrigin(0, 0);

        this.add.text(50,100, "Yes. You got hundurds of dollars from the fraud! But.. did you know");
        this.add.text(50, 150, "Members of the criminal group guide customers to trade");
        this.add.text(50, 175, "induce customers to buy high and sell low, ");
        this.add.text(50, 200,"and pay customers through controlled accounts.");
        this.add.text(50, 225, "The Commission, spread and loss of ");
        this.add.text(50, 250,"customers in the transaction process ");
        this.add.text(50, 275, "become the illegal profits of the criminal group");

        this.add.text(50, 330, "Be a Good person, and do the CORRECT thing. ", { fontSize: '20px', fill: '#f00' });

        var btn_test1_continue = this.add.text(400, 500, 'Exit').setInteractive();
        btn_test1_continue.on('pointerdown', () => { this.scene.start('thankpage'); });
        
    }
}