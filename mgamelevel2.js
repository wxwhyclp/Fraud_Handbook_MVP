class level2 extends Phaser.Scene {
    constructor() {
        super("level2Page");
    }

    create() {

        this.minigame1_background = this.add.tileSprite(0, 0, 800, 600, "minigame1_background");
        this.minigame1_background.setOrigin(0, 0);
        this.add.text(10, 50, "Level 2| be careful trap!");
        //this.music_1 = game.add.audio('bgm', 0.8, true);
        //this.music_1.play();
        var randomX1 = Phaser.Math.Between(0, 800);
        var randomX2 = Phaser.Math.Between(0, 800);
        var randomX3 = Phaser.Math.Between(0, 800);
        var randomX4 = Phaser.Math.Between(0, 800);
        var randomX5 = Phaser.Math.Between(0, 600);

        this.danger1 = this.add.sprite(randomX1, 50, 'danger1');
        this.danger2 = this.add.sprite(randomX2, 50, 'danger2');
        this.danger3 = this.add.sprite(randomX3, 50, 'danger3');
        this.danger4 = this.add.sprite(50, randomX4, 'danger1');
        this.danger5 = this.add.sprite(50, randomX5, 'danger2');

        this.enemies = this.physics.add.group();
        this.enemies.add(this.danger1);
        this.enemies.add(this.danger2);
        this.enemies.add(this.danger3);
        this.enemies.add(this.danger4);
        this.enemies.add(this.danger5);

        this.charmovespeed = 100;
        this.speedup = 0;
        this.time = 0;

        this.clues = this.physics.add.group();
        this.traps = this.physics.add.group();
        this.physics.world.setBoundsCollision();

       
            var clue = this.physics.add.sprite(16, 16, 'clue');
            this.clues.add(clue);
            clue.setRandomPosition(0, 0, 750, 550);

            clue.setVelocity(50, 50);
            clue.setCollideWorldBounds(true);
            clue.setBounce(1);


        for (var i = 0; i < 3; i++) {
            var trap = this.physics.add.sprite(16, 16, 'virus');

            this.traps.add(trap);
            trap.setRandomPosition(0, 0, 750, 550);

            trap.setVelocity(50, 50);
            trap.setCollideWorldBounds(true);
            trap.setBounce(1);

        }



        this.char = this.physics.add.sprite(400, 590, 'char');

        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.score = 0;
        this.scoreBoard = this.add.text(10, 5, "SCORE: 0", { fontSize: '32px', fill: '#f00' });

        this.physics.add.overlap(this.char, this.clues, this.PickUps, null, this);
        this.physics.add.overlap(this.char, this.traps, this.PickTraps, null, this);
        this.physics.add.overlap(this.char, this.enemies, this.decreasePoint, null, this);

        //this.text1 = this.add.text(50, 50, "You get clues: " + this.score);
        // score
        //var scoreFormated = this.zeroPad(this.score, 6);
        //this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE " + scoreFormated  , 16);
        //this.text1 = this.add.text(50, 50, "You get clues: " + scoreFormated);

    }

    PickUps(char, clue) {
        clue.disableBody(true, true);
        this.score += 1;
        this.scoreBoard.setText('Score: ' + this.score);
        clue.setRandomPosition(0, 0, 800, 600);
        //this.text1 = this.add.text(100, 50, "You get clues: " + this.score);
        //var scoreFormated = this.zeroPad(this.score, 6);
        //this.scoreLabel.text = "SCORE " + scoreFormated;
        //this.text1.disableBody(true, true);
        //this.text1 = this.add.text(50, 50, "You get clues: " + scoreFormated);
        //this.text1.text = ("You get clues: " + scoreFormated);
        if (this.score == 5) {
            this.game1win();
        }
    }

    PickTraps(char, trap) {
        this.scene.start('sl2');
    }

    decreasePoint(char, enemy) {
        this.scene.start('sl2');
    }

    game1win() {
        //numclue = this.score;
        //this.scene.start('mainPage');
        this.scene.start('story2Page');
    }



    update() {
        if (this.speedup = 1) {
            this.time += 1;
        }

        if (this.time == 100) {
            this.charmovespeed = 100;
            this.time = 0;
            this.speedup = 0;
        }

        this.moveDanger(this.danger1, 1);
        this.moveDanger(this.danger2, 1);
        this.moveDanger(this.danger3, 1);
        this.moveDangerX(this.danger4, 1);
        this.moveDangerX(this.danger5, 1);
        //this.text1 = this.add.text(50, 50, "You get clues: " + this.score);

        this.movePlayerManager();



    }


    movePlayerManager() {

        this.char.setVelocity(0);

        if (this.cursorKeys.left.isDown) {
            this.char.setVelocityX(-this.charmovespeed);
        } else if (this.cursorKeys.right.isDown) {
            this.char.setVelocityX(this.charmovespeed);
        }

        if (this.cursorKeys.up.isDown) {
            this.char.setVelocityY(-this.charmovespeed);
        } else if (this.cursorKeys.down.isDown) {
            this.char.setVelocityY(this.charmovespeed);
        }

        if (this.cursorKeys.shift.isDown) {
            this.speedup = 1;
            this.charmovespeed = 150;
        }
    }



    moveDanger(danger, speed) {
        danger.y += speed;
        if (danger.y > 600) {
            this.resetDangerPos(danger);
        }
    }

    resetDangerPos(danger) {
        danger.y = 0;
        var randomX = Phaser.Math.Between(0, 800);
        danger.x = randomX;
    }


    moveDangerX(danger, speed) {
        danger.x += speed;
        if (danger.x > 800) {
            this.resetDangerPosX(danger);
        }
    }

    resetDangerPosX(danger) {
        danger.x = 0;
        var randomX = Phaser.Math.Between(0, 800);
        danger.y = randomX;
    }
}
