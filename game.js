window.onload = function () {


    var config = {
        width: 800,
        height: 600,
        backgroundColor: 0x66CCFF,
        scene: [preloadScene, Scene1, Scene2, Scene3, resultScene, endScene, minigame1Scene, minigame2Scene, information, shop, loseScene, g1winScene, game1next, s1, s2, s3, level2, lose2, tutorial2, thankPage, story1Scene, story2Scene, story3Scene, small2, small3],
        pixelArt: true,
        physics: {
            default: "arcade",
            arcade: {
                debug: false,
                debugShowVelocity: false
            }
        }
    }

    var numclue = 0;

    var game = new Phaser.Game(config);
}
