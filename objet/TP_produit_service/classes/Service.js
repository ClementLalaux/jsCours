import Tertiaire from "./Tertiaire.js"

export class Service extends Tertiaire {
    constructor(titre,prix,description,domaine){
        super(titre,prix,description);
        this.domaine = domaine;
    }
}