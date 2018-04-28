var main_menu = {
    
    create : function(){
        game.add.tileSprite(0, 0, 1152, 648, 'background'); 
        
        /*
        description : passe en plein ecran
        argument : none
        return : none
        */
        function gofull() {
            if (game.scale.isFullScreen){
                game.scale.stopFullScreen();
            }
            else{
                game.scale.startFullScreen(false);
            }
        };

        var Logo = game.add.sprite(game.world.centerX, game.world.centerY , "logo");
        Logo.scale.setTo(0.7,0.7);
        Logo.anchor.setTo(0.5,0.8);
        var startingButton = game.add.button(game.world.centerX, game.world.centerY ,"boutons" , ()=>{
            // a remettre pour les release
            //gofull();
            startingButton.destroy();
            Logo.destroy();
            this.vraiMenu();
        },this); 
        startingButton.scale.setTo(0.5,0.5);
        startingButton.anchor.setTo(0.5,-0.5);

        startingButton.setFrames(17,15,16);


    },

    vraiMenu : function(){

        var persos = game.add.group();

        persos.create(game.world.centerX,game.world.centerY,"bosseur");
        persos.create(game.world.centerX,game.world.centerY,"gaffeur");
        persos.create(game.world.centerX,game.world.centerY,"susceptible");
        persos.create(game.world.centerX,game.world.centerY,"manipulateur");

        
        persos.scale.setTo(0.5,0.5);
        
        persos.forEach((item,index)=>{
            item.anchor.setTo(0.5,0.5) 
        });
        
        persos.forEach((perso)=>{
            perso.animations.add('jump');
        })
            
        persos.callAll('animations.play', 'animations', 'jump', 12, true);


        
        var arcade = game.add.button(game.world.centerX - 250 - 100, game.world.centerY +100 ,"boutons", startArcade, this);
        arcade.scale.setTo(0.5,0.5);
        arcade.setFrames(2,0,1);

        var histoire = game.add.button(game.world.centerX +100 , game.world.centerY +100 ,"boutons", startHistory);
        histoire.scale.setTo(0.5,0.5);
        histoire.setFrames(11,9,10);




        /*
        description : nettoie la scene et lance le mode arcade
        argument : none
        return : none
        */
        function startArcade (){
            persos.destroy();
            histoire.destroy();
            arcade.destroy();
            game.state.add("game", leJeu);
            game.state.start('game');
        };
        /*
        description : nettoie la scene et lance le mode histoire
        argument : none
        return : none
        */
        function startHistory (){

        };


    }




}

