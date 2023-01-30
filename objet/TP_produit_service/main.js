import { Ihm } from "./classes/Ihm.js";


const form = document.querySelector("#formContact");
const result_service = document.querySelector("#result_service");
const result_produit = document.querySelector("#result_produit");


const ihm = new Ihm(form,result_service,result_produit);

ihm.demarrer();
let t = document.querySelectorAll("input[name='tertiaire']");
for(let i=0;i<t.length ; i++){
    ihm.cacher(t[i])
}