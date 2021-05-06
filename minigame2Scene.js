class minigame2Scene extends Phaser.Scene {
    constructor() {
        super("minigame2Page");
    }

    create() {

        this.background = this.add.tileSprite(0, 0, 800, 600, "minigame2_background");
        this.background.setOrigin(0, 0);

        var X1 = Phaser.Math.Between(0, 750);
        var X2 = Phaser.Math.Between(0, 750);
        var X3 = Phaser.Math.Between(0, 750);

        var Y1 = Phaser.Math.Between(0, 550);
        var Y2 = Phaser.Math.Between(0, 550);
        var Y3 = Phaser.Math.Between(0, 550);

        this.ship1 = this.add.sprite(X1, Y1, "shield");
        this.ship2 = this.add.sprite(X2, Y2, "shield2");
        this.ship3 = this.add.sprite(X3, Y3, "shield3");

        this.poli = this.add.sprite(0, 0, "po");

        this.enemies = this.physics.add.group();
        this.enemies.add(this.ship1);
        this.enemies.add(this.ship2);
        this.enemies.add(this.ship3);

        this.polices = this.physics.add.group();
        this.polices.add(this.poli);

        this.physics.world.setBoundsCollision();

        this.powerUps = this.physics.add.group();

        this.score = 0;
        this.scoreBoard = this.add.text(200, 5, "Shield break: 0", { fontSize: '32px', fill: '#f00' });

        this.time = 0;
        this.timeBoard = this.add.text(1, 5, "Time: 0", { fontSize: '32px', fill: '#f00' });

        for (var i = 0; i < 5; i++) {
            var powerUp = this.physics.add.sprite(16, 16, "virus");
            this.powerUps.add(powerUp);
            powerUp.setRandomPosition(0, 0, 800, 600);


            powerUp.setVelocity(85, 85);
            powerUp.setCollideWorldBounds(true);
            powerUp.setBounce(1);

        }


        this.player = this.physics.add.sprite(800 / 2 - 8, 600 - 64, "char");
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);

        this.count = 0;
        this.catchspeed = 0.25;

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.projectiles = this.add.group();

        this.physics.add.collider(this.projectiles, this.powerUps, function (projectile, powerUp) {
            projectile.destroy();
        });

        this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, null, this);

        this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);

        this.physics.add.overlap(this.player, this.polices, this.catchPlayer, null, this);

        this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);



    }
    catchPlayer(player, poli) {
        this.scene.start("lose2Page");
    }

    pickPowerUp(player, powerUp) {
        this.score -= 1;
        this.scoreBoard.setText('Shield break: ' + this.score);
        powerUp.setRandomPosition(0, 0, 750, 550);
    }

    hurtPlayer(player, enemy) {
        this.score -= 1;
        this.scoreBoard.setText('Shield break: ' + this.score);
        enemy.setRandomPosition(0, 0, 750, 550);
    }

    hitEnemy(projectile, enemy) {
        this.score += 1;
        this.scoreBoard.setText('Shield break: ' + this.score);
        projectile.destroy();
        enemy.setRandomPosition(0, 0, 750, 550);

        if (this.score == 6) {
            this.scene.start('resultPage');
        }
    }




    update() {

        //this.moveShip(this.ship1, 1);
        //this.moveShip(this.ship2, 2);
        //this.moveShip(this.ship3, 3);

        this.timeMove();

        this.movePlayerManager();
        this.catch(this.poli);

        if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
            this.shootBeam();
        }
        for (var i = 0; i < this.projectiles.getChildren().length; i++) {
            var beam = this.projectiles.getChildren()[i];
            beam.update();
        }


    }

    shootBeam() {
        var beam = new Beam(this);
    }

    timeMove() {
        this.count += 1;
        if (this.count == 40) {
            this.time += 1;
            this.timeBoard.setText('Time: ' + this.time);
            this.count = 0;
        }

    }
    movePlayerManager() {

        this.player.setVelocity(0);

        if (this.cursorKeys.left.isDown) {
            this.player.setVelocityX(-100);
        } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(100);
        }

        if (this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-100);
        } else if (this.cursorKeys.down.isDown) {
            this.player.setVelocityY(100);
        }
    }



    moveShip(ship, speed) {
        ship.y += speed;
        if (ship.y > 600) {
            this.resetShipPos(ship);
        }
    }

    catch(ship) {
        if (this.time > 180) {
            this.catchspeed += 1;
        }
        if ((this.player.x >= ship.x) && (this.player.y >= ship.y)) {
            ship.x += this.catchspeed;
            ship.y += this.catchspeed;
        } else if ((this.player.x >= ship.x) && (this.player.y <= ship.y)) {
            ship.x += this.catchspeed;
            ship.y -= this.catchspeed;
        } else if ((this.player.x <= ship.x) && (this.player.y <= ship.y)) {
            ship.x -= this.catchspeed;
            ship.y -= this.catchspeed;
        } else if ((this.player.x <= ship.x) && (this.player.y >= ship.y)) {
            ship.x -= this.catchspeed;
            ship.y += this.catchspeed;
        }
    }

    resetShipPos(ship) {
        ship.y = 0;
        var randomX = Phaser.Math.Between(0, 800);
        ship.x = randomX;
    }


}