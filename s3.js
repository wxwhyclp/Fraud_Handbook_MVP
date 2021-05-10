class s3 extends Phaser.Scene {

    constructor() {
        super("s3Page");
    }
    create() {
        this.desk = this.add.tileSprite(0, 0, 800, 800, "desk");
        this.desk.setOrigin(0, 0);

        this.add.text(100, 200, "Now that you're sitting at your desk, ");
        this.add.text(100, 300, " you need to determine your goal information \n(the information is on the far right) to start planning.  ");

       

        var btn_back = this.add.text(100, 500, 'Next', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn_back.on('pointerdown', () => { this.scene.start('mainPage'); });
    }
}