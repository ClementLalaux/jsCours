import Mammifere from "./Mammifere.js";

export default class Humain extends Mammifere {
    constructor(nom,prenom){
        super(nom,"Humain");
        this.nom = nom;
        this.prenom = prenom;
    }

    Display(){
        console.log(this);
    }
}