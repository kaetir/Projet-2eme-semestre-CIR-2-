define(["Phaser","preloader"], function(Phaser,Ball){

    Ball.game = (game)=> {this.game = game}

    Ball.create = function(){
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        
        //this.game.state.start('main_menu');

    };


    return Ball;
});


