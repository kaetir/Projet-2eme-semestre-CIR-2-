
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}






var game = new Phaser.Game(1152, 648, Phaser.AUTO, 'Trust Me', { 
    boot : boot,
    preload: preload, 
    create: create, 
    menu : main_menu,
}, true, true);


game.Game = new JEU();

game.Game.addJoueur("Billy","Bosseur");
game.Game.addJoueur("Jeanne","Suceptible");
game.Game.addJoueur("Teemo","Gaffeur");
game.Game.addJoueur("Ed","Manipulateur");
game.Game.addJoueur("You","Humain");

