import { Vehicule } from "./Vehicule.js";

export class Voiture extends Vehicule{
    constructor(marque,modele,vitesse){
        super();
        this.marque = marque;
        this.modele = modele;
        this.vitesse = vitesse;

    }

    afficher(){
        return super.afficher() + `La ${this.marque} ${this.modele} est a ${this.vitesse} km/h <br/>`;
    }

    accelerer(){
        this.vitesse = this.vitesse + 10;
        return this.afficher();
    }

    tourner(){
        if(this.vitesse > 5){
            this.vitesse = this.vitesse - 5;
        } else {
            this.vitesse = 0;
        }
        return this.afficher();
    }   
}