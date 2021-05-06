class game1next extends Phaser.Scene {

    constructor() {
        super("game1nextPage");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 600, "minigame1_background");
        this.minigame1_background.setOrigin(0, 0);
        this.add.text(10, 50, "Click the police to stop their trace!");
       // this.music_1 = game.add.audio('bgm', 0.8, true);
       // this.music_1.play();
        this.clues = this.physics.add.group();
        this.traps = this.physics.add.group();
        this.physics.world.setBoundsCollision();

        for (var i = 0; i < 5; i++) {
            var clue = this.physics.add.sprite(16, 16, 'po');
            this.clues.add(clue);
            clue.setRandomPosition(0, 0, 800, 600);
            clue.setInteractive();
            clue.setVelocity(50, 50);
            clue.setCollideWorldBounds(true);
            clue.setBounce(1);

        }

        this.input.on('gameobjectdown', this.destroyShip, this);




        this.char = this.physics.add.sprite(300, 400, 'char');

        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.score = 0;
        this.scoreBoard = this.add.text(10, 5, "SCORE: 0", { fontSize: '32px', fill: '#f00' });

        this.physics.add.overlap(this.char, this.clues, this.PickUps, null, this);
        this.physics.add.overlap(this.char, this.enemies, this.decreasePoint, null, this);

        //this.text1 = this.add.text(50, 50, "You get clues: " + this.score);
        // score
        //var scoreFormated = this.zeroPad(this.score, 6);
        //this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE " + scoreFormated  , 16);
        //this.text1 = this.add.text(50, 50, "You get clues: " + scoreFormated);

    }

    destroyShip(pointer, gameObject) {
        gameObject.setTexture("explosion");
        gameObject.play("explode");
        this.score += 1;
        this.scoreBoard.setText('Score: ' + this.score);
        if (this.score == 5) {
            this.game1win();
        }
    }



    game1win() {
        //numclue = this.score;
        //this.scene.start('mainPage');
        this.scene.start('game1Success');
    }



    update() {

        //this.text1 = this.add.text(50, 50, "You get clues: " + this.score);

        this.movePlayerManager();



    }


    movePlayerManager() {

        this.char.setVelocity(0);

        if (this.cursorKeys.left.isDown) {
            this.char.setVelocityX(-100);
        } else if (this.cursorKeys.right.isDown) {
            this.char.setVelocityX(100);
        }

        if (this.cursorKeys.up.isDown) {
            this.char.setVelocityY(-100);
        } else if (this.cursorKeys.down.isDown) {
            this.char.setVelocityY(100);
        }
    }


}
