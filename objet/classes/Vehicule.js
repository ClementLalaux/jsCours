export class Vehicule {
    constructor(roues=4){
        this.roues = roues;
    }

    afficher(){
        return 'Je suis un véhicule avec ' + this.roues + ' roues ' 
    }
}