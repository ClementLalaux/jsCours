export default class EtreVivant {
    constructor(nom,type){
        this.nom = nom;
        this.type = type;
    }

    Naissance(){
        console.log("Naissance");
    }

    Mort(){
        console.log("Mort");
    }

    Nourrir(){
        console.log("Nourrir");
    }

    Respirer(){
        console.log("Respirer")
    }
}