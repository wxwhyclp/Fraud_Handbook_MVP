class preloadScene extends Phaser.Scene {
    constructor() {
        super("Page");
    }

    preload() {
        this.load.image("homepage", "assets/img/homepage.png");
        this.load.image("playButton", "assets/img/homepage_play.png");
            //this.load.image("playAgain", "assets/img/homepage_playagain.png");
        this.load.image("desk", "assets/img/mainpage_desk.png");
            //this.load.image("desktop", "assets/img/mainpage_desktop.png");
            //this.load.image("phone", "assets/img/mainpage_phone.png");
        //this.load.image("background_sky", "assets/img/sky-sea.jpg");
        this.load.image("setting_background", "assets/img/setting_background.png");
        this.load.image("collect_button", "assets/img/collect_button.png");
        this.load.image("result_button", "assets/img/result_button.png");
        this.load.image("target", "assets/img/clues.png");
        this.load.image("minigame1_background", "assets/img/minigame1_background2.png");
        this.load.image("knife", "assets/img/collecter.png");
        this.load.image("character", "assets/img/character.png");
        this.load.image("endback", "assets/img/endbackground.png");
        this.load.image("p1", "assets/img/part1.png");
        this.load.image("p2", "assets/img/part2.png");

        this.load.image("danger1", "assets/img/danger1.png");
        this.load.image("danger2", "assets/img/danger2.png");
        this.load.image("danger3", "assets/img/danger3.png");
        this.load.image("danger2", "assets/img/clue.png");
        this.load.image("char", "assets/img/char.png");
        this.load.image("ball", "assets/img/ball.png");
        this.load.image("virus", "assets/img/virus.png");
        this.load.image("clue", "assets/img/clue.png");

        this.load.image("minigame2_background", "assets/img/game2_back.png");
        this.load.image("shield", "assets/img/shield.png");
        this.load.image("shield2", "assets/img/shield2.png");
        this.load.image("shield3", "assets/img/shield3.png");

        this.load.image("po", "assets/img/police.png");

        this.load.image("tutor", "assets/img/tuto.png");
       //this.load.audio('bgm', 'assets/img/bgm.mp3');

        this.load.spritesheet("explosion", "assets/img/explosion.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet("beam", "assets/img/beam.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        }



    create() {
        this.add.text(300,200, "Home page");
        //this.wait(0);
        this.scene.start("Startmenu");

        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1
        });

    }
}
