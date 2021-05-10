class s1 extends Phaser.Scene {

    constructor() {
        super("s1Page");
    }

    create() {
        this.backG = this.add.tileSprite(0, 0, 800, 800, "setting_background");
        this.backG.setOrigin(0, 0);
        this.add.text(100, 200, "In the recent outbreak, you were laid off from your job \nas a member of the company's IT department, which was \na big blow to your family.");
        // this.add.text(100, 250, "a member of the company's IT department,\n which was a big blow to your family");
        this.bgm = this.sound.add('bgm');
        this.bgm.play();
        this.add.text(100, 300, "At home you have nothing to do but watch TV every day \nand mentally curse your boss for firing you.");

        var btn_back = this.add.text(100, 500, 'Next', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn_back.on('pointerdown', () => { this.scene.start('s2Page'); });

        //testing block
        //var btn1 = this.add.text(200, 500, 'losepage2').setInteractive();
        //btn1.on('pointerdown', () => { this.scene.start('losePage2'); });
    }
}
