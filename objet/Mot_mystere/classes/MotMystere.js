
export  class MotMystere{

    constructor(valeur){
        this.valeur = valeur;
        this.tableauVide = [];
        this.tableauVideBis = [];
        this.tableauLettreEntree = [];
        this.html = "";
        this.compteur = 5;
    }

    remplirTableau(){
        for(let i = 0; i<this.valeur.length;i++){
            this.tableauVide.push("_");
            this.tableauVideBis.push(this.valeur[i]);
        }
    }

    afficherMotTiret(e,c,lu){
        this.html = ""
        for(let i=0;i<this.tableauVide.length; i++){
            this.html += `<span class=${i}>${this.tableauVide[i]}</span> `
        }
        e.innerHTML = this.html;
        this.afficherCompteur(c);
        this.afficherTableauLettreUtilises(lu);
    }

    testerLettre(k,l,e,c,lu){
        k.addEventListener("click", () =>{
            if(this.tableauVideBis.includes(l.value)){
                for(let i = this.tableauVide.length-1;i>=0;i--){
                    if(this.tableauVideBis.includes(l.value,i)){
                        this.tableauVide[this.tableauVideBis.indexOf(l.value,i)] = l.value;
                    }
                }
            } else {
                this.compteur --;
            }
            this.tableauLettreEntree.push(l.value)
            this.afficherMotTiret(e,c,lu);
            this.afficherTableauLettreUtilises(lu);
            this.verif();
        })
    }

    afficherCompteur(c){
        c.innerText = this.compteur;
    }

    afficherTableauLettreUtilises(lu){
        let txt = "Lettres utilisés : "
        for(let i=0; i<this.tableauLettreEntree.length;i++){
            txt += this.tableauLettreEntree[i] + " "
        }
        lu.innerText = txt;
    }

    verif(){
        if(this.compteur == 0){
            alert("Plus d'essais");
            return;
        } else if(JSON.stringify(this.tableauVide) === JSON.stringify(this.tableauVideBis)){
            alert("Vous avez gagnez");
            return;
        }
    }
}