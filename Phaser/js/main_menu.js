
function main_menu (){

	game.stage.backgroundColor = '#1394a2';

    
    
    var Billy = game.add.sprite(25,100,"bosseur");
    var Teemo = game.add.sprite(225,100,"gaffeur");
    var Jeanne = game.add.sprite(425,100,"susceptible");
    var Ed = game.add.sprite(625,100,"manipulateur");
    

    Billy.scale.setTo(0.5,0.5);
    Teemo.scale.setTo(0.5,0.5);
    Jeanne.scale.setTo(0.5,0.5)
    Ed.scale.setTo(0.5,0.5);


    Billy.animations.add('jump');
    Billy.animations.play('jump', 12, true);

    Teemo.animations.add('jump');
    Teemo.animations.play('jump', 12, true);
    
    Jeanne.animations.add('jump');
    Jeanne.animations.play('jump', 12, true);

    Ed.animations.add('jump');
    Ed.animations.play('jump', 12, true);
    
    



    var arcade = game.add.button(game.world.centerX - 250 - 100, game.world.centerY +100 ,"boutons", actionOnClick);
    arcade.scale.setTo(0.5,0.5);
    arcade.setFrames(2,0,1);


    var histoire = game.add.button(game.world.centerX +100 , game.world.centerY +100 ,"boutons", actionOnClick);
    histoire.scale.setTo(0.5,0.5);
    histoire.setFrames(11,9,10);



    /*
    arcade.onInputOver.add(over, this);
    arcade.onInputOut.add(out, this);

    function over() {
        console.log('button over');
    }

    function out() {
        console.log('button out');
    }

    function actionOnClick () {
        console.log('click');
    }
    */

    var actionOnClick = function(){
        game.state.start('game');
    }


}
