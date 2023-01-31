import Ihm from "./ihm.js";

let boutonPayer = document.getElementById('payer');
let boutonAjouter = document.getElementById('ticket');
let texte = document.getElementById('immatriculation');
let msg = document.getElementById('msg')

let ihm = new Ihm(boutonPayer,boutonAjouter,texte,msg);

ihm.ajoutVehicule();
ihm.ajoutVehiculeTicket(texte);