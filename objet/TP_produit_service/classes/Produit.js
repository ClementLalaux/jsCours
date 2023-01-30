import Tertiaire from "./Tertiaire.js"

export class Produit extends Tertiaire {
    constructor(titre,prix,description,stock){
        super(titre,prix,description);
        this.stock = stock;
    }
}