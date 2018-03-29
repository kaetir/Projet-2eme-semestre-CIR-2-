define(["Phaser","preloader"], function(Phaser,Ball){
    
    Ball.Boot = (game)=> {};
    Ball.Boot.prototype = {

        create: ()=> {
            bouton = this.add(Phaser.button(200, 400, 'buttons', actionOnClick, this, 2, 1, 0));
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            this.game.state.start('main_menu');
        }
    };

    return Ball;
});


