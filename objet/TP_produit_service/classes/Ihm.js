import { Produit } from "./Produit.js";
import { Service } from "./Service.js";


export class Ihm {
    constructor(formulaire,tableauHtmlResultat_service,tableauHtmlResultat_produit){
        this.services = [];
        this.produits = [];
        this.formulaire = formulaire;
        this.tableauHtmlResultat_service = tableauHtmlResultat_service;
        this.tableauHtmlResultat_produit = tableauHtmlResultat_produit;
    }

    demarrer(){
        this.formulaire.addEventListener("submit",(e) => {
            e.preventDefault();
            this.ajouter();
        })
    }

    ajouter(){
        const tertaire = this.formulaire.querySelector("input[name='tertiaire']:checked").value
        const titre = this.formulaire.querySelector("input[name='titre']").value
        const prix = this.formulaire.querySelector("input[name='prix']").value
        const description = this.formulaire.querySelector("input[name='description']").value
        const stock = this.formulaire.querySelector("input[name='stock']").value
        const domaine = this.formulaire.querySelector("input[name='domaine']").value
        if(tertaire == "service"){
            let service = new Service(titre,prix,description,domaine);
            console.log(service);

            this.services.push(service);
            this.afficher_service(service);
        } else if(tertaire == "produit"){
            let produit = new Produit(titre,prix,description,stock);
            this.produits.push(produit);
            this.afficher_produit(produit);
        } else {
            alert('Aucun type choisit');
        }   
    }

    afficher_produit(c){
        this.tableauHtmlResultat_produit.innerHTML += `<tr>
        <td>${c.titre}</td>
        <td>${c.prix}</td>
        <td>${c.description}</td>
        <td>${c.stock}</td>
        </tr>`
    }

    afficher_service(c){
        this.tableauHtmlResultat_service.innerHTML += `<tr>
        <td>${c.titre}</td>
        <td>${c.prix}</td>
        <td>${c.description}</td>
        <td>${c.domaine}</td>
        </tr>`
    }

    cacher(e){
        e.addEventListener('change',() => {
            if(e.value == "service"){
                this.formulaire.querySelector("div[name='pr']").classList = "row m-1 cacher";
                this.formulaire.querySelector("div[name='se']").classList = "row m-1 pasCacher";
            } else {
                this.formulaire.querySelector("div[name='se']").classList = "row m-1 cacher";
                this.formulaire.querySelector("div[name='pr']").classList = "row m-1 pasCacher";
            }
        })
    }
}