export default class Vehicule {
    constructor(marque,modele,kilometrage,annee,immatriculation){
        this.marque = marque;
        this.modele = modele;
        this.kilometrage = kilometrage;
        this.annee = annee;
        this.immatriculation = immatriculation;
    }

    get marque(){
        return this.marque;
    }

    set marque(marque){
        this.marque = marque;
    }

    get modele(){
        return this.modele;
    }

    set modele(modele){
        this.modele = modele;
    }

    get kilometrage(){
        return this.kilometrage;
    }

    set kilometrage(kilometrage){
        this.kilometrage = kilometrage;
    }

    get annee(){
        return this.annee;
    }

    set annee(annee){
        this.annee = annee;
    }

    get immatriculation(){
        return this.immatriculation;
    }

    set immatriculation(immatriculation){
        this.immatriculation = immatriculation;
    }

    display(){
        return `La voiture de type ${marque()} , de modele ${modele()} avec un kilometrage de ${kilometrage()} et qui est sortie de concession en ${annee()}`
    }
}