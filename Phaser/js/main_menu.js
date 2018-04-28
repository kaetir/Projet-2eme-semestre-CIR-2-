var main_menu = {
    Logo : {},
    persos : {},

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


        Logo = game.add.sprite(game.world.centerX, game.world.centerY , "logo");
        Logo.scale.setTo(0.7,0.7);
        Logo.anchor.setTo(0.5,0.8);

        // passage en plein écran
        var startingButton = game.add.button(game.world.centerX, game.world.centerY ,"boutons" , ()=>{
            // a remettre pour les release
            //gofull();
            startingButton.destroy();
            //Logo.destroy();
            this.vraiMenu();
        },this); 
        startingButton.scale.setTo(0.5,0.5);
        startingButton.anchor.setTo(0.5,-0.5);

        startingButton.setFrames(17,15,16);




    },


    vraiMenu : function(){

        Logo.scale.setTo(0.5);
        Logo.anchor.setTo(0.5,1.2);


        persos = game.add.group();

        persos.create(game.world.centerX-300*3,game.world.centerY,"bosseur");
        persos.create(game.world.centerX-150*3,game.world.centerY,"gaffeur");
        persos.create(game.world.centerX+150*3,game.world.centerY,"susceptible");
        persos.create(game.world.centerX+300*3,game.world.centerY,"manipulateur");
        
        
        persos.scale.setTo(0.5);
        persos.callAll("anchor.setTo",0.5);


        persos.forEach((perso)=>{
            perso.animations.add('jump');
            perso.anchor.setTo(-1.5 ,0);
        })
        
        persos.callAll('animations.play', 'animations', 'jump', 12, true);

        persos.forEach((perso,index)=>{
            game.debug.spriteInfo(perso,32,32*(index+1));
        })

        
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


    },

    render : ()=>{

    }



}

