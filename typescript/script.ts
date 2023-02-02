import { Contact } from "./classes/Contact.js";

let tableauContact : Contact[] = [];

let contact1 :Contact = new Contact('Clement','Lalaux',new Date(1998,10,5),"lalauxclement@gmail.com","0761147926");
let contact2 :Contact = new Contact('Jean','Valjean',new Date(1998,10,5),"lalauxclement@gmail.com","0761147926");
let contact3 :Contact = new Contact('John','Doe',new Date(1998,10,5),"lalauxclement@gmail.com","0761147926");
let contact4 :Contact = new Contact('Test','Test',new Date(1998,10,5),"lalauxclement@gmail.com","0761147926");
let contact5 :Contact = new Contact('Clement','Lalaux',new Date(1998,10,5),"lalauxclement@gmail.com","0761147926");
let dom = document.getElementById('liste') as HTMLElement;
let info = document.getElementById('info') as HTMLElement;

tableauContact.push(contact1);
tableauContact.push(contact2);
tableauContact.push(contact3);
tableauContact.push(contact4);
tableauContact.push(contact5);

const afficheListeContact = (dom :HTMLElement) :void => {
    let texteHtml :string = "";
    tableauContact.forEach(contact => {
        texteHtml += `<p class="liste-contact"id="${contact.id}">${contact.nom} ${contact.prenom}</p>`
    })
    dom.innerHTML = texteHtml;
    ajoutEvent();
}

const ajoutEvent = () => {
    let listeContact = document.querySelectorAll('.liste-contact');
    listeContact.forEach(contact => {
        contact.addEventListener('click', ()=>{
            afficherInfo(tableauContact[Number(contact.id)-1]);
            colorise(contact,listeContact);
        });
    })
}

const afficherInfo = (cont :Contact) => {
    let infoContactHtml = 
    `<p>Nom : ${cont.nom}</p>
    <p>Prenom : ${cont.prenom}</p>
    <p>Date de naissance : ${cont.dateDeNaissance}</p>
    <p>Email : ${cont.email}</p>
    <p>Numéro de téléphone : ${cont.numeroTelephone}</p>
    `;
    info.innerHTML = infoContactHtml;
}

const colorise = (contact :Node,liste :NodeList) => {
    liste.forEach(element  => {
        if((element as HTMLParagraphElement).classList.contains("color")){
            (element as HTMLParagraphElement).classList.remove("color"); 
        }
    });
    (contact as HTMLParagraphElement).classList.add("color");
}

afficheListeContact(dom);
