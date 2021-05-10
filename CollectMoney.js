class collectMoney extends Phaser.Scene {
    constructor() {
        super("cm");
    }

    create() {
        this.background = this.add.tileSprite(0, 0, 800, 600, "cback");
        this.background.setOrigin(0, 0);

        var X1 = Phaser.Math.Between(0, 750);
        var Y1 = Phaser.Math.Between(0, 550);


        this.danger1 = this.add.sprite(X1, Y1, 'coin');
        this.danger1.setInteractive();

        this.danger2 = this.add.sprite(100, 66, 'coin');
        this.danger2.setInteractive();

        this.danger3 = this.add.sprite(341, 275, 'coin');
        this.danger3.setInteractive();

        this.danger4 = this.add.sprite(444, 555, 'coin');
        this.danger4.setInteractive();

        this.input.on('gameobjectdown', this.destroy, this);

        this.count = 0;
        this.score = 0;
        this.scoreBoard = this.add.text(200, 5, "Money: 0", { fontSize: '32px', fill: '#f00' });

        this.time = 0;
        this.timeBoard = this.add.text(1, 5, "Time: 0", { fontSize: '32px', fill: '#f00' });
    }
    update() {

        this.timeMove();

    }

    destroy(pointer, gameObject) {
        gameObject.setRandomPosition(0, 0, 750, 550);
        this.score += 1;
        this.scoreBoard.setText('Money: ' + this.score);
      
    }

    timeMove() {
        this.count += 1;
        if (this.count == 60) {
            this.time += 1;
            this.timeBoard.setText('Time: ' + this.time);
            this.count = 0;
        }


        if (this.time == 30 || this.score >= 50) {
            this.scene.start("story4Page");
        }
    }


}