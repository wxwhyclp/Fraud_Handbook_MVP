class Scene1 extends Phaser.Scene {

    constructor() {
        super("Startmenu");
    }



    //clickStartPage() {
    //    this.scene.start('mainPage');
    //}

    create() {
        this.homepage = this.add.tileSprite(0, 0, 800, 800, "homepage");
        this.homepage.setOrigin(0, 0);
        //this.music_1 = game.add.audio('bgm', 0.8, true);
       // this.music_1.play();
        //this.add.text(300, 200, "Start Menu");
        // const clickbutton = this.add.text(300, 400, "Start Game")
        // .setInteractive()
        // .on('gameobjectdown', () => this.clickStartPage);
        //this.scene.start('mainPage');.

        // click anywhere on the scene to next page:
        // this.input.on('pointerdown', () => this.clickStartPage)
        // this.input.on('pointerdown', () => this.scene.start('mainPage'))
        // let btn2 = this.add.text(500, 300, 'Play Game')
        // var btn1 = this.add.sprite(300, 350, 'playButton').setInteractive();
        // btn1.on('pointerdown', () => {this.scene.start('mainPage');});
        var btn1 = this.add.text(320, 370, 'Start game', { fontSize: '20px', fill: '#ff0' }).setInteractive();
        btn1.on('pointerdown', () => { this.scene.start('s1Page'); });



        // btn1.on = ( 'pointerdown', () => {this.scene.start('mainPage');}, this)
        // btn1.setOrigin(0)
        // this.input.on('gameobjectdown', () => this.scene.start('mainPage'))



        // Setting page, tempory not avaliable
        // currently a debugging tool
        // var btn2 = this.add.text(300, 450, 'testing').setInteractive();
        // btn2.on('pointerdown', () => { this.scene.start('resultPage'); });

        //btnStart.setDisplaySize(32,32);
        //btnStart.on('pointerover', function (event) { btnStart.setTexture('imgButtonStartHover');/* Do something when the mouse enters */ });
        //btnStart.on('pointerout', function (event) { btnStart.setTexture('imgButtonStartNormal');/* Do something when the mouse exits. */ });
        // btnStart.on('pointerdown', function(event){
        //   btnStart.setTexture('shell');
        //   this.scene.start('gamepage1');
        // }); // Start the main game.

        //this.add.text(350, 500, 'Exit');
        var btn2 = this.add.text(340, 500, 'Exit').setInteractive();
        btn2.on('pointerdown', () => { this.scene.start('thankpage'); });

        
    }
}