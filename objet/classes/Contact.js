export class Contact {
    constructor(nom,prenom,date,telephone,email){
        this.nom = nom;
        this.prenom = prenom;
        this.date = date;
        this.telephone = telephone;
        this.email = email;
    }

    toString(){
        console.log(`Bonjour, je suis ${this.prenom} ${this.nom} , je suis née le ${this.date} , mon num est ${this.telephone} et mon email est ${this.email}`)
    }
}
