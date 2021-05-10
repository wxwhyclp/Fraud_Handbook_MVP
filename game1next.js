class game1next extends Phaser.Scene {

    constructor() {
        super("game1nextPage");
    }

    create() {
        this.minigame1_background = this.add.tileSprite(0, 0, 800, 600, "chaseb");
        this.minigame1_background.setOrigin(0, 0);
        this.add.text(10, 50, "Pick the items then Click the police to stop their trace!", { fontSize: '20px', fill: '#00f' });
       // this.music_1 = game.add.audio('bgm', 0.8, true);
       // this.music_1.play();
        this.clues = this.physics.add.group();
        
        this.physics.world.setBoundsCollision();

        var X1 = Phaser.Math.Between(0, 750);

        var Y1 = Phaser.Math.Between(0, 520);

        this.item = this.add.sprite(X1, Y1, "wb");
        this.items = this.physics.add.group();
        this.items.add(this.item);
        this.itemused = 0;

        for (var i = 0; i < 5; i++) {
            var clue = this.physics.add.sprite(16, 16, 'po');
            this.clues.add(clue);
            clue.setRandomPosition(0, 0, 800, 600);
            clue.setInteractive();
            clue.setVelocity(75, 75);
            clue.setCollideWorldBounds(true);
            clue.setBounce(1);

        }

        this.input.on('gameobjectdown', this.destroyShip, this);




        this.char = this.physics.add.sprite(300, 500, 'char');

        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.score = 0;
        this.scoreBoard = this.add.text(10, 5, "SCORE: 0", { fontSize: '32px', fill: '#0f0' });

        
        this.ItemBoard = this.add.text(10, 100, "Work-box left: 0", { fontSize: '32px', fill: '#0f0' });

        this.physics.add.overlap(this.char, this.clues, this.PickUps, null, this);

        this.physics.add.overlap(this.char, this.items, this.PickI, null, this);

        

        //this.text1 = this.add.text(50, 50, "You get clues: " + this.score);
        // score
        //var scoreFormated = this.zeroPad(this.score, 6);
        //this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE " + scoreFormated  , 16);
        //this.text1 = this.add.text(50, 50, "You get clues: " + scoreFormated);

    }

    PickUps(char, clue) {
        this.scene.start("sl3");
    }

    PickI(char, item) {
        item.setRandomPosition(0, 0, 750, 550);
        this.itemused += 1;
        this.ItemBoard.setText('Work-box left: ' + this.itemused);
    }

    destroyShip(pointer, gameObject) {
        if (this.itemused > 0) {
            this.itemused -= 1;
            this.ItemBoard.setText('Work-box left: ' + this.itemused);
            gameObject.setTexture("explosion");
            gameObject.play("explode");
            this.score += 1;
            this.scoreBoard.setText('Score: ' + this.score);
            if (this.score == 5) {
                this.game1win();
            }
        }
    }



    game1win() {
        //numclue = this.score;
        //this.scene.start('mainPage');
        this.scene.start('story3Page');
    }



    update() {
        this.minigame1_background.tilePositionY -= 0.5;
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
