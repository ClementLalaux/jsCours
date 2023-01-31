export default class Vehicule {
    constructor(marque,modele,kilometrage,annee,immatriculation){
        this.marque = marque;
        this.modele = modele;
        this.kilometrage = kilometrage;
        this.annee = annee;
        this.immatriculation = immatriculation;
    }

    display(){
        return `La voiture de type ${marque} , de modele ${modele} avec un kilometrage de ${kilometrage} et qui est sortie de concession en ${annee}`
    }
}