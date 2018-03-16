define([], function(){
    class coup {
    	constructor(donnee, recu, id, tour){
    		this.id = id;
    		this.tour = tour;
			this.donnee	= donnee; 		
			this.recu = recu;
    	}
    } 

    return coup;
});